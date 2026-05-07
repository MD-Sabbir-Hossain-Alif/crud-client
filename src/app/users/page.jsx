import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "@/components/UsersTable";
import AddUserModal from "@/components/AddUserModal";
import { createUser } from "../lib/action";

const UsersPage = async () => {
    const users = await getUsers();
    // console.log(users);
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="flex justify-between items-center py-5">
                <h2 className="text-4xl font-semibold">
                    User Management: {users.length}
                </h2>
                <AddUserModal createUserAction={createUser}></AddUserModal>
            </div>
            <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;
