import { FormValues } from "@/global/Types";


export const userRegistrationForm: FormValues[] = [
    {
        label: "Username",
        value: "username",
        placeholder: "Digite o username",
    },
    {
        label: "Email",
        value: "email",
        placeholder: "Digite o email",
        type: "email",
    },
    {
        label: "Nome",
        value: "nome",
        placeholder: "Digite o nome",
    },
    {
        label: "Sobrenome",
        value: "sobrenome",
        placeholder: "Digite o sobrenome",
    },
    {
        label: "Senha",
        value: "password",
        placeholder: "Digite a senha",
        type: "password",
    },
    {
        label: "Confirmação de senha",
        value: "confirmacaoSenha",
        placeholder: "Digite a senha novamente",
        type: "password",
    },
]