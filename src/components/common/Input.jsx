export default function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-2">

            {label && (
                <label className="text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-emerald-500
                    focus:border-emerald-500
                    ${className}
                `}
            />

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}

        </div>
    );
}