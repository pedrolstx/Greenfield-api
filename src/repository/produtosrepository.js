import conexao from "./connection.js";

export async function Listartodos(){
    let sql = `SELECT *
    FROM tb_produto
    INNER JOIN tb_categoria
    ON tb_categoria.id_categoria = tb_produto.id_categoria `

    let [resp] = await conexao.query(sql)

    return resp
}

export async function Cadastrarproduto(produtos){
    let sql = `insert into tb_produto(nm_produto, ds_fabricante, vl_preco, nr_garantia, ds_produto, id_categoria, vl_preco_promocao, bt_promocao, qtd_estoque, ds_material, ds_dimensoes, ds_extra)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    let [info] = await conexao.query(sql, [
        produtos.nome,
        produtos.fabri,
        produtos.preco,
        produtos.garantia,
        produtos.descricao,
        produtos.categoria,
        produtos.preco_promo,
        produtos.promocao,
        produtos.estoque,
        produtos.material,
        produtos.dimensoes,
        produtos.extra
    ])

    produtos.id = info.insertID

    return produtos;
}

export async function Editarproduto(id, produtos){
    let sql = `update tb_produto set 
    nm_produto = ?,
    ds_fabricante = ?,
    vl_preco = ?,
    nr_garantia = ?,
    ds_produto = ?,
    id_categoria = ?,
    vl_preco_promocao  = ?,
    bt_promocao  = ?,
    qtd_estoque = ?,
    ds_material = ?,
    ds_dimensoes = ?,
    ds_extra = ?,
    where id_produto = ?`

    let [info] = await conexao.query(sql, [
        produtos.nome,
        produtos.fabri,
        produtos.preco,
        produtos.garantia,
        produtos.descricao,
        produtos.categoria,
        produtos.preco_promo,
        produtos.promocao,
        produtos.estoque,
        produtos.dimensoes,
        produtos.material,
        produtos.extra
    ])

    let linha = info.affectedRows;
    return linha
}

export async function Favorito(id, produtos){
    let sql = `update tb_produto set bt_favorito = ? where id_produto = ?`

    let [info] = await conexao.query(sql, [
        produtos.favorito
    ])

    let linha = info.affectedRows;
    return linha
}

export async function deletarproduto(id){
    let sql = `delete from tb_produto where id_produto = ?`

    let [info] = await conexao.query(sql, [id])

    let linha = info.affectedRows;
    return linha;
}