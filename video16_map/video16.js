
let arr = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i<arr.length;i++){
    console.log('check value: ', arr[i])
}

let mapArr = arr.map((item,index)=>{
    return item*item
})


// map tao ra 1 arr moi khong anh huong den arr cu
console.log(mapArr)
console.log(arr)