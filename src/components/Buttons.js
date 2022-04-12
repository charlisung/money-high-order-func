const Buttons = ({
  addNewUser,
  doubleMoney,
  showMillionaries,
  sortByRichest,
  calculateTotal,
  reset,
}) => {
  return (
    <>
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
      <button className="btn" onClick={reset}>
        Reset 🗑️
      </button>
    </>
  );
};

export default Buttons;
