import PageHeader from "../components/common/PageHeader";
import ProfileForm from "../components/profile/ProfileForm";


export default function Profile() {

    return (

        <div>

            <PageHeader
                title="Profile"
                subtitle="Manage your nutrition profile."
            />

            <ProfileForm />

        </div>

    );

}