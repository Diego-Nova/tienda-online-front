const HomePage = () => {
  return (
    <>
      <header className="row col">
        <h1>EMEN es parte de tu estilo</h1>
      </header>
      <div className="card mb-3" style={{maxWidth: 1200}}>
  <div className="row g-12">
    <div className="col-md-6">
      <img src="./imagenes/jumbotron2.jpeg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h1 className="card-title">EMEN estilo y diseño</h1>
        <p className="card-text">Los mejores diseños de Ropa y accesorios para Hombres, Mujeres y Niños.</p>
        <p className="card-text"><small className="text-body-secondary">La moda es parte de tu vida</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card-group">
  <div className="card">
    <img src="./imagenes/imagen1.jpeg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Estilo para Caballero</h5>
      <p className="card-text">No solo es ropa es tu estilo.</p>
    </div>
  </div>
  <div className="card">
    <img src="./imagenes/imagen2.jpeg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Estilo para Damas</h5>
      <p className="card-text">Que tu belleza nunca se apague.</p>
    </div>
  </div>
  <div className="card">
    <img src="./imagenes/imagen4.jpeg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Accesorios</h5>
      <p className="card-text">Complementa tu estilo.</p>
    </div>
  </div>
</div>


      <main className="row">
        <article className="col">
          <p>Contenido de la pagina de inicio</p>
        </article>
      </main>
    </>
  );
};

export default HomePage;

