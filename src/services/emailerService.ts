// TODO: add consistency when user id is or isn't passed
import { auth } from "loaders/firebase";
import { authRequest } from "./authService";

export const sendEmailNotification = async (publishedBlogId: string) => {
    try {
        const res = await authRequest('https://api.jacktnorris.dev/emailer/admin/sendBlogNotification', 'POST', {blogId: publishedBlogId})
        if (res.status != 200)
        {
            return false
        }
    }
    catch(error)
    {
        console.log(error)
        return false
    }
    return true
}

export const getEmailList = async () => {
    return (await authRequest('https://api.jacktnorris.dev/emailer/admin/getEmailList', 'GET')).json()
}