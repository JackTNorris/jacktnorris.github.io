import { twMerge } from "tailwind-merge";

// TODO: fix "any"
export const ToastContainer = ({messages}: {messages: {title: string, message: string, type: 'success' | 'error' | 'warning', id: number, visible: boolean}[]}) => {
    return messages.length > 0 ? (
        <div className='absolute top-0 left-0 flex flex-row mt-8 justify-center h-screen w-screen z-10 bg-transparent pointer-events-none'>
            <div className='transition-all flex flex-1 flex-col gap-3 items-center fixed'>
                {messages.map((message) => 
                    <div className={twMerge('p-3 transition-all animate-fade-in w-80 h-fit overflow-clip bg-white shadow-lg  rounded-lg border border-gray-300 shadow-blue-500', !message.visible && 'animate-fade-out', message.type === 'error' && 'shadow-red-400', message.type === 'warning' && 'shadow-yellow-200')}>
                        <h1 className="press-start text-sm underline text-center">{message.title}</h1>
                        <p>{message.message}</p>
                    </div>
                )}
            </div>

        </div>
    ) : <></>;
}