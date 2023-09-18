use greenfield;

create table tb_cartao(
id_cartao int primary key auto_increment,
nr_cartao int,
nm_titular varchar(100),
vl_cartao decimal(15,2),
ds_cartao varchar(100),
ds_cpf_titular_cartao varchar(100),
dt_nascimento date
);

create table tb_cliente(
id_cliente int primary key auto_increment,
nm_cliente varchar(100),
ds_email varchar(100),
ds_cpf varchar(100),
ds_senha varchar(100),
ds_telefone varchar(100),
ds_reclamacao varchar(100),
id_cartao int,
foreign key (id_cartao) references tb_cartao (id_cartao)
);

create table tb_admin(
id_admin int primary key auto_increment,
ds_email varchar(100),
ds_senha varchar(100)
);

create table tb_categoria(
id_categoria int primary key auto_increment,
nm_categoria varchar(100) 
);

create table tb_informacoes_produto(
id_informacoes_produto int primary key auto_increment,
ds_material varchar(100),
ds_dimensoes varchar(100),
ds_extra varchar(1000) 
);

create table tb_produto (
id_produto int primary key auto_increment,
nm_produto varchar(100),
ds_fabricante varchar(100),
vl_preco int,
nr_garantia int,
ds_produto varchar(1000),
id_categoria int,
foreign key (id_categoria) references tb_categoria (id_categoria),
vl_preco_promocao decimal,
bt_promocao boolean,
qtd_estoque int,
id_informacoes_produto int,
foreign key (id_informacoes_produto) references tb_informacoes_produto (id_informacoes_produto)
);

create table tb_endereço(
    id_endereco int primary key auto_increment,
	ds_logradouro varchar(100),
	nr_numero int,
	ds_complemento varchar(100),
	nm_referencia varchar(100),
	ds_bairro varchar(100),
	ds_cidade varchar(100),
	ds_uf varchar(100)
);



create table tb_pedido(
id_pedido int primary key auto_increment,
ds_nota_fiscal varchar(100),
tp_formas_pagamento varchar(100),
qtd_parcelas int,
dt_pedido datetime,
ds_situacao varchar(100),
id_cliente int,
id_endereço int,
foreign key (id_cliente) references tb_cliente (id_cliente),
foreign key (id_endereço) references tb_endereço (id_endereco)
);