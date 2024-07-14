export const blogCategories = {
    'Life': ['Random', 'Family', 'Unfiltered'],
    'Learning': ['AI', 'Algorithms & Data Structures', 'Network Security', 'Low-Level Learnings'],
}

export type BlogImage = {
    file: File,
    caption: string
}

export type BlogForm = {
    title: string,
    category: keyof typeof blogCategories,
    subcategory: string[],
    content: '',
    images: BlogImage[]
}