const CoffeeType = ({ value, handleSizeChange, coffeeSize, portion }) => {
  return (
    <label>
      <input
        type="radio"
        name="coffeeSize"
        value={value}
        checked={coffeeSize === value}
        onChange={() => handleSizeChange(value)}
      />
      {portion}
    </label>
  );
};

export default CoffeeType;
