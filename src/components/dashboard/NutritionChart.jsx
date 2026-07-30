import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    Cell,
} from "recharts";

import Card from "../common/Card";

export default function NutritionChart({
    protein = 0,
    carbs = 0,
    fat = 0,
}) {

    const data = [
        {
            name: "Protein",
            value: protein,
        },
        {
            name: "Carbs",
            value: carbs,
        },
        {
            name: "Fat",
            value: fat,
        },
    ];

    const COLORS = [
        "#3B82F6", // Protein - Blue
        "#10B981", // Carbs - Green
        "#F59E0B", // Fat - Orange
    ];

    return (

        <Card title="Nutrition">

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <BarChart data={data}>

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />


                    <Bar
                        dataKey="value"
                        radius={[8, 8, 0, 0]}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))}
                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </Card>

    );
}