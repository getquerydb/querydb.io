import React from 'react';
import Layout from 'components/Layout';
import SectionGetStarted from 'components/SectionGetStarted';
const FaqPage = ({ location }) => (
  <Layout
    title="Pentafile Faq, preguntas y respuestas"
    description="Pentafile te describe cómo gestiona tus archivos"
    location={location}
  >

    <section className="section">
      <div className="container">
        <h2 className="text-center mb-lg h1">Preguntas frecuentes</h2>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="content-item">
              <h3 className="font-regular">Que es Pentafile?</h3>
              <p>
                Pentafile es una plataforma que ha sido diseñado para gestionar,
                resguardar y fascilitar el acceso a tus archivos. Nuestro
                objetivo es que gestiones de forma transparente y sencilla los
                archivos que hagan uso tus aplicaciones o tu proceso de negocio.
              </p>
            </div>
            <div className="content-item">
              <h3 className="font-regular">
                Como organiza Pentafile los archivos
              </h3>
              <p>
                Pentafile utiliza el concepto de repositorio para agrupar
                archivos comunes, cada archivo que se carga pertenece a una
                repositorio especifico, de esta forma se puede tener el control
                en todo el ciclo de vida del archivo.
              </p>
            </div>
            <div className="content-item">
              <h3 className="font-regular">
                Cuantas repositorios puedo crear para organización
              </h3>
              <p>
                Segun el plan elegido, se puede incrementar la cantidad de
                repositorios
              </p>
            </div>

            <div className="content-item">
              <h3 className="font-regular">
                Como es con la seguridad y la disponibilidad de los archivos
              </h3>
              <p>
                Todos los archivos cargados a Pentafile, se encuentran
                resguardados en Amazon, el mayor proveedor de servicios en la nube,
                para custodiar tus archivos Pentafile se apoya
                en CDN (Red de distribución de contenidos) para maximizar el
                ancho de banda al cliente.
              </p>
            </div>
            <div className="content-item">
              <h3 className="font-regular">
                Para recibir orientación y recomendación sobre Pentafile
              </h3>
              <p>
                Solo tienes que escribirnos y te asignamos un especialista para
                que se comunique contigo a la brevedad, recuerda que las
                consultas y recomendaciones se pueden realizar por Teléfono,
                Correo, Skype o reunión personalmente y éstas no tiene costo
                alguno mas que informarte como PentaFile puede ayudarte a
                organizar mejor tus archivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default FaqPage
