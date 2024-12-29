'use client'
import authApi from "@/api/authApi";
import ContentHeader from "@/components/common/Contentheader";
import UserFormModal from "@/components/usuarios/UserFormModal";
import { UsersTable } from "@/components/usuarios/UsersTable";
import { User } from "@/global/Types";
import { useEffect, useState } from "react";

export default function Page() {

    const [users, setUsers] = useState<User[]>([]);
    
    const fetchUsers = async () => {
        try {
            const response = await authApi.getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    },[]);

    return (


        <div className="flex flex-col w-full h-full max-h-full">
            <ContentHeader>
                <UserFormModal fetchUsers={fetchUsers}/>
            </ContentHeader>
            <UsersTable users={users}/>
        </div>
    )
}