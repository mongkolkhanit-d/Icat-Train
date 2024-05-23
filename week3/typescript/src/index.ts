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

interface DetailData{
    username:string
    age:number
    hobby:string
}

const dataApi = async(): Promise<DetailData[]> => {
    try{
        const {data} = await axios.get('https://icat-trainee-api.onrender.com/getData');
        return data.data;
    }catch (error) {
        console.error('Error',error);
        throw error;
     }
}

const output = async () => {
    try {
        const data = await dataApi();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

output();