let x=[1,5,8]
let y=[1,2,8]


function sonIgualesf (x,y){
    let sonIguales = false
    if(x.length===y.length){
    for(let i = 0; i < x.length; i++){
        if(x[i] != y[i]){
            sonIguales = false
            return sonIguales
        }else
        sonIguales = true;
    }
    }else
    {
        sonIguales=false
        return sonIguales
    }
    return sonIguales
}
console.log(sonIgualesf( x, y))
