import { useEffect, useState } from "react";
import { mealHistory } from "../api/mealCrud";
import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import MealHistoryTable from "../components/meal/MealHistoryTable";

export default function MealHistory() {

    const [loading, setLoading] = useState(true);

    const [history, setHistory] = useState([]);

    useEffect(() => {

        loadMeals();

    }, []);

    async function loadMeals() {

        try {

            const response = await mealHistory(3);

            if (response.data.success) {

                setHistory(response.data.data);

            }

        }
        catch (err) {

            console.log(err);

        }
        finally {

            setLoading(false);

        }

    }

    if (loading)
        return <Loader />;

    return (

        <div className="space-y-8">

            <PageHeader
                title="Meal History"
                subtitle="View all your previously analyzed meals."
            />

            {

                history.length === 0 ?

                    <EmptyState
                        title="No Meals Found"
                        description="Analyze your first meal to see it here."
                    />

                    :

                    <MealHistoryTable meals={history} />

            }

        </div>

    );

}