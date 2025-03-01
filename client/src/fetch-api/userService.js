
export default {
    async getAll() {
        const request = await fetch('http://localhost:3030/jsonstore/users');
        const data = await request.json();

        return Object.values(data)
    }
}