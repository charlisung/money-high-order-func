import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState('');
  const fetchNewUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    return data;
  };

  const addNewUser = async () => {
    const userInfo = await fetchNewUser();
    const name = userInfo.results[0].name;

    const money = Math.random() * 1000000;
    const newUserInfo = { ...name, money };

    const copy = [...users];
    copy.push(newUserInfo);
    setUsers(copy);
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
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(money);
  };

  return (
    <div className="App">
      <div className="container">
        <aside className="aside">
          <button className="btn" onClick={addNewUser}>
            Add new 👶
          </button>
          <button className="btn" onClick={doubleMoney}>
            Double 💲
          </button>
          <button className="btn" onClick={showMillionaries}>
            Millionaries 👑
          </button>
          <button className="btn" onClick={sortByRichest}>
            Sort by 🤑
          </button>
          <button className="btn" onClick={calculateTotal}>
            Total 💸
          </button>
        </aside>
        <main>
          <div className="main-title">
            <h3>Name</h3> <h3>Money</h3>
          </div>

          {users.map((user) => {
            return (
              <div className="main-content" key={user.money}>
                <h3>
                  {user.first} {user.last}
                </h3>{' '}
                <h3>{formatMoney(user.money)}</h3>
              </div>
            );
          })}

          {total && (
            <div
              className="main-content"
              style={{ borderTop: '1px solid #eee', marginTop: '10px' }}
            >
              <h3>Total</h3>
              <h3>{formatMoney(total)}</h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
