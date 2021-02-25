
const cylinderVolume = (radius,height)=>{
    return (Math.PI*(Math.pow(radius,2))*height).toFixed(4);
}

console.log(cylinderVolume(20,40));
