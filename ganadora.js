let puntajeA=[4,4,5]
let puntajeB=[3,5,6]
let participanteA="Ana"
let participanteB="Andrea"

function ObtenerResultado(nombre1,nombre2,punt1,punt2)
{
    let acumg = 0
    let acump = 0

    if(punt1.length === punt2.length){
        for(let i = 0; i < punt1.length; i++){
            if(punt1[i] > punt2[i]) {
                acumg++
            }else
            if(punt1[i] < punt2[i]){
                acump++
            }
        }
        if(acumg === acump){
            console.log("Empate")
        }else
        if(acumg < acump){
            console.log(nombre2)
        }else
        if(acumg > acump){
            console.log(nombre1)
        }
    }
}
ObtenerResultado(participanteA, participanteB, puntajeA, puntajeB)