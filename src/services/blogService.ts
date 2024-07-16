// TODO: add in some error handling
import { child, get, getDatabase, push, ref } from "firebase/database"
import { auth, database } from "loaders/firebase"

export type BlogPost = {
    id: string,
    createdOn: number,
    lastEdited: number,
    title: string,
    tag: string,
    content: string
}


export const fetchBlogTags = async (userId: string) => {
    const dbRef = ref(getDatabase());
    const blogTopics = (await get(child(dbRef, `/users/${userId}/blog/tags`))).val()
    return Object.keys(blogTopics).map(key => blogTopics[key]) as string[]
}

export const getBlogPosts = () => {

}

export const addBlogPost = () => {

}

export const deleteBlogPost = () => {

}

//TODO: refactor to take in an object
export const createDraftBlog = (title: string, tag: string, content: string, userId: string) => {
    push(ref(database, `/users/${userId}/blog/drafts`), {
        createdOn: new Date().getTime(),
        lastEdited: new Date().getTime(),
        title,
        tag,
        content
    })
}

export const fetchDraftBlogs = async (userId: string) => {
    try {
        const dbRef = ref(getDatabase());
        const blogs = (await get(child(dbRef, `/users/${userId}/blog/drafts`))).val()
        const returnBlogs: BlogPost[] = []
        Object.keys(blogs).forEach(key => {
            returnBlogs.push({...blogs[key], id: key})
        })
        return returnBlogs as BlogPost[]
    }
    catch(error)
    {
        console.log(error)
        return [];
    }
}

export const createBlogPost = (title: string, tag: string, content: string, userId: string) => {
    push(ref(database, `/users/${userId}/blog/posts`), {
        createdOn: new Date().getTime(),
        lastEdited: new Date().getTime(),
        title,
        tag,
        content
    })
}

export const fetchBlogPosts = async (userId: string) => {
    try {
        const dbRef = ref(getDatabase());
        const blogs = (await get(child(dbRef, `/users/${userId}/blog/posts`))).val()
        const returnBlogs: BlogPost[] = []
        Object.keys(blogs).forEach(key => {
            returnBlogs.push({...blogs[key], id: key})
        })
        return returnBlogs as BlogPost[]
    }
    catch(error)
    {
        console.log(error)
        return [];
    }
}