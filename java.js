var nombre;
var edad;

nombre=prompt("digite su nombre");
edad=prompt("digite su edad");
document.write("Nombre: "+  nombre+ " <br> "+"Edad:" +edad+ " Años" +"<br>");

if (edad >=18 ){
  document.write("usted es mayor de eded puede explorar la pagina");
}else{
  document.write("usted es menor de edad no puede ingresar a la pagina lo siento ")
}
