import { Sparkles } from "lucide-react";
import Button from "../common/Button";

export default function MealInput({
    value,
    onChange,
    onAnalyze,
    loading
}) {
    return (
        <div className="bg-white rounded-2xl border shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-5">
                Describe Your Meal
            </h2>

            <textarea
                rows={7}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                placeholder="Example:
2 Chapatis
1 Bowl Dal
Grilled Chicken
1 Glass Milk"
                className="w-full rounded-xl border border-slate-300 p-4 resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
            />

            <div className="mt-5">

                <Button
                    loading={loading}
                    onClick={onAnalyze}
                    className="w-full"
                >
                    <Sparkles size={18}/>
                    Analyze Meal
                </Button>

            </div>

        </div>
    );
}