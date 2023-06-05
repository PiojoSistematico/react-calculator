type DisplayProps = {
  formula: string;
  value: string;
  operation: string;
};

const Display: React.FunctionComponent<DisplayProps> = ({
  formula,
  value,
  operation,
}) => {
  return (
    <section className="display-section">
      <p className="operation">{operation}</p>
      <p className="formula">{formula}</p>
      <p className="value">{value}</p>
    </section>
  );
};

export default Display;
