'use client'

import { useContext } from 'react';
import CardLayout from '../components/common/CardLayout';
import GenericButton from '../components/common/GenericButton';
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from '@/contexts/AuthContext';
import { LoginInputs } from '@/global/Types';

export default function App() {

  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (user) => login(user);
  
  return (
    <div className="w-full min-h-full flex items-center justify-center flex-col">
      <h1 className="text-[25px] font-bold mb-5">FERRAGEM AVILA</h1>
      <div className="w-[450px] h-[500px]">
        <CardLayout>
          <div className="py-5 px-10">
            <h2 className=" text-[25px] mt-5">Entrar</h2>
            <p className="mb-5">Sistema de vendas e estoque.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-[18px]">Username</label>
                <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("username")} />
              </div>
              <div>
                <label className="text-[18px]">Senha</label>
                <input type='password' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-6 p-2 bg-secundaria' {...register("password")} />
              </div>
              <div className="h-[45px]">
                <GenericButton value='Entrar' className='text-[18px]'/>
              </div>
              <div className="w-full h-[1px] border my-6"></div>
              <p className="text-center text-terciaria hover:underline cursor-pointer hover:text-terciaria2">Esqueceu a senha?</p>
            </form>
          </div>
        </CardLayout>
      </div>
    </div>
  );
}
