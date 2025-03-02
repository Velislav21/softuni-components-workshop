
const baseUrl = 'http://localhost:3030/jsonstore/users'

export default {

    async getAll() {
        const response = await fetch(baseUrl);
        const data = await response.json();

        return Object.values(data)
    },

    async getOne(id) {
        const response = await fetch(`${baseUrl}/${id}`)

        const user = await response.json();
        return user;
    },

    async createUser(data) {

        const postData = transformUserData(data);

        const response = await fetch(baseUrl, {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)

        })

        const result = await response.json();
        return result;

    },
    async deleteUser(id) {
        await fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
    }
}
function transformUserData(userData) {
    const { country, city, street, streetNumber, ...transformedData } = userData;

    transformedData.address = { country, city, street, streetNumber };
    transformedData.createdAt = new Date().toISOString();
    transformedData.updatedAt = new Date().toISOString();

    return transformedData;
}