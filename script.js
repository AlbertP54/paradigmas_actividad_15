const comprarCasco = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar casco")
        },1000)
    })
}

const comprarGuantes = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar guantes")
        },2000)
    })
}