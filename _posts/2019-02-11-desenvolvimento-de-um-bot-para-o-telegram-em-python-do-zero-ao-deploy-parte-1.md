---
layout: post
title: Desenvolvimento de um bot para o Telegram em Python, do zero ao deploy - Parte 1
author: Douglas Gusson 
tags: [Telegram, Bot, Python]
---


## Introdução

O intuito desse material é proporcionar ao leitor uma base para iniciar o desenvolvimento de bots que interajam com os usuários através do Telegram, utilizando a linguagem Python e outras ferramentas. No decorrer deste trabalho, será apresentada a construção de um bot que consulta dados num determinado site e apresenta esses dados na forma de uma mensagem de texto "amigável", de acordo com a solicitação feita pelo usuário.


## Partindo para a prática

Antes de começar programar o nosso bot, precisamos criá-lo no Telegram. Podemos fazer isso utilizando o BotFather, ele é a interface que o Telegram oferece para a criação e manipulação de bots. Basta procurarmos no Telegram por [BotFather](https://t.me/BotFather) e iniciar uma conversa.

<img src="/assets/img/posts/tutorial-bot/busca-botfather.jpg" alt="Captura da tela de busca do Telegram" width="400">

Inicie uma conversa com o BotFather.

<img src="/assets/img/posts/tutorial-bot/start-botfather.jpg" alt="Captura da tela de start do BotFather" width="400">

Ele irá apresentar uma lista de possíveis comandos e uma breve descricação de cada um.

<img src="/assets/img/posts/tutorial-bot/start2-botfather.jpg" alt="Captura da tela com o comando start executado" width="400">

Nesse momento o comando que nos interessa é o `/newbot`

<img src="/assets/img/posts/tutorial-bot/newbot.jpg" alt="Captura da tela com o comando newbot" width="400">

Agora, o BotFather solicita o nome do nosso bot (_"Alright, a new bot. How are we going to call it? Please choose a name for your bot."_), basta responder essa mensagem com o nome desejado.

<img src="/assets/img/posts/tutorial-bot/nome-do-bot.jpg" alt="Captura da tela para dar nome ao bot" width="400">

Em seguida, será solicitado o nome de usuário do nosso bot (_"Good. Now let’s choose a username for your bot. It must end in ‘bot’. Like this, for example: TetrisBot or tetris_bot."_), existem algumas restrições para esse nome, ele deve ser único e terminar com o texto "bot", como nos exemplos: "TetrisBot ou tetris_bot". 

<img src="/assets/img/posts/tutorial-bot/nome-usuario-do-bot.jpg" alt="Captura da tela para dar o nome de usuário do bot" width="400">

Feito isso, recebemos uma mensagem contendo algumas informações referentes ao nosso bot. Uma delas é o token, essa é a informação que precisamos para ter acesso a API do Telegram.

## Bora desenvolver o bot?

Excelente (quase um Mr. Burns), agora podemos avançar para o desenvolvimento em si. Como já citado, será utilizada a linguagem Python para desenvolver o bot. Para quem já trabalha ou já trabalhou com essa linguagem, certamente já teve ter tido contato com o virtualenv. Para aqueles que ainda não conhecem, trata-se de uma ferramenta que permite aos desenvolvedores criarem ambientes virtuais isolados, em essência é isso, para mais informações consulte a [documentação](https://docs.python.org/3/library/venv.html). Para criar o nosso ambiente virtual, em Python 3, basta executarmos:

```shell
$ python3 -m venv <PATHDOAMBIENTE>
```

Exemplo (no Linux):

* Criando um diretório para o projeto
```shell
$ mkdir /home/<USUARIO>/Projetos/bot-tutorial
```

* Acessando o diretório do projeto
```shell
$ cd /home/<USUARIO>/Projetos/bot-tutorial
```

* Criando o ambiente virtual isolado
```shell
$ python3 -m venv venv
```

* Ativando o ambiente virtual 
```shell
$ source venv/bin/activate
```

Com o ambiente virtual preparado, podemos instalar as dependências do projeto usando o comando `pip`. Inicialmente vamos instalar apenas a biblioteca `python-telegram-bot`.

```shell
$ pip install python-telegram-bot
```

Agora, já podemos testar o ambiente utilizando o [echobot2.py](https://github.com/python-telegram-bot/python-telegram-bot/blob/master/examples/echobot2.py), um código de exemplo presente na documentação da biblioteca. 

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-


from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
import logging

# Enable logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)


# Define a few command handlers. These usually take the two arguments bot and
# update. Error handlers also receive the raised TelegramError object in error.
def start(bot, update):
    """Send a message when the command /start is issued."""
    update.message.reply_text('Hi!')


def help(bot, update):
    """Send a message when the command /help is issued."""
    update.message.reply_text('Help!')


def echo(bot, update):
    """Echo the user message."""
    update.message.reply_text(update.message.text)


def error(bot, update, error):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, error)


def main():
    """Start the bot."""
    # Create the EventHandler and pass it your bot's token.
    updater = Updater("TOKEN")

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # on different commands - answer in Telegram
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("help", help))

    # on noncommand i.e message - echo the message on Telegram
    dp.add_handler(MessageHandler(Filters.text, echo))

    # log all errors
    dp.add_error_handler(error)

    # Start the Bot
    updater.start_polling()

    updater.idle()


if __name__ == '__main__':
    main()

```

Na linha `updater = Updater("TOKEN")`, coloque o token da API gerado pelo Telegram. Já podemos rodar o nosso código:

```shell
$ python echobot2.py
```

Para testar podemos iniciar uma conversa com o nosso bot pelo Telegram.

<img src="/assets/img/posts/tutorial-bot/start-bot-criado.jpg" alt="Captura da tela de start do bot criado" width="400">

<img src="/assets/img/posts/tutorial-bot/start2-bot-criado.jpg" alt="Captura da tela de start do bot criado" width="400">

Notamos que a mensagem "Hi!" foi exibida ao executarmos o comando `/start`. 

<img src="/assets/img/posts/tutorial-bot/bom-dia-bot.jpg" alt="Captura da tela do bot com uma mensagem de bom dia" width="400">

Este bot apenas repete o texto das mensagens enviadas a ele. Nos próximos posts iremos desenvolver algumas funções para ele.

Por enquanto, é isso.

Até a próxima =)
