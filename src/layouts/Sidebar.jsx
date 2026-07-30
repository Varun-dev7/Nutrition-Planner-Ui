import {
    LayoutDashboard,
    User,
    UtensilsCrossed,
    History,
    Sparkles,
    CalendarClock,
    Apple
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

export default function Sidebar() {
    return (
        <aside className="w-72 bg-white border-r border-slate-200">

            <div className="h-16 flex items-center px-6 border-b">

                <h1 className="text-xl font-bold text-emerald-600">
                    Nutrition AI
                </h1>

            </div>

            <div className="p-5 space-y-2">

                {menus.map(menu => (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-4 py-3 transition
                            ${
                                isActive
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
    );
}