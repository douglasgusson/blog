---
layout: post
title: "Monitorando seu sistema Linux usando o Telegram"
date: 2017-10-31 19:52:30
image: '/assets/img/'
comments: true
description:
author: Douglas Gusson
categories:
introduction: Nesse post vamos aprender como monitorar um sistema Linux usando ferramentas Shell e o Telegram (para envio de mensagens).  
---

Nesse post vamos aprender como monitorar um sistema Linux usando ferramentas Shell e o Telegram (para envio de mensagens). 

Devido a grande flexibilidade de sistemas Linux, existem muitas possibilidades e aplicabilidade das ferramentas abordadas nesse post. Nesse tutorial tratamos o mais básico no intuito de instigar o leitor a buscar algo além. 

Bom, a ideia é a seguinte: Supondo que temos uma máquina específica na qual desejamos monitorar a temperatura de tempos em tempos, e de uma forma bastante prática, por exemplo, recebendo uma mensagem no smartphone. É exatamente o que vamos fazer nesse tutorial.

Mãos na massa!

Primeiro precisamos instalar a ferramenta que verifica a temperatura da nossa máquina, nesse exemplo usaremos a `lm_sensors`.

Para instalar no Fedora, usamos o seguinte comando:
{% highlight shell %}
$ sudo dnf install lm_sensors
{% endhighlight %}

No Debian:
{% highlight shell %}
$ sudo apt-get install lm-sensors
{% endhighlight %}

Precisamos instalar também a ferramenta que envia mensagens através das APIs do Telegram. Nada te impede implementar algo parecido, nesse caso usamos o `telegram-send` por questões de praticidade. Essa ferramenta foi desenvolvida em python, portanto para instalar usamos o `pip` da seguinte forma:

{% highlight shell %}
$ sudo pip install telegram-send
{% endhighlight %}

Agora temos o `telegram-send` instalado, antes de partir para a configuração dele precisamos criar um bot no Telegram, ele que será responsável pelo envio das mensagens. Para isso, no Telegram buscamos por "BotFather", ele é um bot que auxilia na criação de bots:

![Buscando o BotFather no Telegram]({{ site.url }}/assets/img/monitorando-seu-sistema-linux-usando-o-telegram/busca-botfather.png)

Agora iniciamos o BotFather, clicando em "iniciar":

![Iniciar o BotFather no Telegram]({{ site.url }}/assets/img/monitorando-seu-sistema-linux-usando-o-telegram/iniciar-botfather.png)

O BotFather exibirá uma lista de possíveis comandos, como essa:

![Opções do BotFather]({{ site.url }}/assets/img/monitorando-seu-sistema-linux-usando-o-telegram/opcoes-botfather.png)

Para criar um novo bot usamos o comando `/newbot`, será solicitado como desejamos chamar nosso bot ("Alright, a new bot. How are we going to call it? Please choose a name for your bot."), basta responder essa mensagem com o texto desejado.

Em seguida, será solicitado o nome de usuário do nosso bot ("Good. Now let's choose a username for your bot. It must end in 'bot'. Like this, for example: TetrisBot or tetris_bot."), existe uma regra para esse nome, ele deve terminar com o texto "bot". Feito isso, recebemos uma mensagem contendo algumas informações referentes ao nosso bot. Uma delas é o token, essa é a informação que precisamos para configurar o `telegram-send` e começar enviar mensagens.

![Bot criado usando o BotFather]({{ site.url }}/assets/img/monitorando-seu-sistema-linux-usando-o-telegram/bot-criado.png)

Para configurar o `telegram-send`, executamos o seguinte comando:

{% highlight shell %}
$ telegram-send -c
{% endhighlight %}

ou 

{% highlight shell %}
$ telegram-send --configure
{% endhighlight %}

Será solicitado o token, conforme abaixo:

{% highlight shell %}
Talk with the BotFather on Telegram (https://telegram.me/BotFather), create a bot and insert the token
❯ 
{% endhighlight %}

Basta copiar o token que o BotFather nos deu e colar no terminal. O `telegram-send` irá gerar uma senha que precimos enviar via chat para o bot que criamos.

{% highlight shell %}
Please add <USERNAMEDOBOT> on Telegram (https://telegram.me/<USERNAMEDOBOT>)
and send it the password: XXXXX
{% endhighlight %}

Executando esse passo corretamente, recebemos uma mensagem parecida com essa:

{% highlight shell %}
🎊 Congratulations <USERNAME>! 🎊
telegram-send is now ready for use!
{% endhighlight %}

Agora podemos testar o envio de mensagens rodando o seguinte comando:

{% highlight shell %}
$ telegram-send "olá"
{% endhighlight %}

Se fizemos tudo certinho até aqui o bot lhe enviará uma mensagem de olá. 

Bom, nesse ponto estamos bem perto de alcançar nosso objetivo que é enviar uma mensagem contendo dados de temperatura da máquina. Para isso, precisamos pegar a saída do comando `sensors` da ferramenta `lm_sensors` e transformar em uma mensagem, é possível fazer isso usando o `pipe`. Um exemplo de uso seria da seguinte forma:

{% highlight shell %}
$ sensors | telegram-send --pre --stdin
{% endhighlight %}

Nesse caso usamos a flag `--pre` para preservar a formatação da saída do comando `sensors` e `--stdin` para que as multiplas linhas resultantes do comando `sensors` sejam enviadas em apenas uma mensagem.

Agora vamos automatizar esse processo, criando um pequeno script que enviará (nesse caso) a cada 5 minutos os dados de temperatura da máquina:

{% highlight shell %}
#!/bin/bash
n=1;
while true; 
do 
	sensors | telegram-send --pre --stdin; 
	echo $n "- Enviado em $(date "+%d/%m/%Y") às $(date "+%H:%M")";
	n=$((n+1)); 	
	sleep 300; # 300s (5min)
done;
{% endhighlight %}

Esse foi apenas um exemplo simples no qual podemos aplicar essas ferramentas, divirta-se, seja criativo(a). 

Obrigado por ter chegado até aqui, espero que tenha gostado do post. Até a próxima =) 

 