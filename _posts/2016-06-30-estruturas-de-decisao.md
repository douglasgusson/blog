---
layout: post
title:  Estruturas de decisão
author: Douglas Gusson
tags: [Programação]
---
Na programação desenvolvemos estruturas de código que seguem um padrão de execução,
porém nem sempre toda essa estrutura deve ser executada, ou não deve ser executada do
mesmo modo, logo precisamos criar soluções que “tratem” certos comportamentos do
algoritmo, e é para isso que servem as estruturas de decisão.

Mas como seria isso na prática?

Imagine um programa que com base nas notas de um aluno, lançadas pelo professor,
calculasse a média desse aluno, e informasse se o mesmo está aprovado ou não. (considerando
60.0 como média para aprovação)

{% highlight c %}
algoritmo "Aprovacao"

var
nota1, nota2, nota3, nota4, media: real

inicio
escreval("Digite a 1a nota do aluno: ")
leia(nota1)

escreval("Digite a 2a nota do aluno: ")
leia(nota2)

escreval("Digite a 3a nota do aluno: ")
leia(nota3)

escreval("Digite a 4a nota do aluno: ")
leia(nota4)

se (media >= 60) entao
    escreval("Aluno aprovado!")
senao
    escreval("Aluno reprovado!")
fimse

fimalgoritmo
{% endhighlight %}


Visualizando o código acima, já dá para ter uma noção do que vem a ser estrutura de decisão,
mesmo sem ler uma definição mais clara. Podemos observar que até na linha do cálculo da
média, não há nada “anormal”, temos apenas a entrada dos dados, e o processamento do
cálculo da média, porém logo abaixo desse cálculo vemos `se (media >= 60) entao` nessa linha
notamos que há uma espécie de verificação na média desse aluno, se media `>=` (maior ou igual)
a 60, caso essa expressão resulte num valor verdadeiro, as linhas onde temos `escreval(“Aluno
aprovado!”)` será executada, caso resulte num valor falso essa linha será ignorada e o bloco de
código após o `senao` será executado, com isso exibindo “Aluno reprovado!” na tela.

A estrutura de decisão não se limita apenas no `se...entao...senao`, em Portugol temos também
o `escolha...caso`.

Veja abaixo um exemplo utilizando o `escolha...caso`:

Nesse exemplo, será exibida uma curiosidade referente a cor vinculada a opção informada pelo
usuário.

{% highlight c %}
algoritmo "Cores"

var
op: inteiro

inicio
escreval("====================")
escreval("1 - Amarelo")
escreval("2 - Azul")
escreval("3 - Preto")
escreval("4 - Vermelho")
escreval("5 - Rosa")
escreval("====================")

escreva("Digite uma opção: ")
leia(op)

escolha (op)
    caso 1
        escreval("É a cor de tinta mais vendida no mundo.")
    caso 2
        escreval("A cor azul é inibidora de apetite.")
    caso 3
        escreval("Costumava ser a cor do vestido de")
        escreval("noiva em Portugal até o séc. XX.")
    caso 4
        escreval("Homens e mulheres enxergam o vermelho de forma diferente.")
        escreval("Mulheres veem mais variações do tom por causa do cromomossomo X.")
    caso 5
        escreval("Na Bélgica os bebês que nascem meninos se")
        escreval("vestem com a cor rosa e as meninas com azul.")
    outrocaso
        escreval("Opção inválida!")
fimescolha

fimalgoritmo

{% endhighlight %}

Utilizando a variável `op` para armazenar a opção que o usuário informar, é possível fazer com
que o algoritmo decida o que fazer, que nesse caso é exibir uma curiosidade para o usuário.
Para cada opção temos um caso com um bloco de instruções a serem executadas caso esse seja
requisitado, e “tratando” a possibilidade do usuário informar um valor que não faça parte da
nossa lista de casos, temos o `outrocaso`.

Bom, é isso. Até a próxima =)
