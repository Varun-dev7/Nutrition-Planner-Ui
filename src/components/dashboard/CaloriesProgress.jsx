import Card from "../common/Card";

export default function CaloriesProgress({
    consumed = 0,
    target = 2200,
}) {

    const percent = Math.min(
        (consumed / target) * 100,
        100
    );

    return (
        <Card title="Daily Calories">

            <div className="space-y-5">

                <div className="flex justify-between">

                    <span>Consumed</span>

                    <span className="font-bold">
                        {consumed} / {target}
                    </span>

                </div>

                <div className="w-full h-4 bg-slate-200 rounded-full">

                    <div
                        className="h-4 rounded-full bg-emerald-600 transition-all"
                        style={{
                            width: `${percent}%`
                        }}
                    />

                </div>

                <h2 className="text-center text-3xl font-bold">

                    {Math.round(percent)}%

                </h2>

            </div>

        </Card>
    );
}