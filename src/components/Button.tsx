type ButtonProps = {
  handleClick: (index: string) => void;
  value: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  handleClick,
  value,
}) => {
  return (
    <button className={"btn"} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
