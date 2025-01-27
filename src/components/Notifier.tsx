import React from 'react'
import { twMerge } from 'tailwind-merge'
import { addBlogSubscriber } from 'services/blogService'
import { useToast } from './toast/ToastContainerProvider'
export const Notifier = () => {
    const [overNotifications, setOverNotifications] = React.useState(false)
    const toastContext = useToast();

    const onSubmitEmail = async (email: string | null) => {
        if (email != null) {
            const success = await addBlogSubscriber(email, 'guDT9CByeceyrbjRG6hOAnAs4mH3')
            if(success)
            {
                toastContext.addToast("Check your email!", "Just sent you a confirmation email. Click the confirmation link, and I'll make sure to notify you once a new blog is out!", "success", 4000)
            }
            else
            {
                toastContext.addToast("Error!", "There was an error adding your email to the subscription list. Please try again later.", "error", 4000)
            }
        }

    }

    return (
        <div className='flex flex-row gap-1 items-center'>
                <svg 
                    onMouseEnter={() => {setOverNotifications(true)}}  
                    onMouseLeave={() => (setOverNotifications(false))} 
                    onClick={() => onSubmitEmail(prompt("Working on email notification functionality! Put your email here if you want to be notified when I post a new Peace Corps blog in the future!"))} 
                    xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-none stroke-black hover:cursor-pointer hover:animate-shake hover:fill-blue-500'  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 3 C 13.9 3 13 3.9 13 5 L 13 5.265625 C 9.5610846 6.1606069 7 9.2910435 7 13 L 7 15.400391 C 7 17.000391 6.6996094 18.5 6.0996094 20 L 23.900391 20 C 23.300391 18.5 23 17.000391 23 15.400391 L 23 13 C 23 9.2910435 20.438915 6.1606069 17 5.265625 L 17 5 C 17 3.9 16.1 3 15 3 z M 5 22 A 1.0001 1.0001 0 1 0 5 24 L 12.173828 24 C 12.068319 24.312339 12 24.644428 12 25 C 12 26.7 13.3 28 15 28 C 16.7 28 18 26.7 18 25 C 18 24.644428 17.931681 24.312339 17.826172 24 L 25 24 A 1.0001 1.0001 0 1 0 25 22 L 5 22 z"/></svg>            
                <p className={twMerge('flex flex-row items-center transition-all w-0 h-8 overflow-hidden text-nowrap', overNotifications && 'w-48')}>Get notified of new blogs!</p>
        </div>
    );
}