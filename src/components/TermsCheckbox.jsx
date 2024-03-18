const TermsCheckbox = ({ hasAccepted, handleChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={() => {
            handleChange(!hasAccepted);
          }}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default TermsCheckbox;
