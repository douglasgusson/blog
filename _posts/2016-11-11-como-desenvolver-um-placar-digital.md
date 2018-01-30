---
layout: post
title:  Como desenvolver um placar digital
author: Douglas Gusson
tags: [Programação, JavaScript]
---
Nesse post trago um pequeno tutorial, demonstrando o desenvolvimento de um placar digital,
usando Javascript, HTML e CSS. Essa é a interface do placar:

![interface placar digital]({{ site.url }}/assets/img/posts/005.png)

Vamos acrescentar o [Bootstrap](http://getbootstrap.com) ao nosso projeto, apenas para aproveitar algumas facilidades
que ele oferece, principalmente no quesito responsividade. Para isso
acesse [getbootstrap.com/getting-started/](http://getbootstrap.com/getting-started/) e faça o download dos arquivos.

![Download Bootstrap]({{ site.url }}/assets/img/posts/006.png)

Fazendo a extração dos arquivos baixados, temos uma estrutura com três pastas `css`, `fonts` e `js`.

Crie uma pasta para o projeto e copie essas pastas para ela. Com isso feito, podemos começar desenvolver.

Primeiro vamos criar um arquivo chamado index.html no diretório raiz do nosso projeto, com a seguinte estrutura:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Placar</title>
        <!-- Bootstrap Core CSS -->
        <link href="./css/bootstrap.min.css" rel="stylesheet">
        <!-- Custom Fonts -->
        <link href="./css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <!-- Custom CSS -->
        <link href="./css/custom.css" rel="stylesheet">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <section class="section-full">
                    <div class="col-xs-5 col-md-5 text-center">
                        <div class="row">
                            <h2>Time A</h2>
                            <div class="col-xs-6 col-md-6">
                                <img src="./img/0.png" height="200" alt="" class="img-responsive" id="img2-time1"/>
                            </div>
                            <div class="col-xs-6 col-md-6">
                                <img src="./img/0.png" height="200" alt="" class="img-responsive" id="img1-time1"/>
                            </div>
                            <div class="controles">
                                <button type="button" id="btn-mais-time1" name="button" class="btn-lg btn-success">+1</button>
                                <button type="button" id="btn-menos-time1" name="button" class="btn-lg btn-danger">-1</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-2 col-md-2 text-center">
                        <h2>
                            X
                        </h2>
                    </div>
                    <div class="col-xs-5 col-md-5 text-center">
                        <div class="row">
                            <h2>Time B</h2>
                            <div class="col-xs-6 col-md-6">
                                <img src="./img/0.png" height="200" alt="" class="img-responsive" id="img2-time2"/>
                            </div>
                            <div class="col-xs-6 col-md-6">
                                <img src="./img/0.png" height="200" alt="" class="img-responsive" id="img1-time2"/>
                            </div>
                            <div class="controles">
                                <button type="button" id="btn-mais-time2" name="button" class="btn-lg btn-success">+1</button>
                                <button type="button" id="btn-menos-time2" name="button" class="btn-lg btn-danger">-1</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!-- jQuery -->
        <script src="./js/jquery.js"></script>
        <!-- Bootstrap Core JavaScript -->
        <script src="./js/bootstrap.min.js"></script>
        <!-- Placar JavaScript -->
        <script src="./js/placar.js"></script>
    </body>
</html>
```

Mesmo com essa estrutura, ainda faltam as imagens que formarão os números na tela, como o foco do tutorial não é na criação de imagens, aqui estão os links para download das imagens: [[0]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/0.png), [1]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/1.png), [2]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/2.png), [3]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/3.png), [4]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/4.png), [5]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/5.png), [6]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/6.png), [7]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/7.png), [8]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/8.png), [9]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/9.png), [none]({{ site.url }}/assets/img/como-desenvolver-um-placar-digital/none.png)].

Crie uma pasta `img` no diretório raiz do projeto e salve as imagens nela.

Bom, agora podemos começar a brincar com o Javascript, pra isso vamos criar um arquivo dentro da pasta `js` chamado `placar.js`, e nele declarar as seguintes variáveis:

```javascript
var t1=0, t2=0, srcImg1T1, srcImg2T1, srcImg1T2, srcImg2T2;

var $botaoMaisTime1 = document.querySelector('#btn-mais-time1');
var $botaoMaisTime2 = document.querySelector('#btn-mais-time2');

var $botaoMenosTime1 = document.querySelector('#btn-menos-time1');
var $botaoMenosTime2 = document.querySelector('#btn-menos-time2');

var $img1Time1 = document.querySelector('#img1-time1');
var $img2Time1 = document.querySelector('#img2-time1');

var $img1Time2 = document.querySelector('#img1-time2');
var $img2Time2 = document.querySelector('#img2-time2');
```

**Mas pra que cada variável dessa serve?**

* `t1` = irá armazenar os pontos do time 1;
* `t2` = irá armazenar os pontos do time 2;
* `srcImg1T1` = irá armazenar o nome da imagem que deverá ocupar o primeiro algarismo da pontuação do time 1;
* `srcImg2T1` = irá armazenar o nome da imagem que deverá ocupar o segundo algarismo da pontuação do time 1;
* `srcImg1T2` = irá armazenar o nome da imagem que deverá ocupar o primeiro algarismo da pontuação do time 2;
* `srcImg2T2` = irá armazenar o nome da imagem que deverá ocupar o segundo algarismo da pontuação do time 2;
* `$botaoMaisTime1` = se trata do botão de incremento (+1) de pontuação do time 1;
* `$botaoMaisTime2` = se trata do botão de incremento (+1) de pontuação do time 2;
* `$botaoMenosTime1` = se trata do botão de decremento (-1) de pontuação do time 1;
* `$botaoMenosTime2` = se trata do botão de decremento (-1) de pontuação do time 2;
* `$img1Time1` = elemento img do primeiro algarismo da pontuação do time 1;
* `$img2Time1` = elemento img do segundo algarismo da pontuação do time 1;
* `$img1Time2` = elemento img do primeiro algarismo da pontuação do time 2;
* `$img2Time2` = elemento img do segundo algarismo da pontuação do time 2.

**Obs.:** *Algumas variáveis possuem um $ (cifrão) por se tratarem de elementos do documento HTML,
com isso temos uma diferenciação das outras variáveis.*

Tendo essas variáveis declaradas, podemos determinar a ação dos nossos botões. O código da
ação do botão de incremento de pontuação do time 1 (`$botaoMaisTime1`) fica assim:

```javascript
$botaoMaisTime1.addEventListener('click',function() {
    (t1 < 100) ? t1++ : t1;
    setPontuacaoTime1(t1);
});
```


Na primeira linha adicionamos um “ouvinte” de eventos ao botão, no qual aguarda por um
evento do tipo `click`, quando o botão é clicado, a *function* é executada. Já dentro
da *function* verificamos se `t1` é menor que 100, se essa condição for verdadeira, incrementamos,
senão mantemos o valor atual. Em seguida chamamos a função `setPontuacaoTime1(t1)`, que
vamos escrever mais adiante.

Na sequência definimos a ação do botão de incremento do time 2, que segue exatamente a
mesma estrutura:

```javascript
$botaoMaisTime2.addEventListener('click',function() {
    (t2 < 100) ? t2++ : t2;
    setPontuacaoTime2(t2);
});
```

Agora vamos programar a ação de decremento para os times 1 e 2:

```javascript
$botaoMenosTime1.addEventListener('click',function() {
    (t1 > -1) ? t1-- : t1;
    setPontuacaoTime1(t1);
});
$botaoMenosTime2.addEventListener('click',function() {
    (t2 > -1) ? t2-- : t2;
    setPontuacaoTime2(t2);
});
```

Bom, agora precisamos criar as funções `setPontuacaoTime1(x)` e `setPontuacaoTime2(x)`. Elas
devem ficar da seguinte forma:

```javascript
function setPontuacaoTime1(x) {
    if ((x > 99) || (x < 0)) {
        srcImg1T1='none.png';
        srcImg2T1='none.png';
    } else {
        srcImg1T1 = (x % 10) + '.png';
        srcImg2T1 = (Math.floor(x / 10)) + '.png';
    }
    $img1Time1.setAttribute('src', './img/' + srcImg1T1);
    $img2Time1.setAttribute('src', './img/' + srcImg2T1);
}

function setPontuacaoTime2(x) {
    if ((x > 99) || (x < 0)) {
        srcImg1T2='none.png';
        srcImg2T2='none.png';
    } else {
        srcImg1T2 = (x % 10) + '.png';
        srcImg2T2 = (Math.floor(x / 10)) + '.png';
    }
    $img1Time2.setAttribute('src', './img/' + srcImg1T2);
    $img2Time2.setAttribute('src', './img/' + srcImg2T2);
}
```

Bom, essas duas funções possuem a mesma estrutura. Primeiro verificamos se o valor do
argumento recebido está na faixa de 1 a 99, caso contrário atribuímos “none.png” as variáveis
referentes as imagem, assim damos a ideia de placar apagado. Caso o valor do argumento
esteja dentro da faixa, separamos seus algarismos. Usando mod (%) descobrimos o valor do
algarismo da unidade. Dividindo o valor por 10 e arrendondando para baixo, obtemos o valor
do algarismo da dezena. Assim, já podemos exibir as imagens corretamente na tela usando o
`setAttribute()`. Com isso, toda a lógica do nosso placar foi implementada.

Agora vamos apenas fazer um pequeno acerto no CSS para a melhor exibição do nosso placar.
Crie um arquivo chamado `custom.css` dentro da pasta `css`, com o seguite conteúdo:

```css
.section-full {
    min-height: 100vh;
}

.btn-lg {
    margin-top: 10px;
}
```

A classe `section-full` diz pra nossa `div` que ela deve ocupar no mínimo toda a altura da tela. E
na `btn-lg` que é, na verdade, uma classe existente no Bootstrap, estamos adicionando uma
margem no topo dos botão, para não ficarem “colados” na imagem do número.

Veja o placar em ação [aqui](https://douglasgusson.github.io/placar-js/).

[Código fonte do projeto](https://github.com/douglasgusson/placar-js) (Github)

Com isso, completamos nosso tutorial, espero que tenha gostado =)
