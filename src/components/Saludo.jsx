const Saludo = ({saludar}) => {
  return (
    <div className="animate__animated animate__tada animate__infinite">
      <h1 className="display-1 color-loop">Hello {saludar}!</h1>
    </div>
  );
};

export default Saludo;