export const CreateBlog = () => {
    return (
        <div className='site-container'>
            <div className='flex flex-col items-center p-5'>
                <input className='w-96 border' placeholder="Title" />
                <select className='w-96 border'>
                    <option>Apples</option>
                    <option>Oranges</option>
                    <option>Bananas</option>
                </select>
            </div>
        </div>
    )
}