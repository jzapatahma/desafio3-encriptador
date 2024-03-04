
// Variables que contendran los elementos econtrados en el documento segun su nombre de clase
const textoOrigen = document.querySelector(".cs-txt-original");
const textoDestino = document.querySelector(".cs-txt-destino");
const boton1 = document.querySelector(".cs-boton-1");
const boton2 = document.querySelector(".cs-boton-2");
const boton3 = document.querySelector(".cs-boton-3");
const boton4 = document.querySelector(".cs-boton-4");
const boton5 = document.querySelector(".cs-boton-5");
// Deshabilitamos de entrada los botones de desencriptar
// Carga los botones deshabilitados al iniciar la pagina
boton1.disabled = true;
boton2.disabled = true;
boton3.disabled = true;
boton4.disabled = true;
// Variable para simplificar una funcion para varios procesos, creo que se puede mejorar.
var estado = new Boolean(true);

function opcionEncriptar(opcion, estado){
    var b = Boolean(estado);
    if (opcion == "Alura"){
        boton1.disabled = b;
        boton2.disabled = b;
        boton3.disabled = true;
        boton4.disabled = true;
    }
    if (opcion == "AES"){
        boton3.disabled = b;
        boton4.disabled = b;
        boton1.disabled = true;
        boton2.disabled = true;
    }
    textoOrigen.value = "";
    textoDestino.value = "";
}
// Asigna a la variable el tipo de funcion que se quiere para el boton copiar.
var clipboard = new Clipboard('.cs-boton-5');
// Matriz de ejemplo para una encriptacion personalizada segun lo explicado en Alura
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
// 
//METODO ENCRIPTACION ALURA
// ENCRIPTAR
function btnEncriptar(){
    if(textoOrigen.validity.valid){
        const proceso = encriptar(textoOrigen.value);
        textoDestino.value = proceso.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //Elimina los acentos
        textoDestino.style.backgroundImage = "none";
    }
}
function encriptar(strProceso){ //Recorre la matriz de las letras para reemplazar las letras por un conjunto de palabras.
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    strProceso = strProceso.toLowerCase();
    for(let i=0;i<matrizCodigo.length; i++){
        if(strProceso.includes(matrizCodigo[i][0])){
            strProceso = strProceso.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return strProceso;
}
// DES-ENCRIPTAR
function btnDesEncriptar(){
    if(textoDestino.validity.valid){
        const proceso = desencriptar(textoOrigen.value);
        textoDestino.value = proceso;
    }
}
function desencriptar(strProceso){ //Recorre la matriz de las letras para reemplazar un conjunto de palabras por una letra.
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    strProceso = strProceso.toLowerCase();
    for(let i=0;i<matrizCodigo.length; i++){
        if(strProceso.includes(matrizCodigo[i][1])){
            strProceso = strProceso.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return strProceso;
}
//
// ENCRIPTAR AES
function encriptarAES(strProceso){
    strProceso = CryptoJS.AES.encrypt(strProceso, 'EncryptionKey');
    return strProceso;
}
function btnEncriptar2(){
    if(textoOrigen.validity.valid){
        textoDestino.value =  encriptarAES(textoOrigen.value);
    }
}
// DES-ENCRIPTAR AES
function desencriptarAES(strProceso){
    strProceso = CryptoJS.AES.decrypt(strProceso, 'EncryptionKey');
    return strProceso;
}
function btnDesEncriptar2(){
    if(textoDestino.validity.valid){
        strProceso =  desencriptarAES(textoDestino.value);
        textoDestino.value = strProceso.toString(CryptoJS.enc.Utf8);
    }
}
//
//CAPTURAR EL ENVIO DEL FORMULARIO.
//Con esto se evita que el sutmit del input o del button refresque la pagina y borre lo contenido en sus elementos
const formx= document.getElementById("id-formulario");
formx.addEventListener("submit", function(event) {
        event.preventDefault();
    }
)