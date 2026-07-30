import Card from "../common/Card";

export default function NutritionSummary({
    items
}){

    if(items.length===0) return null;

    const calories=items.reduce((a,b)=>a+Number(b.calories||0),0);
    const protein=items.reduce((a,b)=>a+Number(b.protein||0),0);
    const carbs=items.reduce((a,b)=>a+Number(b.carbs||0),0);
    const fat=items.reduce((a,b)=>a+Number(b.fat||0),0);

    return(

        <div className="grid md:grid-cols-4 gap-5">

            <Card>

                <h3 className="text-slate-500">Calories</h3>

                <h2 className="text-3xl font-bold text-orange-500">
                    {calories}
                </h2>

            </Card>

            <Card>

                <h3 className="text-slate-500">Protein</h3>

                <h2 className="text-3xl font-bold text-blue-600">
                    {protein} g
                </h2>

            </Card>

            <Card>

                <h3 className="text-slate-500">Carbs</h3>

                <h2 className="text-3xl font-bold text-green-600">
                    {carbs} g
                </h2>

            </Card>

            <Card>

                <h3 className="text-slate-500">Fat</h3>

                <h2 className="text-3xl font-bold text-pink-600">
                    {fat} g
                </h2>

            </Card>

        </div>

    );

}