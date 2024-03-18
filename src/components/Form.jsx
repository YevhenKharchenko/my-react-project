import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";
import SelectCoffee from "./SelectCoffee";
import TermsCheckbox from "./TermsCheckbox";

const Form = ({
  handleLogin,
  lang,
  setLang,
  coffeeSize,
  handleSizeChange,
  hasAccepted,
  handleChange,
}) => {
  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <div>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </div>
      <SelectCoffee
        coffeeSize={coffeeSize}
        handleSizeChange={handleSizeChange}
      />
      <TermsCheckbox hasAccepted={hasAccepted} handleChange={handleChange} />
    </div>
  );
};

export default Form;
