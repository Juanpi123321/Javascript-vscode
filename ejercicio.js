//const valorInicial =  5;

//if(valorInicial == 5 ){
//    console.log("SIII ES 55")
//} else {
//    console.log("Cualquie cosa")
//}


//function nombreCompleto(nombre, apellido){
//    console.log(nombre + " " + apellido);
//}
//nombreCompleto("Sergio","Lara");

//function nombreCompletoConRetorno(nombre,apellido){
//    return nombre   +   " " +apellido;
//}
//var nombre = "Juanpi";
//let nombreCompleto=nombreCompletoConRetorno(nombre,"jara");
//console.log(nombreCompleto);

var frutas = ["Manzana","Banana"];
console.log(frutas);
// frutas.push("Pera");
// console.log(frutas);
// console.log("La primer fruta es: ",frutas[0]);
// frutas.push("Naranja",2);
// console.log(frutas);

for(var fruta in frutas){
    console.log("nombre de la fruta: ",frutas[fruta]);
}
frutas.forEach(fruta => [
    console.log(fruta)
])
console.log("Nos vemos");