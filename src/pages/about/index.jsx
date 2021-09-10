import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionGetStarted from 'components/SectionGetStarted'

const ProductPage = ({ location }) => (
  <Layout
    title="Pentafile Contact"
    description="Pentafile es una forma inteligente para gestionar grandes cantidades de archivos en tu organización, configura y usa la mejor alternativa"
    location={location}
  >
    <section className="section section--pt-lg">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-sm-offset-2">
            <img
              src="/assets/images/elements/computing-on-a-chart.png"
              width="30%"
              className="visible-xs"
            />
            <h1>Pentafile es un servicio de SOTECH GROUP</h1>
            <p className="highlight-p">
              Estamos aquí para desentralizar tus archivos y facilitarte el acceso.
            </p>

            <Link
              data-track
              data-track-location="about-hero"
              track-event="Clicked How Pentafile Started"
              to="http://www.sotech.com.pe"
              target="_blank"
              className="btn btn-secondary btn-lg m-t-25"
            >
              Visitar la página →
            </Link>
          </div>
          <div className="col-sm-3 text-right hidden-xs">
            <img
              src="/assets/images/elements/computing-on-a-chart.png"
              width="250px"
            />
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default ProductPage
