import logo from "./images/logo.svg";
const data = require("./data.json");

function App() {
  const date = new Date();
  let Weekday = date.getDay();
  if (Weekday === 0) Weekday = 7; // setting sunday offset according to data.json

  const total = data.reduce(
    (previous, present) => previous + present.amount,
    0
  );

  return (
    <div>
      <div className="bg-red-500/80 px-4 py-6 rounded-xl text-white w-full flex justify-between items-center">
        <div className="text-red-50">
          <h2>My Balance</h2>
          <p className="font-bold before:content-['$'] text-xl mt-1">{total}</p>
        </div>
        <div>
          <img src={logo} alt="brand logo" />
        </div>
      </div>

      <div className="mt-4 bg-red-50 py-6 px-6 rounded-xl">
        <h2 className="font-bold text-lg">Spending - Last 7 days</h2>
        <div className="flex items-baseline gap-2">
          {data.map((day, index) => {
            return (
              <div className="h-72 flex flex-col justify-end items-center">
                <div
                  className={`w-9 rounded ${
                    Weekday - 1 === index ? "bg-cyan-600" : "bg-red-400"
                  }`}
                  style={{ height: (Math.round(day.amount) / total) * 1000 }}
                ></div>
                <p className="text-slate-600 text-sm">{day.day}</p>
              </div>
            );
          })}
        </div>
        <div className="h-[2px] bg-red-100 w-full mt-4"></div>
        <div className="mt-4">
          <h2 className="text-slate-600/80 font-semibold">Total this month</h2>
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">$ 478.33</p>
            <div className="text-right">
              <p className="font-bold">+2.4%</p>
              <p className="text-slate-600/80 font-semibold">form last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
