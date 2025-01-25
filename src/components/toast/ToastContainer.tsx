import { twMerge } from "tailwind-merge";

// TODO: fix "any"
export const ToastContainer = ({messages}: {messages: any[]}) => {
    return messages.length > 0 ? (
        <div className='absolute flex flex-row justify-center h-screen w-screen mt-5 z-10 bg-transparent'>
            <div className={twMerge('animate-fade-in w-64 h-20 bg-white shadow-lg shadow-blue-500 rounded-lg fixed border border-gray-300')}>
                {messages || "What's up bro"}
            </div>
        </div>
    ) : <></>;
}