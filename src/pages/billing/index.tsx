import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import Layout from "../../layout";
import Plan from "../../components/plan";
import FAQ from "../../components/faq";
import SuccessModal from "../../components/modal/sucess";

const Billing = () => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch, state } = useContext(UserContext);
  const { Users } = state;

  const updatePlan = (plan: string) => {
    setShowModal(true);
    dispatch({
      type: "updatePlan",
      plan: plan,
    });
  };

  const toggleModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <div className="">
        <div className="text-center my-10 py-4">
          <h2 className="text-3xl font-bold py-2">Upgrade your Plan</h2>
          <p className=" font-light">
            Join thousands of people using TimeLine to build their business{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Plan type="Free" amount={0} onClick={() => updatePlan("free")} />
          <Plan type="Basic" amount={8} onClick={() => updatePlan("basic")} />
          <Plan type="Pro" amount={12} onClick={() => updatePlan("pro")} />
        </div>

        <div className=" md:w-2/3 mx-auto my-16 flex flex-col gap-8 bg-white rounded-lg  p-6">
          <h2 className="text-3xl font-bold py-2 text-center">FAQ</h2>
          <FAQ />
        </div>
      </div>
      {showModal && <SuccessModal plan={Users.plan} onClick={toggleModal} />}
    </Layout>
  );
};

export default Billing;
