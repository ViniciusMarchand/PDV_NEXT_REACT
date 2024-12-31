'use client'
import CardLayout from "@/components/common/CardLayout";
import Image from "next/image";
import Logo from '@/public/imgs/logo.png';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import authApi from "@/api/authApi";
import useToast from "@/hooks/useToast";


export default function Requiest() {
    
    const [email, setEmail] = useState('');
    const {errorToast, successToast} = useToast();

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault();
            await authApi.resetPasswordRequest(email);
            successToast("Email enviado com sucesso!");
            setEmail('');
        } catch (error) {
            errorToast("Erro ao enviar email!");
        }
    }

    return (
        <div className="w-full min-h-full flex items-center justify-center flex-col">
            <div className="w-[450px] h-[500px]">
                <CardLayout>
                    <div className="py-5 px-10">
                        <div className="w-full flex justify-center mt-3">
                            <Image src={Logo} width={150} height={150} alt={'logo'} />
                        </div>
                        <h2 className=" text-[25px] mt-5">Recuperar Senha</h2>
                        <p className="mb-5 mt-2 text-sm text-gray-500">Insira o seu email e enviaremos um link para que você mude a sua senha e volte a acessar a sua conta.</p>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <div>
                                <label className="text-[18px]">Email</label>
                                <Input 
                                    type='email' 
                                    className='text-[18px] w-full h-[45px] mb-5' 
                                    placeholder="email da sua conta"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                            <div className="h-[45px] w-full flex justify-center">
                                <Button>
                                    Confirmar
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardLayout>
            </div>
        </div>
    )
}