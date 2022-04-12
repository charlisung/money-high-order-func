const Result = ({ users, total, formatMoney }) => {
  return (
    <>
      <div className="main-title">
        <h3>Name</h3> <h3>Money</h3>
      </div>

      {users.map((user) => {
        return (
          <div className="main-content" key={user.money}>
            <h3>
              {user.first} {user.last}
            </h3>{" "}
            <h3>{formatMoney(user.money)}</h3>
          </div>
        );
      })}

      {total && (
        <div
          className="main-content"
          style={{ borderTop: "1px solid #eee", marginTop: "10px" }}
        >
          <h3>Total</h3>
          <h3>{formatMoney(total)}</h3>
        </div>
      )}
    </>
  );
};

export default Result;
