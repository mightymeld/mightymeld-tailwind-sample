/* eslint-disable @typescript-eslint/no-explicit-any */

interface PlanProps {
  type: string;
  amount: number;
  onClick: (e: any) => void;
}

const Plan = ({ type, amount, onClick }: PlanProps) => {
  const planList = ["Create Contact", "Chat Support", "Email Alert"];
  return (
    <div className="bg-white rounded-lg  md:w-96 p-8 flex flex-col justify-betweenh-96">
      <div className="">
        <h4 className="font-semibold text-3xl">{type} </h4>
        <div className="text-4xl font-bold mt-6">
          {" "}
          ${amount} <span className="font-light text-sm">/ monthly</span>{" "}
        </div>
        <div className="font-light py-2 text-sm">To familiarize yourself with our tools.</div>
        <ul className="flex flex-col gap-2 my-16">
          {planList.map((item) => (
            <li key={item} className="flex text-sm items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onClick} className="bg-slate-700 w-full text-white rounded-lg  p-3 hover:opacity-90">
        Start Plan
      </button>
    </div>
  );
};

export default Plan;
