import { getUserById } from "@/app/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React, { use } from "react";

const UserDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const user = await getUserById(id);
    // console.log(user);

    const { name, email, role } = user;
    return (
        <div className="max-w-sm w-full mx-auto bg-slate-600 text-white p-10 border rounded-xl">
            <h2 className="text-5xl mb-4">Users Details</h2>
            <h3 className="text-3xl mb-2">{name}</h3>
            <p>{email}</p>
            <p>{role}</p>
            <Link href="/users">
                <Button className="text-white mt-2" variant="outline">
                    Back
                </Button>
            </Link>
        </div>
    );
};

export default UserDetailsPage;
