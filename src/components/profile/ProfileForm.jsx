import { useEffect, useState } from "react";
import { getProfile, saveProfile } from "../../api/profileCrud";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

export default function ProfileForm() {

    const [loading, setLoading] = useState(false);

    const [profile, setProfile] = useState({
        id: 0,
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        calorieTarget: "",
        dietaryPreference: "",
        allergies: "",
        foodsToAvoid: ""
    });

    useEffect(() => {
        loadProfile();
    }, []);

    async function loadProfile() {

        try {

            const response = await getProfile(3);

            if (response.data.success) {

                setProfile(response.data.data);

            }

        } catch (err) {

            console.log(err);

        }

    }

    async function handleSubmit(e) {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await saveProfile(profile);

            alert(response.data.message);

        } catch (err) {

            console.log(err);

            alert("Unable to save profile");

        }

        setLoading(false);

    }

    function handleChange(e) {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    }

    return (

        <Card title="Personal Information">

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <div className="grid md:grid-cols-2 gap-6">

                    <Input
                        label="Name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                    />

                    <Input
                        label="Age"
                        name="age"
                        value={profile.age}
                        onChange={handleChange}
                    />

                    <Input
                        label="Gender"
                        name="gender"
                        value={profile.gender}
                        onChange={handleChange}
                    />

                    <Input
                        label="Height (cm)"
                        name="height"
                        value={profile.height}
                        onChange={handleChange}
                    />

                    <Input
                        label="Weight (kg)"
                        name="weight"
                        value={profile.weight}
                        onChange={handleChange}
                    />

                    <Input
                        label="Calorie Target"
                        name="calorieTarget"
                        value={profile.calorieTarget}
                        onChange={handleChange}
                    />

                </div>

                <div className="space-y-5">

                    <div>

                        <label className="text-sm font-medium">

                            Dietary Preference

                        </label>

                        <select
                            name="dietaryPreference"
                            value={profile.dietaryPreference}
                            onChange={handleChange}
                            className="w-full mt-2 rounded-xl border p-3"
                        >

                            <option>Vegetarian</option>

                            <option>Vegan</option>

                            <option>Non Vegetarian</option>

                        </select>

                    </div>

                    <div>

                        <label className="text-sm font-medium">

                            Allergies

                        </label>

                        <textarea
                            rows={3}
                            name="allergies"
                            value={profile.allergies}
                            onChange={handleChange}
                            className="w-full mt-2 rounded-xl border p-3"
                        />

                    </div>

                    <div>

                        <label className="text-sm font-medium">

                            Foods To Avoid

                        </label>

                        <textarea
                            rows={3}
                            name="foodsToAvoid"
                            value={profile.foodsToAvoid}
                            onChange={handleChange}
                            className="w-full mt-2 rounded-xl border p-3"
                        />

                    </div>

                </div>

                <Button
                    type="submit"
                    loading={loading}
                >

                    Save Profile

                </Button>

            </form>

        </Card>

    );

}