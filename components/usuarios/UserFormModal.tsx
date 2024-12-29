'use client'
import { UserInputs } from "@/global/Types";
import GenericButton from "../common/GenericButton";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTitle } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Form from "../common/FormValues";
import { userRegistrationForm } from "@/constants/Forms";
import useToast from "@/hooks/useToast";
import { Input } from "../ui/input";
import authApi from "@/api/authApi";

interface UserFormModalProps {
    fetchUsers: () => void;
}

export default function UserFormModal({fetchUsers}: UserFormModalProps) {

    const [isOpen, setIsOpen] = useState(false);
    const {successToast, errorToast} = useToast();
    const [isAdmin, setIsAdmin] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<UserInputs>();
    const onSubmit: SubmitHandler<UserInputs> = (user) => registerUser(user);

    const registerUser = async (user: UserInputs) => {
        try {

            if(user.password !== user.confirmacaoSenha) {
                throw new Error("As senhas não coincidem!");
            }
            user.roles = [isAdmin ? "admin" : "user"];
            await authApi.register(user);
            successToast("Usuário adicionado com sucesso!");
            reset();
            setIsOpen(false);
            fetchUsers();
        } catch (error:any) {
            errorToast(error.message);
        }
    }


    return (
        <AlertDialog open={isOpen} >
            <AlertDialogContent>
            <AlertDialogTitle>Adicionar Usuário</AlertDialogTitle>
                <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
                    <Form register={register} formValues={userRegistrationForm}/>
                    <h2 className="ml-1 mt-3">Permissões</h2>
                    <div className="ml-6 flex items-center gap-2">
                        <label htmlFor="roles">Admin</label>
                        <Input 
                            className="w-[20px] h-[20px] inline-block" 
                            type="checkbox" 
                            checked={isAdmin} 
                            onChange={() => setIsAdmin(!isAdmin)}
                        />
                    </div>
                </form>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsOpen(false)}>
                        Cancelar
                    </AlertDialogCancel>
                    <GenericButton form="userForm" type="submit" value="Confirmar" className="text-[14px] w-[110px]"/>
                </AlertDialogFooter>
            </AlertDialogContent>
            <Button 
                className="bg-terciaria hover:bg-terciaria2 shadow-md" type="button"
                onClick={() => setIsOpen(true)}
            >
                Adicionar
            </Button>
        </AlertDialog>
    );
}