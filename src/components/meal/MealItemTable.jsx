export default function MealItemTable({
    items,
    setItems
}) {

    function update(index,key,value){

        const data=[...items];

        data[index][key]=value;

        setItems(data);

    }

    if(items.length===0)
        return null;

    return(

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">Food</th>

                        <th className="p-4">Qty</th>

                        <th className="p-4">Calories</th>

                        <th className="p-4">Protein</th>

                        <th className="p-4">Carbs</th>

                        <th className="p-4">Fat</th>

                    </tr>

                </thead>

                <tbody>

                {

                    items.map((item,index)=>(

                        <tr key={index} className="border-t">

                            <td className="p-3">

                                <input

                                    value={item.foodName}

                                    onChange={(e)=>update(index,"foodName",e.target.value)}

                                    className="border rounded-lg px-3 py-2 w-full"

                                />

                            </td>

                            <td className="p-3">

                                <input

                                    value={item.quantity}

                                    onChange={(e)=>update(index,"quantity",e.target.value)}

                                    className="border rounded-lg px-3 py-2 w-full"

                                />

                            </td>

                            <td className="p-3">

                                <input

                                    value={item.calories}

                                    onChange={(e)=>update(index,"calories",e.target.value)}

                                    className="border rounded-lg px-3 py-2 w-full"

                                />

                            </td>

                            <td className="p-3">

                                <input

                                    value={item.protein}

                                    onChange={(e)=>update(index,"protein",e.target.value)}

                                    className="border rounded-lg px-3 py-2 w-full"

                                />

                            </td>

                            <td className="p-3">

                                <input

                                    value={item.carbs}

                                    onChange={(e)=>update(index,"carbs",e.target.value)}

                                    className="border rounded-lg px-3 py-2 w-full"

                                />

                            </td>

                            <td className="p-3">

                                <input

                                    value={item.fat}

                                    onChange={(e)=>update(index,"fat",e.target.value)}

                                    className="border rounded-lg px-3 py-2 w-full"

                                />

                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

    );

}