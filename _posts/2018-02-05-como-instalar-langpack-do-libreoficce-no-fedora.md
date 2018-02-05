---
layout: post
title: Como instalar pacotes de linguagem do LibreOffice no Fedora
author: Douglas Gusson 
tags: [LibreOffice, Fedora]
---

Veja nesse post como instalar um pacote de linguagem do LibreOffice no Fedora.

Para buscar pelos pacotes disponíveis, execute:

```
$ sudo dnf search libreoffice-langpack
```

O resultado desse comando será algo parecido com isso:

```
=================== Nome Correspondeu: libreoffice-langpack ====================
libreoffice-langpack-af.x86_64 : Afrikaans language pack for LibreOffice
libreoffice-langpack-ar.x86_64 : Arabic language pack for LibreOffice
libreoffice-langpack-as.x86_64 : Assamese language pack for LibreOffice

...

libreoffice-langpack-nso.x86_64 : Northern language pack for LibreOffice
libreoffice-langpack-pt-BR.x86_64 : Brazilian language pack for LibreOffice
libreoffice-langpack-pt-PT.x86_64 : Portuguese language pack for LibreOffice
libreoffice-langpack-zh-Hans.x86_64 : Simplified language pack for LibreOffice
```

Note que existem pacotes para muitos idiomas, no meu caso preciso instalar o português do brasil. Para isso verifico o nome do pacote na lista e executo:

```
$ sudo dnf install libreoffice-langpack-pt-BR
```

Feito isso, basta aguardar o fim da instalação =)
