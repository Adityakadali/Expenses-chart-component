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
      <div className="bg-red-500/80 px-4 py-6 rounded-xl text-white w-full flex justify-between items-center shadow-md">
        <div className="text-red-50">
          <h2>My Balance</h2>
          <p className="font-bold before:content-['$'] text-xl mt-1">{total}</p>
        </div>
        <div>
          <img src={logo} alt="brand logo" />
        </div>
      </div>

      <div className="mt-4 bg-red-50 py-6 px-6 rounded-xl shadow-md">
        <h2 className="font-bold text-lg">Spending - Last 7 days</h2>
        <div className="flex gap-4">
          {data.map((day, index) => {
            return (
              <div className="h-72 flex flex-col justify-end items-center group">
                <div
                  className={`w-9 rounded relative ${
                    Weekday - 1 === index
                      ? "bg-cyan-600 group-hover:bg-cyan-400"
                      : "bg-red-400 group-hover:bg-red-300"
                  }`}
                  style={{ height: (Math.round(day.amount) / total) * 1000 }}
                >
                  <p className="bg-slate-900 text-white font-bold p-1 text-xs hidden rounded-lg group-hover:block absolute -top-8 w-14 -left-2 text-center">
                    $ {day.amount}
                  </p>
                </div>
                <p className="text-slate-600 text-sm">{day.day}</p>
              </div>
            );
          })}
        </div>
        <div className="h-[2px] bg-slate-500/25 w-full mt-4"></div>
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
