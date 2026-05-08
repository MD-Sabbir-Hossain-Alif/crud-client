"use client";

import { Button, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";

const EditUser = ({ user, updateUser }) => {
    const id = user?._id;
    const onSubmit = (formData) => {
        console.log(formData);
        return updateUser(id, formData);
    };
    return (
        <Form
            className="flex w-md flex-col gap-4 p-8 border rounded-2xl"
            action={onSubmit}
        >
            <TextField
                className="w-full"
                name="name"
                defaultValue={user?.name}
                type="text"
            >
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
            </TextField>
            <TextField
                className="w-full"
                name="email"
                defaultValue={user?.email}
                type="email"
            >
                <Label>Email</Label>
                <Input placeholder="Enter your email" />
            </TextField>
            <TextField
                className="w-full"
                name="role"
                defaultValue={user?.role}
                type="text"
            >
                <Label>Role</Label>
                <Input placeholder="Enter your role" />
            </TextField>
            <div className="flex justify-end gap-2">
                <Link href="/users">
                    <Button variant="secondary">Back</Button>
                </Link>
                <Button type="submit">Edit User</Button>
            </div>
        </Form>
    );
};

export default EditUser;
