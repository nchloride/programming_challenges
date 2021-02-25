let unsortedArray = [2,5,3,4,1,7,8];

for(let i=1;i<unsortedArray.length;i++){
    let j = i;
    while(j>0 && unsortedArray[j-1]>unsortedArray[j]){
        temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j-1];
        unsortedArray[j-1] = temp;
        console.log(j);
        j--;
    }
}
console.log(unsortedArray);