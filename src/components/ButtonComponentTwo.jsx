const ButtonComponentTwo = (properties) => {
  return (
    <button className={properties.btnClass || "btn"}>
      {/* if no class will inserted, it will directly be btn */}
      {properties.btnLabel}
    </button>
  );
};

export default ButtonComponentTwo;
