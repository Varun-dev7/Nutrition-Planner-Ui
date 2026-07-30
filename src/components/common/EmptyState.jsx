import { Inbox } from "lucide-react";

export default function EmptyState({
    title = "No Data Found",
    description = "Nothing to display yet."
}) {
    return (
        <div className="bg-white rounded-2xl border p-12 text-center">

            <Inbox
                size={60}
                className="mx-auto text-slate-300"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-700">
                {title}
            </h3>

            <p className="mt-2 text-slate-500">
                {description}
            </p>

        </div>
    );
}