import axios from "axios";
import { useState } from "react";
import Buttons from "./components/Buttons";
import Result from "./components/Result";

function App() {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState("");

  const fetchNewUser = async () => {
    const data = await axios.get("https://randomuser.me/api");
    return data.data.results[0].name;
  };

  const addNewUser = async () => {
    const name = await fetchNewUser();
    const money = Math.random() * 1000000;

    const newUser = { ...name, money };

    setUsers([...users, newUser]);
  };

  const doubleMoney = () => {
    setUsers(users.map((user) => ({ ...user, money: user.money * 2 })));
  };

  const showMillionaries = () => {
    setUsers(users.filter((user) => user.money > 1000000));
  };

  const sortByRichest = () => {
    const sortedItem = [...users.sort((a, b) => b.money - a.money)];
    setUsers(sortedItem);
  };

  const calculateTotal = () => {
    const total = users.reduce((acc, cur) => (acc += cur.money), 0);
    setTotal(total);
  };

  const formatMoney = (money) => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(money);
  };

  const reset = () => {
    setUsers([]);
    setTotal("");
  };

  return (
    <div className="App">
      <div className="container">
        <aside className="aside">
          <Buttons
            addNewUser={addNewUser}
            doubleMoney={doubleMoney}
            showMillionaries={showMillionaries}
            sortByRichest={sortByRichest}
            calculateTotal={calculateTotal}
            reset={reset}
          />
        </aside>
        <main>
          <Result users={users} total={total} formatMoney={formatMoney} />
        </main>
      </div>
    </div>
  );
}

export default App;
