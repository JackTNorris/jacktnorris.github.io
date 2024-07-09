
export type ModalProps = {
    visible: boolean
}
export const Modal = ({visible}: ModalProps) => {
    return (
        <div className="flex fixed inset-0 bg-black bg-opacity-50 z-50 justify-center items-center">
            <div className="bg-white w-1/2 h-1/2 m-auto p-8 rounded-md">
                <h1>Modal</h1>
                <p>Modal Content</p>
                <button>Close</button>
            </div>
        </div>
    );
}