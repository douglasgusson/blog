---
layout: post
title: "Como instalar o Spotify no Fedora"
comments: true
date: 2016-03-06 12:03:06
image: '/assets/img/'
description:
author: Douglas Gusson
categories:
introduction: Veja nesse post, um pequeno passo a passo de como instalar o *client* do Spotify no Fedora.
---

Veja nesse post, um pequeno passo a passo de como instalar o *client* do Spotify no Fedora.

![Logo Spotify]({{ site.url }}/assets/img/como-instalar-o-spotify-no-fedora/spotify_logo.png)

**Instalação:**

Para adicionar o repositório no Fedora 22+, execute o seguinte comando:

{% highlight bash %}
$ sudo dnf config-manager --add-repo=http://negativo17.org/repos/fedora-spotify.repo
{% endhighlight %}

Após adicionar o repositório, podemos executar o comando de instalação:

{% highlight bash %}
$ sudo dnf install spotify-client
{% endhighlight %}

**Referências:**    

Spotify client <[negativo17.org](https://negativo17.org/spotify-client/)>

Fedora 22 – Quick & Easy Install of Spotify <[www.smittix.co.uk](https://www.smittix.co.uk/fedora-22-quick-easy-install-of-spotify/)>
