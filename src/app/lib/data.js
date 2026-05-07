export const getUsers = async () => {
    const res = await fetch('http://localhost:8000/users')
    return res.json()
}