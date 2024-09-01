let sum =(a,b, callback)=>{
    let tong = a+b
    setTimeout(()=>{
        callback(tong)
    }, 5000)
    setInterval(()=>{
        callback(tong)
    }, 1000)
    
}
// console.log('ketqua: ', sum(6,7))
let printSum =(mess)=>{
    console.log('checksum: = ',mess)
}
sum(5,6,printSum)