import { auth } from "loaders/firebase";

export const authRequest = async (url: string, method: string, data?: any) => {
    const idToken = await auth.currentUser?.getIdToken()
    console.log("id token is: ", idToken)
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify(data)
    })
};