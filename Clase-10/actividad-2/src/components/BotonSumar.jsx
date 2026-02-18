const BotonSumar = ({ setContador }) => {
  return (
    <button onClick={() => setContador(prev => prev + 1)}> + </button>
  );
}
export default BotonSumar;