---
layout: post
title: Insert’s das 5565 cidades brasileiras
author: Douglas Gusson
tags: [SQL]
---
SQL para inserção das 5565 cidades brasileiras, numa tabela cidade, contendo cod_cidade (código do IBGE), nome_cidade e sigla_uf:

![Modelo tabela de cidades]({{ site.url }}/assets/img/posts/002.jpg)

Visão prévia do script:

```sql
-- INSERTS DAS 5565 CIDADES BRASILEIRAS --
INSERT INTO cidade (cod_cidade, nome_cidade, sigla_uf)
VALUES (2300101,'Abaiara','CE');
INSERT INTO cidade (cod_cidade, nome_cidade, sigla_uf)
VALUES (2900108,'Abaíra','BA');
INSERT INTO cidade (cod_cidade, nome_cidade, sigla_uf)
VALUES (2900207,'Abaré','BA');
INSERT INTO cidade (cod_cidade, nome_cidade, sigla_uf)
VALUES (4100103,'Abatiá','PR');
```


[Script completo](https://raw.githubusercontent.com/douglasgusson/scritpts-sql/master/script-cidades.sql)
