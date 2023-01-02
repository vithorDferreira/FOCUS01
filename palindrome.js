var array = [];    
var outroarray = [];
var quant = parseInt(prompt("digite a quantidade de palavras"))

//for para repetir a quantidade desejada
for (var i = 0; i < quant; i++){             
    //push adiciona valor no array + split divide uma strig de um array em substrings
    array.push((prompt('digite a ' + ((i+1)) + 'º palavra')).split(""))
}
 //criar for para analisar dentro do array
for (i = 0; i < quant; i++){   
    //juntar os elementos de um array em uma string
    console.log(array[i].join(""))
    //reverter a string
    console.log(array[i].reverse().join(""))
    //comparar strings
    console.log(array[i].join("")===array[i].reverse().join(""))
  }

