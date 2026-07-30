import {
    LayoutDashboard,
    User,
    UtensilsCrossed,
    History,
    Sparkles,
    CalendarClock,
    Apple,
    X
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        name: "Profile",
        icon: User,
        path: "/profile"
    },
    {
        name: "Analyze Meal",
        icon: UtensilsCrossed,
        path: "/analyze-meal"
    },
    {
        name: "Meal History",
        icon: History,
        path: "/meal-history"
    },
    {
        name: "AI Meal Plan",
        icon: Sparkles,
        path: "/meal-plan"
    },
    {
        name: "Meal Plan History",
        icon: CalendarClock,
        path: "/meal-plan-history"
    },
    {
        name: "Food Nutrition",
        icon: Apple,
        path: "/food-nutrition"
    }
];

export default function Sidebar({
    sidebarOpen,
    setSidebarOpen
}) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setSidebarOpen(false)}
                className={`fixed top-16 left-0 right-0 bottom-0 bg-black/40 z-30 md:hidden transition-opacity ${sidebarOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            />

            <aside
                className={`fixed md:fixed top-16 left-0 z-40 w-72 h-[calc(100vh-4rem)] bg-white border-r border-slate-200 transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>

                <div className="p-5 space-y-2">
                    {menus.map((menu) => (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                                    ? "bg-emerald-600 text-white"
                                    : "text-slate-600 hover:bg-slate-100"
                                }`
                            }
                        >
                            <menu.icon size={20} />
                            {menu.name}
                        </NavLink>
                    ))}

                </div>

            </aside>
        </>
    );
}