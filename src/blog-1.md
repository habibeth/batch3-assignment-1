1. The significance of union and intersection types in Typescript.
Ans: union and intersection is one of the powerful feature in TypeScript. Union holds different data Types. Union Define |. Union accept Multiple values. It's mainly use different data types. One of condition fullfil etc. Otherwise intersection define multiple types in one. It's define & sign. intersection fullfil all types of condition. It measure matching data. It's improve code reusability.

Example Union
const kgToGm = (value: string | number) : string | number | undefined =>{

}

input value string or number, output value string or number or undefined 

if(number>0 & number<100){
    console.log("positive Number");
}

check those condition is true;


Summary, union and intersection is essential feature in typescript for the developer flexibility, improve code reusability and maintainability.