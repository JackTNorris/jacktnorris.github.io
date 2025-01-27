// TODO: add in some error handling
// TODO: refactor function params to be an object for greater modulatrity
// TODO: add in some functions to handle boilerplate for db access
// TODO: move db paths to config file
// TODO: refactor things so I don't have to call the realtime database so many times

import { child, get, getDatabase, push, ref, remove, update } from "firebase/database"
import { auth, database } from "loaders/firebase"
import { random, uniqueId } from "lodash"
import { createHash, randomBytes } from "node:crypto"
import hashCode from "utils/hash"

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

export const fetchDraftBlog = async (userId: string, blogId: string) => {
    try {
        const dbRef = ref(getDatabase());
        const blog = (await get(child(dbRef, `/users/${userId}/blog/drafts/${blogId}`))).val()
        return blog as BlogPost
    }
    catch(error)
    {
        console.log(error)
        return null;
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

export const fetchBlogPost = async (userId: string, blogId: string) => {
    try {
        const dbRef = ref(getDatabase());
        const blog = (await get(child(dbRef, `/users/${userId}/blog/posts/${blogId}`))).val()
        return blog as BlogPost
    }
    catch(error)
    {
        console.log(error)
        return null;
    }
}


export const updateBlogPost = async (id: string, userId: string, title: string, tag: string, content: string) => {
    try {
        await update(ref(database, `/users/${userId}/blog/posts/${id}`), {
            lastEdited: new Date().getTime(),
            title,
            tag,
            content
        })
        return true
    }
    catch (error) {
        return false
    }
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


// TODO: fix this nonsense?
export const addBlogSubscriber = async (email: string, userId: string) => {
    try {
        /*
        await update(ref(database, `/users/${userId}/blog/subscribers/${hashCode(email)}`), {
            email: email
        })*/
        const x = await fetch(`https:api.jacktnorris.dev/emailer/signup?email=${email}`, {cache: "no-store"})
        if (x.status != 200)
            return false
        return true
    }
    catch(error)
    {
        console.log(error)
        return false
    }
}