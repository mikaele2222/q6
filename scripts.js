let somaidades = 0;

for (let i = 1; i <= 20; i++) {

    let idade = parseInt(prompt('digite a idade da ' + i + ' pessoa:'));
    
    somaidades += idade;
}

alert('A soma final das idades é: ' + somaidades);
