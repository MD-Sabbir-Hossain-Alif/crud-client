"use client";

import { AlertDialog, Button } from "@heroui/react";
import React from "react";

const DeleteDialog = ({ user, deleteUserAction }) => {
    const { _id, name } = user;

    const handleDelete = async () => {
        // console.log(_id);
        await deleteUserAction(_id);
    };
    return (
        <AlertDialog>
            <Button variant="danger">Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete User permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete{" "}
                                <strong>{name}</strong> and all of its data.
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close"
                                variant="danger"
                            >
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteDialog;
