"use strict";
// const str:string = "Caca"
// const num:number = 0
// const stat:boolean = false;
// const nuu:null = null
// const undef:undefined = undefined;
// const unkn:unknown = ""
// const anyy:any = 0
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const axios_1 = __importDefault(require("axios"));
const dataApi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get('https://icat-trainee-api.onrender.com/getData');
        return data.data;
    }
    catch (error) {
        console.error('Error', error);
        throw error;
    }
});
const findHighestRateHobby = (hobbies) => {
    const highestRateHobby = hobbies.reduce((prev, current) => (prev.rate > current.rate) ? prev : current);
    return highestRateHobby.hobbyName;
};
const output = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dataApi();
        data.forEach((item) => {
            const highestRateHobby = findHighestRateHobby(item.hobbie);
            console.log(`Username: ${item.username}, Age: ${item.age}, Highest Rate Hobby: ${highestRateHobby}`);
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
});
output();
