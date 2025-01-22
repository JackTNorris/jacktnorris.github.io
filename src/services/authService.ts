import { auth } from "loaders/firebase";

export const authRequest = async (url: string, method: string, data?: any) => {
    const idToken  = await auth.currentUser?.getIdToken()
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify(data)
    })
};