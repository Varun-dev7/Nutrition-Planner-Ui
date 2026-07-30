import { Loader2 } from "lucide-react";

export default function Button({
    children,
    onClick,
    type = "button",
    loading = false,
    className = "",
    variant = "primary",
}) {
    const variants = {
        primary:
            "bg-emerald-600 hover:bg-emerald-700 text-white",

        secondary:
            "bg-slate-200 hover:bg-slate-300 text-slate-800",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",

        outline:
            "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    };

    return (
        <button
            type={type}
            disabled={loading}
            onClick={onClick}
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-xl
                font-medium
                transition
                disabled:opacity-60
                disabled:cursor-not-allowed
                ${variants[variant]}
                ${className}
            `}
        >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {children}
        </button>
    );
}