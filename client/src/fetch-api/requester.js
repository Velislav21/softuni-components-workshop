
export async function request(url, method = "get") {

    const options = {
        method,
    };
    const response = await fetch(url, options);
    const data = await response.json();

    return Object.values(data);
}
