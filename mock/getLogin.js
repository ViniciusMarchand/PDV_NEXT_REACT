export default function getLogin(user) {
    const response = {
        data: {
            token:'123'
        }
    }
    
    if(user.username === 'vinicius' && user.password === '123') {
        return response;
    } else {

        throw new Error("username ou senha inválida!"); 
    }


}