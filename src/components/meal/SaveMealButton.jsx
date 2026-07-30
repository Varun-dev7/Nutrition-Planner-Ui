import Button from "../common/Button";

export default function SaveMealButton({
    onSave,
    loading
}){

    return(

        <div className="flex justify-end">

            <Button
                loading={loading}
                onClick={onSave}
            >
                Save Meal
            </Button>

        </div>

    );

}