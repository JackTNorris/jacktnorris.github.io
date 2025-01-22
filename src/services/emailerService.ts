import { auth } from "loaders/firebase";
import { authRequest } from "./authService";

export const sendEmailNotification = async (publishedBlogId: string) => {
    await authRequest('', 'POST', {email: ''})
}