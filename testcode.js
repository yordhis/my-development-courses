
// ((c, s, t, buscar)=>{
//     arrS = s.split('')
//     arrT = t.split('')
//     result = s.indexOf(buscar) !== -1 ? arrS[s.indexOf(buscar)] : t.indexOf(buscar) !== -1 ? arrT[t.indexOf(buscar)] : 'No se halló lo que buscabas :('
//     c(result)                                                                
// })(console.log, 'klayi', 'bcea', 'e')

let num = "hola"
num.length
const c=console.log
let nombre = ''
let nombreIncompleto = "Juan"
let nombreCompleto = "Juan Jose Perez"
nombre = nombreIncompleto.replace(nombreIncompleto, nombreCompleto)
c(nombre)

let respuesta = prompt('Vea el siguiente menú de helados \n' +
                                      '1. Helado de fresa \n'+
                                      '2. Helado de mantecado \n'+
                                     ' 3. Helado de coco \n'+
                                      '4. Helado de choco maní \n'+
'Ingrese el numero de su helado:'
)

switch(respuesta){
      case '1':
           alert('Helado de fresa')
      breack
     case '2':
          alert('Helado de mantecado')
      breack
    case '3':
          alert('Helado de coco')
      breack
    case '4':
          alert('Helado de mani')
      breack
     default:
          alert('opcion no valida')
    breack
}


for(i =1; i >= 10; i++){console.log(i)}


// console.log("https://misitio.com".indexOf("https"))
// console.log(num.toFixed(2))
