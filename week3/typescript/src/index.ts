// const str:string = "Caca"
// const num:number = 0
// const stat:boolean = false;
// const nuu:null = null
// const undef:undefined = undefined;
// const unkn:unknown = ""
// const anyy:any = 0

// const arrStr:string[] = ["a","a","a"]
// const objTs:Record<string,string | number> = {
//     name:"Caca",
//     age:20
// }
// const age:string | number = 20

// interface IUser{
//     username:string
//     password:string
//     email:string
//     gpax:number
//     vip?:boolean
// }
// const User:IUser = {
//     username:"Caca",
//     password:"1231",
//     email:"Soda@mail.com",
//     gpax:4.00
// }

// console.log(User.password);

import axios from "axios"

interface Hobby {
    hobbyName: string;
    rate: number;
}

interface DetailData{
    name:string
    age:number
    hobbie: Hobby[];
}

const dataApi = async(): Promise<DetailData[]> => {
    try{
        const rawdata = await axios.get('https://icat-trainee-api.onrender.com/getData');
        const mediumdata = rawdata.data.data.data;
        // console.log(mediumdata);
        return mediumdata;
    }catch (error) {
        console.error('Error',error);
        throw error;
     }
}

function mostlikehobby(hobbyName: Hobby[]) {
    return hobbyName.reduce((most, hobby) => hobby.rate > most.rate ? hobby : most);
}


const output = async () => {
    try {
        const data = await dataApi();
        const outputData = data.map((detail:DetailData) => {
            const mostLikeHobbie = mostlikehobby(detail.hobbie)
            
            return {
                name: detail.name,
                age: detail.age,
                hobbie: mostLikeHobbie.hobbyName
            }
        })
        console.log(outputData);
    } catch (error) {
        console.error('Error:', error);
    }
    
}

output();
