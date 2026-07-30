import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import PageHeader from "../components/common/PageHeader";

import MealPlanHistoryTable from "../components/mealplan/MealPlanHistoryTable";
import MealPlanDetailsModal from "../components/mealplan/MealPlanDetailsModal";

import { getMealPlanHistory } from "../api/mealPlanCrud";

export default function MealPlanHistory() {

    const [loading, setLoading] = useState(true);

    const [mealPlans, setMealPlans] = useState([]);

    const [selectedPlan, setSelectedPlan] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const profileId = Number(localStorage.getItem("profileId"));

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {
        try {

            const response = await getMealPlanHistory(3);

            if (response.data.success) {

                setMealPlans(response.data.data);

            }
            else {

                toast.error(response.data.message);

            }

        }
        catch {

            toast.error("Failed to load meal plan history.");

        }
        finally {

            setLoading(false);

        }

    };

    const handleView = (plan) => {

        setSelectedPlan(plan);

        setModalOpen(true);

    };

    if (loading)
        return <Loader />;

    return (

        <div className="space-y-8">

            <PageHeader
                title="Meal Plan History"
                subtitle="View all previously generated meal plans."
            />

            {
                mealPlans.length === 0
                    ? (
                        <EmptyState
                            title="No Meal Plans"
                            description="You haven't saved any meal plans yet."
                        />
                    )
                    : (
                        <MealPlanHistoryTable
                            mealPlans={mealPlans}
                            onView={handleView}
                        />
                    )
            }

            <MealPlanDetailsModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                mealPlan={selectedPlan}
            />

        </div>

    );

}