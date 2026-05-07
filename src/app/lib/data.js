export const getUsers = async () => {
    const res = await fetch('http://localhost:8000/users')
    return res.json()
}

export const getUserById = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`)
    return res.json()
}