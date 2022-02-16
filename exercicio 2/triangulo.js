
console.log 
alert('informe 3 valores para formar 1 triangulo')
    let a = prompt('Digite o 1º numero')
    let b = prompt('Digite o 2º numero')
    let c = prompt('Digite o 3º numero')

    console.log(a,b,c)
    
     if (a == b && a == c) {
        alert('Triangulo Equilátero')
        } else if (a == b || a == c || b == c) {
            alert('Triangulo Isosceles')
            }else if ( a != b && a != c && c != b){
                alert('Triangulo Escaleno')
                } else {
                    alert('Os 3 lados não formam um triangulo')
                }
