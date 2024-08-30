//TODO: rename this, terrible name

export const BlogCreator = () => {
    return (
        <div className="flex flex-col flex-1 justify-end">
            <a href='/blog/create-blogs' className='hover:underline'>New</a>
            <a href='/blog/draft-blogs' className='hover:underline' >Drafts</a>
        </div>
    );
}