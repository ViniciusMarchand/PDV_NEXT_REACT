'use client'

import { useContext, useState } from 'react';
import CardLayout from '../components/common/CardLayout';
import GenericButton from '../components/common/GenericButton';
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from '@/global/Types';
import Image from 'next/image';
import Logo from '@/public/imgs/logo.png';
import { useRouter } from 'next/navigation';
import authApi from '@/api/authApi';
import { createCookie } from '@/lib/utils';
import { ToastContext } from '@/contexts/ToastContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/common/Spinner';

export default function App() {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const { errorToast } = useContext(ToastContext);

  const router = useRouter();

  const login = async (user: LoginInputs) => {
    try {
      setLoading(true);
      const res = await authApi.login(user);
      const { accessToken, refreshToken } = res.data;

      createCookie('accessToken', accessToken);
      createCookie('refreshToken', refreshToken);

      router.push('/vendas');
    } catch (error: any) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  }

  const onSubmit: SubmitHandler<LoginInputs> = (user) => login(user);

  return (
    <div className="w-full min-h-full flex items-center justify-center flex-col">
      <Image src={Logo} width={150} height={150} alt={'logo'} />
      <div className="w-[450px] h-[500px]">
        <CardLayout>
          <div className="py-5 px-10">
            <h2 className=" text-[25px] mt-5">Entrar</h2>
            <p className="mb-5">Sistema de vendas e estoque.</p>
            <form onSubmit={handleSubmit(onSubmit)} method='POST'>
              <div>
                <label className="text-[18px]">Username</label>
                <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("username")} />
              </div>
              <div>
                <label className="text-[18px]">Senha</label>
                <input type='password' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-6 p-2 bg-secundaria' {...register("password")} />
              </div>
              <div className="h-[45px]">
                <Button className='text-[18px] w-full' disabled={loading}>
                  {
                    loading ? <Spinner /> : 'Entrar'
                  }
                </Button>
              </div>
              <div className="w-full h-[1px] border my-6"></div>
              <Link href="/reset-password/request">
                <p className="text-center text-terciaria hover:underline cursor-pointer hover:text-terciaria2">Esqueceu a senha?</p>
              </Link>
            </form>
          </div>
        </CardLayout>
      </div>
    </div>
  );
}
