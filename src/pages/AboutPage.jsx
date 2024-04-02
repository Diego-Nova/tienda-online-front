const AboutPage = () => {
  return (
    <>
      <header className="row col">
        <h1>Sobre Nosotros</h1>
      </header>
      <main className="row">
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Nuestra Historia
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Nuestro Inicio.</strong> Somos una empresa 100% mexicana fundada en 2020 por Hugo N, en una de las ciudades más grande del mundo.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Que hacemos?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Construimos moda.</strong> Hacemos realidad la moda para Hombres, Mujeres y nuestros niños.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Valores
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Compromiso.</strong> Estamos comprometidos con nuestros clientes y con el planeta, trabajamos con los mejores estandares de calidad y la mejor tecnología para no dañar nuestro ecosistema.
      </div>
    </div>
  </div>
</div>

      </main>
    </>
  );
};

export default AboutPage;
