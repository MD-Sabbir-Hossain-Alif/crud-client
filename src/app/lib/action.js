import { revalidatePath } from "next/cache";

export const deleteUser = async (id) => {
    "use server"
    const res = await fetch(`http://localhost:8000/users/${id}`,
        {
            method: "DELETE"
        })

    const data = await res.json();
    console.log(data);

    //TODO: Revalidate cache
    if (data.deletedCount) {
        revalidatePath('/users')
    }

    return data
}