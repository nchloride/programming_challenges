
const objectComparison= (obj1,obj2)=>{
    let notEqualCounter = 0;
    for(const [key,value] of Object.entries(obj1)){
        obj2[key] !== value && notEqualCounter++;
    }
    return notEqualCounter>0?"Objects not equal":"Objects are equal";
}

const obj1={
    firstName:"Juan",
    LastName:"Karlos"
} 
const obj2={
    firstName:"Juan",
    LastName:"Miguel"
}
console.log(objectComparison(obj1,obj2))