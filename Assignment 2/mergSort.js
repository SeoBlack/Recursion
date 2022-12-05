let merge = (arr) =>{
    if (arr.length === 0 ) return "non valid array";
    if (arr.length === 1 ) return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid, arr.length);

    return sort(merge(left),merge(right));
}

let sort = (leftArr, rightArr) =>{
    const temp = []
    let i = 0;
    let j = 0;
    while(i < leftArr.length && j < rightArr.length ){
        if(leftArr[i] < rightArr[j]){
            temp.push(leftArr[i]);
            i++
        }else{
            temp.push(rightArr[j]);
            j++
        }
    }
    while(i < leftArr.length){
        temp.push(leftArr[i])
        i++;
    }
    while(j < rightArr.length){
        temp.push(rightArr[j]);
        j++
    }
    return temp;
}
console.log(merge([2, 5, 4, 99, 4, 5, 555]));