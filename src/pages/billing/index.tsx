import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import Layout from "../../layout";
import Plan from "../../components/plan";
import FAQ from "../../components/faq";

const Billing = () => {
  const { dispatch } = useContext(UserContext);

  const updatePlan = (plan: string) => {
    alert("plan updated");
    dispatch({
      type: "updatePlan",
      plan: plan,
    });
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

        <div className="flex gap-4">
          <Plan type="Free" amount={0} onClick={() => updatePlan("free")} />
          <Plan type="Basic" amount={8} onClick={() => updatePlan("basic")} />
          <Plan type="Pro" amount={12} onClick={() => updatePlan("pro")} />
        </div>

        <div className=" w-2/3 mx-auto my-16 flex flex-col gap-8 bg-white rounded-xl p-6">
          <h2 className="text-3xl font-bold py-2 text-center">FAQ</h2>
          <FAQ />
        </div>
      </div>
    </Layout>
  );
};

export default Billing;
