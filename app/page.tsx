import CardLayout from '../components/CardLayout'
import GenericButton from '../components/GenericButton'
export default function Home() {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
          <h1 className="text-[25px] font-bold mb-5">FERRAGEM AVILA</h1>
          <CardLayout>
            <div className="w-[450px] h-[500px] px-10 py-5">
              <h2 className=" text-[25px] mt-5">Entrar</h2>
              <p className="mb-5">Sistema de vendas e estoque.</p>
              <form>
                <div >
                  <label className="text-[18px]">Username</label>
                  <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2'/>
                </div>
                <div>
                  <label className="text-[18px]">Senha</label>
                  <input type='password' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-6 p-2'/>
                </div>
                <div className="h-[45px]">
                  <GenericButton/>
                </div>
                <div className="w-full h-[1px] border my-6"></div>
                <p className="text-center text-terciaria hover:underline cursor-pointer hover:text-terciaria2">Esqueceu a senha?</p>
              </form>
            </div>
          </CardLayout>
    </div>
  );
}
