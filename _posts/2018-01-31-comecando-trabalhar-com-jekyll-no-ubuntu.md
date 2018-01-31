---
layout: post
title: Começando trabalhar com Jekyll no Ubuntu
author: Douglas Gusson 
tags: [Jekyll, Ubuntu]
---

Se você prentende se aventurar no mundo do Jekyll, esse post pode te auxiliar no início dessa jornada. Nele você verá como fazer a instalação do Jekyll no sistema operacional Ubuntu.

Vamos lá!

Primeiro precisamos instalar alguns pacotes relacionados a linguagem Ruby (na qual o Jekyll foi escrito), para isso execute o seguinte comando no seu terminal:

```
$ sudo apt-get install ruby ruby-dev make gcc
```

Repare que estamos instalando o `make` e o `gcc` também, isso porque algumas bibliotecas e/ou pacotes precisam ser compiladas durante a instalação.

Após a conclusão desse comando podemos verificar a versão do Ruby instalada, executando:

```
$ ruby -v
```

Agora podemos instalar o Jekyll em si, e junto com ele instalaremos também o `bundler`, uma espécie de gerenciador de dependências de projetos.

```
$ sudo gem install jekyll bundler
```

Finalmente, agora podemos criar nosso projeto, seguindo os passos do próprio site do [Jekyll](https://jekyllrb.com).

![Print quick start instrutions]({{ site.url }}/assets/img/posts/011.png)

```
$ jekyll new my-awesome-site
$ cd my-awesome-site
$ bundle exec jekyll serve
```

Depois de rodar o `jekyll serve`, seu projeto estará rodando no [http://localhost:4000/](http://localhost:4000/).

Bom, espero que esse post tenha te ajudado, pelo menos um pouco no início dessa caminhada com o Jekyll.

Até a próxima!

