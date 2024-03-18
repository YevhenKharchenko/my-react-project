import CoffeeType from "./CoffeeType";

const SelectCoffee = ({ coffeeSize, handleSizeChange }) => {
  return (
    <>
      <h1>Select coffee size</h1>
      <CoffeeType
        value="sm"
        handleSizeChange={handleSizeChange}
        coffeeSize={coffeeSize}
        portion="Small"
      />
      <CoffeeType
        value="md"
        handleSizeChange={handleSizeChange}
        coffeeSize={coffeeSize}
        portion="Medium"
      />
      <CoffeeType
        value="lg"
        handleSizeChange={handleSizeChange}
        coffeeSize={coffeeSize}
        portion="Large"
      />
    </>
  );
};

export default SelectCoffee;
