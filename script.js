// criar programa que peça 'a cot favorita de fulano é cor'//
nome =  'Ana'
corFav = 'roxo'
alert(`A cor fav de ${nome} é ${corFav}`)

let nome = 'sara rangel'
alert(nome.length)

let texto = 'OLAAAAAA'
alert(texto.toLowerCase())
alert(texto.toLocaleUpperCase())

email = '   sararangel@gmail.com    '
alert(email.trim())

frase = 'Hoje comi alface'
alert(frase.includes('mi'))

frase = 'Hoje é terça'
fraseNova = frase.replaceALL('Hoje', 'Amanha')
alert(fraseNova);

//escrever frase e imprimir no console a frase alterada com:
//1-todas letras minusculas
//2-na lingua do i
//3- o tamanho da frase

texto = prompt('digite uma frase')
tamTexto = texto.length
fraseNova = texto.replaceAll('o','i')
texto = texto.toUpperCase();
alert(texto.replaceAll('o','i').toUpperCase() + ' // length: ' + texto.length)

const raçasCao = ['pitbull','shitzu','labrador','retriver','lulu da pomerania']
let indice = parseInt(prompt('digite um numero de 0 a 4'))
alert(raçasCao[indice])