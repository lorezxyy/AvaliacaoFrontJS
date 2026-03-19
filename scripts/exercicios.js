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