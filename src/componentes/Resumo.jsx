
function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo-grid">
      <article className="resumo-card">
        <span>Total de projetos</span>
        <strong>{total}</strong>
      </article>

      <article className="resumo-card">
        <span>Projetos concluídos</span>
        <strong>{concluidos}</strong>
      </article>

      <article className="resumo-card">
        <span>Em desenvolvimento</span>
        <strong>{emDesenvolvimento}</strong>
      </article>
    </div>
  );
}

export default Resumo;
