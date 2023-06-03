type DisplayProps = {
  formula: string;
  value: string;
};

const Display: React.FunctionComponent<DisplayProps> = ({ formula, value }) => {
  return (
    <section className="display">
      <p className="formula">{formula}</p>
      <p className="value">{value}</p>
    </section>
  );
};

export default Display;
