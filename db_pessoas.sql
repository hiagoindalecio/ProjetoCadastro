drop database if exits db_pessoas;
create database db_pessoas;
use db_pessoas;

create table tb_pessoas(
	cpf varchar(14),
	nome varchar(15),
	sobrenome varchar(15),
	telefone varchar(14),
	endereco varchar(50),
	primary key(cpf)
);
insert into tb_pessoas values
('456.456.245-07', 'José', 'Pereira', '(11)98345-8793', 'Rua dos Bobos, nº0');