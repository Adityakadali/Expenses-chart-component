import logo from "../images/logo.svg";
const Balance = ({ total }) => {
  return (
    <div className="bg-red-500/80 px-4 py-6 rounded-xl text-white w-full flex justify-between items-center shadow-md">
      <div className="text-red-50">
        <h2>My Balance</h2>
        <p className="font-bold before:content-['$'] text-xl mt-1">
          {1000 - total}
        </p>
      </div>
      <div>
        <img src={logo} alt="brand logo" />
      </div>
    </div>
  );
};

export default Balance;
