import logo from "./images/logo.svg";
const data = require("./data.json");

function App() {
  const total = data.reduce(
    (previous, present) => previous + present.amount,
    0
  );

  return (
    <>
      <div className="bg-red-500/80 px-4 py-6 rounded-xl text-white w-80 flex justify-between items-center">
        <div className="text-red-50">
          <h2>My Balance</h2>
          <p className="font-bold before:content-['$'] text-xl mt-1">{total}</p>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
