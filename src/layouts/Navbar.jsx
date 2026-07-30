import { Bell, Search } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

            <div className="flex items-center gap-3">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-3 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-80 rounded-xl border border-slate-200 pl-10 pr-4 py-2 outline-none focus:border-emerald-500"
                    />

                </div>

            </div>

            <div className="flex items-center gap-5">

                <Bell className="text-slate-600 cursor-pointer" />

                <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                    V
                </div>

            </div>

        </header>
    );
}