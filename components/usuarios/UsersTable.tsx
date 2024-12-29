import Table from "../common/Table.";
import CardLayout from "../common/CardLayout";
import { User } from "@/global/Types";

interface UsersTableProps {
    users: User[];
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
    
    return (
        <CardLayout>
            <div className="p-2">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>ID</Table.Cell>
                            <Table.Cell>USERNAME</Table.Cell>
                            <Table.Cell>EMAIL</Table.Cell>
                            <Table.Cell>NOME</Table.Cell>
                            <Table.Cell>ROLES</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                            {
                                users.map((user) => (
                                    <Table.Row key={user.id}>
                                        <Table.Cell className="text-sm">{user.id}</Table.Cell>
                                        <Table.Cell className="text-sm">{user.username}</Table.Cell>
                                        <Table.Cell className="text-sm">{user.email}</Table.Cell>
                                        <Table.Cell className="text-sm">{`${user.nome} ${user.sobrenome}`}</Table.Cell>
                                        <Table.Cell className="text-sm">
                                            <p title={user.roles.map(role => role.name).join(', ')}>
                                                {
                                                    `${user.roles[0]?.name || 'USER'}${user.roles.length > 1 ? "..." : ""}`
                                                }
                                            </p>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }

                    </Table.Body>
                </Table>
            </div>
        </CardLayout>
    )
}