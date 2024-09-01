let arr = [1,2,3,4,5,6,7,8]
// filter, find
//mutable
let a = [
    { name: 'hang', age: 23},
    { name: 'ly', age: 23},
    {name:'eric', age: 45}
]
let filter = a.find((item,index)=>{
    // console.log('item: ',item, ' index:', index)
    return item&&item.age==29 
})
console.log(filter)