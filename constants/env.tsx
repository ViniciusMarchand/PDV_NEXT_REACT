export const apiLink = "https://api.ferragemavila.com.br/"

export const clientInfo = {
    cnpj: process.env.NEXT_PUBLIC_CLIENT_CNPJ,
    street: process.env.NEXT_PUBLIC_RUA,
    number: process.env.NEXT_PUBLIC_NUMERO,
    neighborhood: process.env.NEXT_PUBLIC_BAIRRO,
    city: process.env.NEXT_PUBLIC_CIDADE,
    state: process.env.NEXT_PUBLIC_UF,
    cep: process.env.NEXT_PUBLIC_CEP,
    phone: process.env.NEXT_PUBLIC_PHONE
}