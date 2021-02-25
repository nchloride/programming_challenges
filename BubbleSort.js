const a = [1,2,4,5,3];

let swap

    // 1 -> 2 -> 4 -> 5 -> 3
    // 1->2->
    do{
        swap = false
        for (let index = 0; index < a.length; index++) {
            if(a[index]>a[index+1]){
                temp = a[index]
                a[index] = a[index+1]
                a[index+1] = temp
                swap=true;
            }
        }
    }
    while(swap)

console.log(a);