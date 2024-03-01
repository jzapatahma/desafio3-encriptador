// Function(getComputedStyle(document.documentElement)?.getPropertyValue("--script"))();

// Variables que contendran el elementos econtrado en el documento segun su nombre de clase
const textoOrigen = document.querySelector(".txt-original");
const textoDestino = document.querySelector(".txt-destino");
// Matriz de ejemplo para una encriptacion personalizada y creativa del programador
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
// 
//Metodo Encriptacion Alura Desafio
// ENCRIPTAR
function btnEncriptar(){
    if(textoOrigen.validity.valid){
        const proceso = encriptar(textoOrigen.value);
        textoDestino.value = proceso;
        textoOrigen.value = "";
    }
}
function encriptar(strProceso){
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
        const proceso = desencriptar(textoDestino.value);
        textoOrigen.value = proceso;
        textoDestino.value = "";
    }
}
function desencriptar(strProceso){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    strProceso = strProceso.toLowerCase();
    for(let i=0;i<matrizCodigo.length; i++){
        if(strProceso.includes(matrizCodigo[i][1])){
            strProceso = strProceso.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return strProceso;
}

// Metodo Encriptacion AES
// const crypto = required("crypto-js");
// var decrypted = encriptarCjs.AES.decrypt(encrypted, 'EncryptionKey');
// https://codepen.io/gabrielizalo/pen/oLzaqx
// En la anterior pagina explican muy bien como hacerlo con las linesa de codigo
// Estamos usando una API externar que es:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
// Tambien hay otras formas en la siguiente pagina:
// https://unipython.com/encriptar-datos-en-java-script/
//
// ENCRIPTAR AES
function encriptarAES(strProceso){
    strProceso = CryptoJS.AES.encrypt(strProceso, 'EncryptionKey');
    return strProceso;
}
function btnEncriptar2(){
    if(textoOrigen.validity.valid){
        // alert("validando  True");
        textoDestino.value =  encriptarAES(textoOrigen.value);
        textoOrigen.value = "";
    }else{
        alert("pxx ddddddd validando false");
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
        textoOrigen.value = strProceso.toString(CryptoJS.enc.Utf8);
        textoDestino.value = "";
    }
    
    
    
    // if(textoOrigen.validity.valid){// alert("validando  True");
    //     strProceso =  desencriptarAES(textoDestino.value);
    //     textoOrigen.value = strProceso.toString(CryptoJS.enc.Utf8);
    // }else{
    //     alert("pxx  validando false");
    // }
}

//CAPTURAR EL ENVIO DEL FORMULARIO Y LA ACTUALIZACION DE LA PAGINA.
//Con esto se evita que el sutmit del input o del button refresque la pagina y borre lo contenido en sus elementos
const formx= document.getElementById("formulario");
formx.addEventListener("submit", function(event) {
        event.preventDefault();
        // console.log(event);
        // alert("se detecto en evento sdafasdfaf");
    }
)

// El siguiente codigo funciona muy bien con la siguiente linea en HTML
// <button type="submit" class="contacto-enviar" onclick="btnEnviar()">Enviar</button>
// const textoEnviar = document.querySelector(".contacto-enviar");
// function btnEnviar(){
//     if(textoOrigen.validity.valid){// alert("validando  True");
//         strProceso =  desencriptarAES(textoDestino.value);
//         textoOrigen.value = strProceso.toString(CryptoJS.enc.Utf8);
//     }else{
//         alert("btn enviar validando false");
//     }
// }