export const Button = ({ type = "button", children, ...otherProps }) => {
  return (
    <button type={type} {...otherProps}>
      {children}
    </button>
  );
};
