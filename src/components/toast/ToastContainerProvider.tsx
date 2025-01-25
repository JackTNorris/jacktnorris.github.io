import React, { useContext, createContext, useState } from 'react';
import { ToastContainer } from 'components/toast/ToastContainer';



// Create the Toast Context
const ToastContext = createContext({ addToast: (message: string, type?: string, duration?: number) => {} });

// Custom hook to use the Toast Context
export const useToast = () => {
    return useContext(ToastContext);
};

export type ToastContainerProviderProps = {
    children: React.ReactNode[] | React.ReactNode | undefined
}
export const ToastContainerProvider = ({children}: ToastContainerProviderProps) => {
    const [messages, setMessages] = useState<{message: string, type: string, id: number}[]>([]);

    const addToast = (message: string, type = "info", duration = 3000) => {
        const id = Date.now();
        setMessages((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setMessages((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            <ToastContainer messages={messages} />
            {children}
        </ToastContext.Provider>
    );
}