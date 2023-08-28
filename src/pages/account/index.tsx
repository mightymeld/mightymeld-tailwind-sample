import { useContext, useState } from "react";
import { UserContext, UserType } from "../../context/user.context";
import Layout from "../../layout";
import InputField from "../../components/input-field";

const Account = () => {
  const { state, dispatch } = useContext(UserContext);
  const { Users } = state;

  const [inputValues, setInputValues] = useState<UserType>({
    firstname: Users.firstname,
    lastname: Users.lastname,
    email: Users.email,
    phone: Users.phone,
    plan: Users.plan,
    country: Users.country,
    state: Users.state,
  });

  const handleInputChange = (fieldName: keyof UserType, value: string) => {
    setInputValues((prevInputValues: UserType) => ({
      ...prevInputValues,
      [fieldName]: value,
    }));
  };

  const updateAccount = () => {
    dispatch({
      type: "update",
      payload: inputValues,
    });
  };

  return (
    <Layout>
      <h2 className="font-bold text-2xl my-6">Account</h2>
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        <div className="bg-white rounded-lg  w-full p-6">
          <h3 className="text-xl font-medium my-6">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField
              label="First Name"
              value={inputValues.firstname}
              onChange={(e) => handleInputChange("firstname", e.target.value)}
            />
            <InputField
              label="Last name"
              value={inputValues.lastname}
              onChange={(e) => handleInputChange("lastname", e.target.value)}
            />
            <InputField
              label="Email"
              value={inputValues.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <InputField
              label="Phone Number"
              value={inputValues.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            <InputField
              label="Country"
              value={inputValues.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            />
            <InputField
              label="State"
              value={inputValues.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
            />
          </div>
          <div className="my-6 flex justify-end">
            <button
              onClick={updateAccount}
              className="bg-slate-700 py-2 px-6 text-white rounded-lg "
            >
              Save Details
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
