---
layout: post
title: Resolvendo erro de kernel no Fedora para criar VMs no VirtualBox
author: Douglas Gusson
tags: [Fedora, VirtualBox]
---

Veja nesse post como resolver o erro de kernel que ocorre ao tentar criar uma máquina virtual no VirtualBox usando o Fedora.

![Erro VirtualBox]({{ site.url }}/assets/img/posts/004.png)

Para começar, instale o gcc (GNU Compiler Collection), usando o comando abaixo:

{% highlight bash %}
$ sudo dnf install gcc
{% endhighlight %}

Em seguida instale o dkms (Dynamic Kernel Module Support):

{% highlight bash %}
$ sudo dnf install dkms
{% endhighlight %}

Feito isso, é necessário instalar o kernel-devel, usando “uname -r” para uma versão compatível com seu kernel:

{% highlight bash %}
$ sudo dnf install kernel-devel-$(uname -r)
{% endhighlight %}

E por último, execute (para VirtualBox 5+):

{% highlight bash %}
$ sudo /usr/lib/virtualbox/vboxdrv.sh setup
{% endhighlight %}

Caso a versão do seu VirtualBox seja inferior a 5.x, execute:

{% highlight bash %}
$ sudo /etc/init.d/vboxdrv.sh setup
{% endhighlight %}
