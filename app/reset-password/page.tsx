'use client'
import dynamic from 'next/dynamic';
import Image from "next/image";
import Logo from '@/public/imgs/logo.png';
import { FormEvent, Suspense, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useToast from "@/hooks/useToast";
import { useRouter, useSearchParams } from "next/navigation";
import authApi from "@/api/authApi";

const CardLayout = dynamic(() => import('@/components/common/CardLayout'), { ssr: false });

export default function Page() {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { successToast, errorToast } = useToast();
    const router = useRouter();

    const searchParams = useSearchParams();
    const userId = searchParams?.get('userId') || '';
    const token = searchParams?.get('token') || '';

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            if (newPassword !== confirmPassword) {
                errorToast('As senhas não coincidem');
                throw new Error('As senhas não coincidem');
            }

            if (userId && token && newPassword.length > 0) {
                await authApi.resetPassword(userId, token, newPassword);
                successToast('Senha alterada com sucesso');
                router.push('/');
            } else {
                errorToast('Valores inválidos!');
                throw new Error('Valores inválidos!');
            }

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                errorToast(error.message);
            } else {
                console.error(error);
                errorToast('Erro ao recuperar senha');
            }
        }
    }

    return (
        <div className="w-full min-h-full flex items-center justify-center flex-col">
            <div className="w-[450px] min-h-[500px]">
                <CardLayout>
                    <div className="py-5 px-10">
                        <div className="w-full flex justify-center mt-3">
                            <Image src={Logo} width={150} height={150} alt={'logo'} />
                        </div>
                        <h2 className=" text-[25px] mt-5">Recuperar Senha</h2>
                        <p className="mb-5 mt-2 text-sm text-gray-500">Crie uma nova senha para a sua conta.</p>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <div>
                                <label className="text-[18px]">Senha</label>
                                <Input
                                    type='password'
                                    className='text-[18px] w-full h-[45px] mb-5'
                                    placeholder="nova senha"
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />

                            </div>
                            <div>
                                <label className="text-[18px]">Confirme sua senha</label>
                                <Input
                                    type='password'
                                    className='text-[18px] w-full h-[45px] mb-5'
                                    placeholder="confirme sua senha"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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