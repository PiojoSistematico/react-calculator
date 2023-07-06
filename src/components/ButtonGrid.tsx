import Button from "./Button";

type ButtonGridProps = {
  handleClick: (index: string) => void;
};

const ButtonGrid: React.FunctionComponent<ButtonGridProps> = ({
  handleClick,
}) => {
  return (
    <section className="grid">
      <Button handleClick={handleClick} value={"CE"}></Button>
      <Button handleClick={handleClick} value={"C"}></Button>
      <Button handleClick={handleClick} value={"<"}></Button>
      <Button handleClick={handleClick} value={"÷"}></Button>
      <Button handleClick={handleClick} value={"7"}></Button>
      <Button handleClick={handleClick} value={"8"}></Button>
      <Button handleClick={handleClick} value={"9"}></Button>
      <Button handleClick={handleClick} value={"x"}></Button>
      <Button handleClick={handleClick} value={"4"}></Button>
      <Button handleClick={handleClick} value={"5"}></Button>
      <Button handleClick={handleClick} value={"6"}></Button>
      <Button handleClick={handleClick} value={"-"}></Button>
      <Button handleClick={handleClick} value={"1"}></Button>
      <Button handleClick={handleClick} value={"2"}></Button>
      <Button handleClick={handleClick} value={"3"}></Button>
      <Button handleClick={handleClick} value={"+"}></Button>
      <Button handleClick={handleClick} value={"%"}></Button>
      <Button handleClick={handleClick} value={"0"}></Button>
      <Button handleClick={handleClick} value={"."}></Button>
      <Button handleClick={handleClick} value={"="}></Button>
    </section>
  );
};

export default ButtonGrid;
