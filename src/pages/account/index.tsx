import Layout from "../../layout";
import ProfileCard from "../../components/profile-card";
import InputField from "../../components/input-field";

const Account = () => {
    return (
        <Layout>
            <h2 className="font-bold text-2xl my-6">Account</h2>
            <div className="flex gap-4 items-start">
                <ProfileCard />
                <div className="bg-white rounded-xl w-full p-6">
                    <h3 className="text-xl font-medium my-6">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <InputField />
                        <InputField />
                        <InputField />
                        <InputField />
                        <InputField />
                        <InputField />
                    </div>
                    <div className="my-6 flex justify-end">
                        <button className="bg-slate-700 py-2 px-6 text-white rounded-xl">Save Details</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Account;