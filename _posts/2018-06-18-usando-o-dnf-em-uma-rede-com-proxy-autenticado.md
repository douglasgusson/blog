---
layout: post
title: Usando o DNF em uma rede com proxy autenticado
author: Douglas Gusson 
tags: [DNF, Fedora, Proxy]
---

Usa o Fedora e precisa usar o gerenciador de pacotes em uma rede com proxy autenticado?! Então vamos ver como configurar o DNF.

Primeiro precisamos saber qual é o arquivo de configuração, no caso do DNF: `/etc/dnf/dnf.conf`
Nele você verá algo parecido com:
```
[main]  
gpgcheck=1  
installonly_limit=3  
clean_requirements_on_remove=true
```
Para atribuir as configurações de proxy basta adicionar no final desse arquivo as seguintes linhas:
```
proxy=http://<ENDERECO>:<PORTA>  
proxy_username=<USUARIO>  
proxy_password=<SENHA>
```
*Substitua `<ENDERECO>` pelo IP ou URL do servidor proxy, `<PORTA>` pela porta do proxy (normalmente 3128), `<USUARIO>`e `<SENHA>` pelo seu usuário e senha.*  

Uma outra sugestão, seria usar um pequeno script Shell para adicionar e remover essas configurações facilmente (Obs.: o script precisa ser executado com privilégios de root):

```shell
#!/bin/bash

proxy_ip=172.16.48.1 # IP de exemplo
proxy_porta=3128 # Porta de exemplo

uso() {
    echo
    echo "Opções:"
    echo -e "\t-h --help Mostra conteúdo de ajuda."
    echo -e "\t-d --dnfproxy Define configuração do proxy para o DNF."
    echo -e "\t-ud --unsetdnfproxy Desfaz configuração do proxy para o DNF."
    echo 
}

read_user_passwd() {
    read -p "Usuário: " usuario
    read -s -p "Senha para $usuario: " senha  
    echo
}

set_proxy_dnf() {
    read_user_passwd   
    echo "proxy=http://$proxy_ip:$proxy_porta" >> /etc/dnf/dnf.conf
    echo "proxy_username=$usuario" >> /etc/dnf/dnf.conf
    echo "proxy_password=$senha" >> /etc/dnf/dnf.conf
    echo "Proxy para DNF configurado!"
}

unset_proxy_dnf() {
    sed -i '/proxy/d' /etc/dnf/dnf.conf 
    echo "Configurações de proxy para DNF removidas!"   
}

main() {

    if test -z $1 
    then
        uso
    fi

    while test ! -z $1
    do
        case $1 in
            -h | --help)
                uso
                exit
                ;;
            -d | --dnfproxy)
                set_proxy_dnf
                exit
                ;;
            -ud | --unsetdnfproxy)
                unset_proxy_dnf
                exit
                ;;
            *)
                echo "ERRO: Parâmetro \"$1\" desconhecido"
                uso
                exit 1
                ;;
        esac
    done
}

main $1
```
Bom, por hoje é só.

Até a próxima =)
