
const baseUrl = 'http://localhost:3030/jsonstore/users'

export default {
    async getAll() {
        const request = await fetch(baseUrl);
        const data = await request.json();

        return Object.values(data)
    },
    async getOne(id) {
        const request = await fetch(`${baseUrl}/${id}`)

        const data = await request.json();
        return data
    },
    async deleteUser(id) {
        await fetch(`${baseUrl}/${id}`, { method: 'delete' })
    }
}