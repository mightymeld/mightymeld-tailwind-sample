interface SuccessModalProps {
  plan: string;
  onClick: () => void;
}

const SuccessModal = ({ plan, onClick }: SuccessModalProps) => {
  return (
    <div className="w-full h-full z-40 fixed top-0 left-0 right-0 background-overlay ">
      <div className="flex justify-center my-24">
        <div className="bg-white w-full md:w-96 flex flex-col justify-center p-4 rounded-lg gap-4">
          <h1 className="text-center text-2xl font-semibold">
            Congratulations!
          </h1>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="mt-2 text-sm text-gray-800">
              You have updated your plan to{" "}
              <span className="capitalize font-medium">{plan} </span>
            </p>
            <button
              className="h-12 border px-6 font-semibold tracking-wider bg-slate-800 text-white rounded-lg"
              onClick={onClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
