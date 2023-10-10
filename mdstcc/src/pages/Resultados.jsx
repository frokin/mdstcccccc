import "../styles/Resultados.module.css";

function Resultados() {
  return (
    <div className="resultados">
      <div className="pyrobot">PyroBot</div>
      <img
        className="iconepyrobot"
        alt=""
        src="/iconepyrobot@2x.png"
        // onClick={onIconePyroBotImageClick}
      />
      <div className="resultados-child" />
      <div className="processosresultados">Processos/Resultados</div>
    </div>
  )
}

export default Resultados;
