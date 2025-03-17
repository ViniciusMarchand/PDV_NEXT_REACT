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
    imagem: File | null
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
    precoUnitarioAtual: number,
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
    vendedorId: string,
    vendedorNome: string,
    itens: SalesItem[]}

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


export type Pagination = {
    page: Page,
    content: (ProductInputs & SaleItem)[]
}

export type UserToken = {
    exp: number,
    iat: number,
    iss: string,
    nome: string,
    scope: string,
    sub: string
}

type Role = {
    id: number,
    name: string
}

export type User = {
    id: string,
    username: string,
    email: string,
    nome: string,
    sobrenome: string,
    roles: Role[]
}

export type UserInputs = {
    username: string,
    email: string,
    nome: string,
    sobrenome: string,
    password: string,
    confirmacaoSenha?: string
    roles?: string []
}

export type FormValues = {
    label: string,
    value: string,
    placeholder?: string,
    type?: string,
}

export type RequestXML = {
    chaveAcessoNfe: string,
    porcentagemAumentoPreco: number
}

export type ImportProductResult = {
    descricao: string,
    codigoBarras: string,
    erro: string
}

export type ImportReulst = {
    produtosComErro: ImportProductResult[],
    produtosSalvos: number,
}