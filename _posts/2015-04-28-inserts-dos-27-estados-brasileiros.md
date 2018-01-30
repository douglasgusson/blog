---
layout: post
title: INSERT’s dos 27 Estados Brasileiros
tags: [SQL]
---
SQL para inserção dos 27 estados brasileiros, numa tabela uf, contendo sigla_uf e nome_uf:

![Modelo tabela de cidades]({{ site.url }}/assets/img/posts/001.jpg)

Visão prévia do script:

```sql
-- INSERTS DOS 27 ESTADOS BRASILEIROS --
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('AC', 'Acre');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('AL', 'Alagoas');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('AP', 'Amapá');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('AM', 'Amazonas');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('BA', 'Bahia');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('CE', 'Ceará');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('DF', 'Distrito Federal');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('ES', 'Espírito Santo');
INSERT INTO uf (sigla_uf, nome_uf) VALUES ('GO', 'Goiás');
```

[Script completo](https://raw.githubusercontent.com/douglasgusson/scritpts-sql/master/script-estados.sql)
