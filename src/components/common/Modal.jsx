import { X } from "lucide-react";

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    width = "max-w-2xl",
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative flex h-full items-center justify-center p-4">

                <div
                    className={`
                        w-full
                        ${width}
                        bg-white
                        rounded-2xl
                        shadow-xl
                        max-h-[90vh]
                        flex
                        flex-col
                    `}
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b">

                        <h2 className="text-lg font-semibold">
                            {title}
                        </h2>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-slate-100"
                        >
                            <X size={20} />
                        </button>

                    </div>

                    {/* Scrollable Body */}
                    <div className="p-6 overflow-y-auto flex-1">
                        {children}
                    </div>

                </div>

            </div>

        </div>
    );
}