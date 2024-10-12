const authenticateURL = 'https://jellyfish-app-sjgrf.ondigitalocean.app';
class Services {

    async postRegister(url: string, body: any) {
        const res = await fetch(`${authenticateURL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return await res.json()
    }
    async postAuth(url: string, body: any) {
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
