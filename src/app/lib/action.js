import { revalidatePath } from "next/cache";

export const createUser = async (formData) => {
    "use server"
    const newUser = Object.fromEntries(formData.entries())
    console.log("new user data", newUser)
    const res = await fetch('http://localhost:8000/users',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }
    )
    const data = await res.json()
    console.log(data)

    //TODO: Revalidate cache
    if (data.insertedId) {
        revalidatePath('/users')
    }

    return data
}

export const deleteUser = async (id) => {
    "use server"
    const res = await fetch(`http://localhost:8000/users/${id}`,
        {
            method: "DELETE"
        })

    const data = await res.json();
    // console.log(data);

    //TODO: Revalidate cache
    if (data.deletedCount) {
        revalidatePath('/users')
    }

    return data
}