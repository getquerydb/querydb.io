import React from 'react'
import Layout from 'components/Layout'
import Link from 'components/Link'

const ContactThankYouPage = ({ location }) => (
  <Layout title="Contactar a Pentafile" location={location}>
    <section className="section">
      <div className="container text-center">
        <h1>Su mensaje está en camino...</h1>

        <p>Gracias por contactarnos, en breve uno de nuestros especialistas se contactará con usted</p>

        <Link
          data-track
          data-track-location="about-hero"
          track-event="Clicked How Pentafile Started"
          to="/"
          target="_blank"
          className="btn btn-secondary btn-lg m-t-25"
        >
          Regresar →
        </Link>
      </div>
    </section>
  </Layout>
)

export default ContactThankYouPage
