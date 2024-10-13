const authenticateURL = 'https://jellyfish-app-sjgrf.ondigitalocean.app';
class Services {

    async postRegister(url: string, body: { fullName: string, email: string, phoneNumber: string, password: string }) {
        const res = await fetch(`${authenticateURL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return await res.json()
    }
    async postAuth(url: string, body: { email: string, password: string }) {
        const res = await fetch(`${authenticateURL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return await res.json()
    }
}

export { Services }
