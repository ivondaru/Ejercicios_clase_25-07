let cadena = ["zanahoria","aguacate","conejo","flor","lechuga","prohibido","zanahoria"]

function comer(arrayComer) {
    console.log(arrayComer.length)
    let indice_inicio=0
    let indice_fin=0
    let acumulador=0
    let planta=[]

    indice_fin=arrayComer.indexOf("prohibido")
    indice_inicio=arrayComer.indexOf("conejo")


    // for(let i=0;i<arrayComer.length;i++)
    // {

    //     if(arrayComer[i]==="conejo")
    //     {
    //         indice_inicio=i
    //     }
    //     if(arrayComer[i]==="prohibido")
    //     {
    //         indice_fin=i
    //     }
    // }

    for(let i=0; i<indice_inicio;i++)
    {
        planta[acumulador]=arrayComer[i]
        acumulador++

    }

        for(let i=indice_fin+1; i<arrayComer.length;i++)
    {
        planta[acumulador]=arrayComer[i]
        acumulador++
    }
console.log(indice_inicio)
    return planta;
}


console.log(comer(cadena))



