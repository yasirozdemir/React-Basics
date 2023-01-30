const ButtonComponent = ({ btnClass, btnLabel }) => (
  <button className={btnClass || "btn"}>{btnLabel}</button>
);

export default ButtonComponent;
