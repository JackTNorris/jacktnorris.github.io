// TODO: add in some error handling
// TODO: refactor function params to be an object for greater modulatrity
// TODO: add in some functions to handle boilerplate for db access
// TODO: move db paths to config file

import { child, get, getDatabase, push, ref, remove, update } from "firebase/database"
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

export const deleteDraftBlog = async (id: string, userId: string) => {
    try {
        const dbRef = ref(getDatabase());
        await remove(child(dbRef, `/users/${userId}/blog/drafts/${id}`))
        return true
    }
    catch(error)
    {
        console.log(error)
        return false
    }
}

export const updateDraftBlog = async (id: string, userId: string, title: string, tag: string, content: string) => {
    update(ref(database, `/users/${userId}/blog/drafts/${id}`), {
        lastEdited: new Date().getTime(),
        title,
        tag,
        content
    })
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

export const updateBlogPost = async (id: string, userId: string, title: string, tag: string, content: string) => {
    update(ref(database, `/users/${userId}/blog/posts/${id}`), {
        lastEdited: new Date().getTime(),
        title,
        tag,
        content
    })
}

export const deleteBlogPost = async (id: string, userId: string) => {
    try {
        const dbRef = ref(getDatabase());
        await remove(child(dbRef, `/users/${userId}/blog/posts/${id}`))
        return true
    }
    catch(error)
    {
        console.log(error)
        return false
    }
}
