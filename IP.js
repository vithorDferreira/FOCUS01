var array = [];                               
for (var i = 0; i < 4; i++){             
    array.push(prompt('Classes do endereço: ' + (i+1)));
}
alert('Seu IP:' + array.join('[.] ')); 