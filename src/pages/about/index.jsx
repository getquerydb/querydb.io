import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SectionGetStarted from 'components/SectionGetStarted'

const ProductPage = ({ location }) => (
  <Layout
    title="QueryDB About"
    description="Connect to Relational Database and export in API REST"
    location={location}
  >
    <section className="section section--pt-lg">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-sm-offset-2">
            <h1>QueryDB</h1>
            <p className="highlight-p">
            Do you want to meet me?
            </p>
            <Link
              data-track
              data-track-location="about-hero"
              track-event="Clicked How QueryDB Started"
              to="https://reynaldoclaros.com"
              target="_blank"
              className="btn btn-secondary btn-lg m-t-25"
            >
              Go to website →
            </Link>
          </div>
        </div>
      </div>
    </section>

    <SectionGetStarted />
  </Layout>
)

export default ProductPage
