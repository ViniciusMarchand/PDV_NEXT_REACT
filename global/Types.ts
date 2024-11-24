export type LoginInputs = {
    username: string
    password: string

}

export type  ProductInputs = {
    id: number | undefined,
    descricao: string,
    unidadeMedida: string,
    estoque: number,
    precoFornecedor: number,
    preco: number,
    codigoBarrasEAN13: string,
}

export type Item = {
    id?: number,
    product: ProductInputs,
    quantity: number,
}

export type ItemInfo = {
    produtoId: number | undefined,
    quantidade: number
}

export type SalesItem = {
    id: number,
    quantidade: number,
    preco: number,
    precoUnitarioProduto: number,
    produto: ProductInputs,
}

export type Login = {
    username: string,
    password: string   
}

export type Sale = {
    id: number,
    dataHoraInicio: string,
    dataHoraConclusao: string,
    concluida: boolean,
    precoTotal: number,
    formaPagamento: string,
}

export type SaleItem = {
    id: number,
    quantidade: number,
    preco: number,
    precoUnitarioProduto: number,
    produto: ProductInputs,
}

export type EndSale = {
    dataHoraConclusao?: string,
    formaPagamento: string
}

export type DailySales = {
    data: string,
    totalVendas: number,
    totalLucro: number
}

export type Page = {
    size: number,
    number: number,
    totalElements: number,
    totalPages: number,
}


export type ProductPagination = {
    page: Page,
    content: ProductInputs[]
}