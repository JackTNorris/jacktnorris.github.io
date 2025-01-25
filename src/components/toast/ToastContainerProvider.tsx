// TODO: add types
import React, { useContext, createContext, useState } from 'react';
import { ToastContainer } from 'components/toast/ToastContainer';



// Create the Toast Context
const ToastContext = createContext({ addToast: (title: string, message: string, type?: 'success' | 'error' | 'warning', duration?: number) => {} });

// Custom hook to use the Toast Context
export const useToast = () => {
    return useContext(ToastContext);
};

export type ToastContainerProviderProps = {
    children: React.ReactNode[] | React.ReactNode
}
export const ToastContainerProvider = ({children}: ToastContainerProviderProps) => {
    const [messages, setMessages] = useState<{title: string, message: string, type: 'success' | 'error' | 'warning', id: number, visible: boolean}[]>([]);

    const addToast = (title: string, message: string, type: 'success' | 'error' | 'warning' = 'success', duration = 3000) => {
        console.log("added toast: ", message)
        const id = Date.now();
        console.log(messages)
        setMessages((prev) => [...prev, {title, id, message, type: type, visible: true }]);
        setTimeout(() => {
            setMessages((prev) => prev.map((toast) => {return {...toast, visible: toast.visible && toast.id !== id}}));
        }, duration);
        setTimeout(() => {
            setMessages((prev) => prev.filter((toast) => toast.id !== id));
        }, duration * 10);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
                <ToastContainer messages={messages} />
                {children}
        </ToastContext.Provider>
    );
}