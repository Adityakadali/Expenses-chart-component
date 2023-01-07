import Balance from "./components/Balance";
import Spending from "./components/Spending";

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
    <main>
      <Balance total={total} />
      <Spending Weekday={Weekday} data={data} total={total} />
    </main>
  );
}

export default App;
