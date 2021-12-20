window.onload = function () {
    document.getElementById('palindrome').oninput = palindromo;
    document.getElementById('num1').oninput = mayorQue;
    document.getElementById('num2').oninput = mayorQue;
    document.getElementById('vowels').oninput = buscarVocales;
    document.getElementById('counting_vowels').oninput = cuentaVocales;
}

const vocales =["a", "e", "i", "o", "u"];

function palindromo(){
    let frase = document.getElementById('palindrome').value;
    if(!frase) return res1.innerHTML ="<br/>No introduciste ningún texto";
    let palabra=frase.toLowerCase().replace(/ /g, "");
    let alReves=palabra.split("").reverse().join("");
    return (palabra===alReves)
     ?res1.innerHTML= `<br/>El texto ${frase} es un palindromo`
     :res1.innerHTML =`<br/>El texto ${frase} no es un palindromo`;
  }

function mayorQue() {
    let num1 =Number(document.getElementById('num1').value);
    let num2 =Number(document.getElementById('num2').value);
    if (num1===num2){
        res2.innerHTML=`Los números ${num1} y ${num1} son iguales`;
    }else if(num1>num2){
        res2.innerHTML=`El ${num1} es mayor que el ${num2}`;
    }else{
        res2.innerHTML=`El ${num2} es mayor que el ${num1}`;
    }
}

 function buscarVocales(){
    let cadena=document.getElementById('vowels').value;
    res3.innerHTML="";
    let cont=0;
    Array.from(cadena.toLowerCase()).forEach(element => {
        if(vocales.find(el=>el===element)){
            res3.innerHTML+=`${element} `;
            cont++;
        }
    });
    if (cont===0) res3.innerHTML="No hay vocales";
 }

 function cuentaVocales(){
    let cadena= document.getElementById('counting_vowels').value;
    let contar={'a':0, 'e':0,'i':0,'o':0,'u':0  }
    res4.innerHTML="";
    Array.from(cadena.toLowerCase()).forEach(element =>{
        if(vocales.find(el=>el===element)) contar[element]++;
    });
    vocales.forEach(vocal => {
        res4.innerHTML+= `${vocal} ---- ${contar[vocal]} <br/>`
    })
 }
