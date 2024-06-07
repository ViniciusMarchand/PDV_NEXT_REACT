export type LoginInputs = {
    username: string
    password: string

}

export type ProductInputs = {
    id: number | undefined,
    descricao: string,
    unidadeMedida: string,
    estoque: number,
    precoFornecedor: number,
    preco: number,
    codigoBarrasEAN13: string,
}

export type Item = {
    product: ProductInputs,
    quantity: number
}

export type ItemInfo = {
    produtoId: number | undefined,
    quantidade: number
}

