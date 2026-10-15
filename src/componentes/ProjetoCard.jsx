
import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque
}) {
  return (
    <article className={`projeto-card ${destaque ? "projeto-destaque" : ""}`}>
      {destaque && (
        <strong className="destaque-label">
          Projeto em destaque
        </strong>
      )}

      <h3>{titulo}</h3>

      <p className="projeto-descricao">{descricao}</p>

      <p className="responsavel">
        Responsável: <strong>{responsavel}</strong>
      </p>

      <div className="projeto-status">
        <StatusBadge status={status} />
      </div>

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;
