function exercicio9() {

    const nota1 = Number(prompt("digite a primeira nota"))
    const nota2 = Number(prompt("digite a segunda nota"))
    const nota3 = Number(prompt("digite a terceira nota"))

    const media = (nota1 + nota2 + nota3) / 3
    console.log(media)

    if (media < 5) {
        alert("reprovado")
    } else if (media >= 5 && media < 7) {
        alert("recuperaçao")
    } else if (media >= 7) {
        alert("aprovado")
    }
}
const buttonExercicio9 = document.getElementById("exercicio9")
buttonExercicio9.addEventListener('click', () => { exercicio9() })


function exercicio21() { 

    const resposta1 = prompt("Trocou mensagens com a vítima?")
    const resposta2 = prompt("Esteve no local do crime?")
    const resposta3 = prompt("Mora perto da vítima?")
    const resposta4 = prompt("Devia dinheiro para a vítima?")
    const resposta5 = prompt("Trabalha ou já trabalhou com a vítima?")
    const resposta6 = prompt("Tinha relacionamento amoroso com a vítima?")
    const resposta7 = prompt("Ficou feliz com o que aconteceu?")
    const resposta8 = prompt("Possui arma de fogo?")

    const sim= (resposta1+resposta2+resposta3+resposta4+resposta5+resposta6+resposta7+resposta8) / 3 
    console.log(sim)
    
    if ( sim < 4 ) {
        alert ("inocente")
    } else if ( sim >= 5 && sim  < 7 ) { 
        alert("possivel criminoso")
    } else if ( sim == 8) { 
        alert ("assassino")
    } else if (sim = 4){
        alert ("suspeito")
    }
}
const buttonExercicio21 = document.getElementById("exercicio21")
buttonExercicio21.addEventListener('click', () => { exercicio21() })





