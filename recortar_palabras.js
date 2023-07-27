let cantidad=5
let palabra=["rojo","verde","azul","morado","rosado"]

function recortar(cantidadLetras, palabras)
{
    
    let palabraRecortada=[]
    for(let x=0;x<palabras.length;x++)
    {
        let palabra1=""

        if(cantidadLetras>palabras[x].length)
        {
            for(let i=0;i<palabras[x].length;i++)
        {
            palabra1=palabra1+palabra[x][i]
        }
        } else{
            for(let i=0;i<cantidadLetras;i++)
            {
                palabra1=palabra1+palabra[x][i]
    
            }
        }
       
        palabraRecortada[x]=palabra1
    }
    return  palabraRecortada
}

console.log(recortar(cantidad,palabra))