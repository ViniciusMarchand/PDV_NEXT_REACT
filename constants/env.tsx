export const apiLink = "https://api.ferragemavila.com.br/"

export const clientInfo = {
    cnpj: process.env.NEXT_PUBLIC_CNPJ,
    street: process.env.NEXT_PUBLIC_RUA,
    number: process.env.NEXT_PUBLIC_NUMERO,
    neighborhood: process.env.NEXT_PUBLIC_BAIRRO,
    city: process.env.NEXT_PUBLIC_CIDADE,
    state: process.env.NEXT_PUBLIC_UF,
    cep: process.env.NEXT_PUBLIC_CEP,
    phone: process.env.NEXT_PUBLIC_PHONE
}

export const pixInfo = {
    key: process.env.NEXT_PUBLIC_PIX_KEY || '',
    name: process.env.NEXT_PUBLIC_PIX_NAME || '',
    city: process.env.NEXT_PUBLIC_CIDADE || '',
    transactionId: process.env.NEXT_PUBLIC_PIX_TRANSACTION_ID || ''
}