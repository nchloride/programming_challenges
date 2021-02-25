const array = [4,5,2,1,3,6,8,7];

for(let i =0; i<array.length; i++){
    let lastElement = array.length;
    for (let j = 0;j < array.length;j++) {
        if(array[lastElement]<array[j]){
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
    lastElement--;
}
console.log(array);