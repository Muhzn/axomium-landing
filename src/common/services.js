const baseUrl = "https://api.axomium.com/v1/";

export const getCall = async (url) => {
    const response = await fetch(baseUrl + url);
    const jsonData = await response.json();
    return jsonData;
};

export const postCall = async (url, payload) => {
    const response = await fetch(baseUrl + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const jsonData = await response.json();
    return jsonData;
};