export default function PageHeader({
    title,
    subtitle,
    action,
}) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">

            <div>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-sm sm:text-base text-slate-500 mt-1 sm:mt-2">
                        {subtitle}
                    </p>
                )}

            </div>

            {action}

        </div>
    );
}