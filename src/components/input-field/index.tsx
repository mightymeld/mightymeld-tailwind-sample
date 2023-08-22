/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  label: string;
  value: string;
  onChange: (e: any) => void;
}

const InputField = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        type="text"
        id="floating_label"
        className="block rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="floating_label"
        className="absolute text-sm text-slate-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}{" "}
      </label>
    </div>
  );
};

export default InputField;
