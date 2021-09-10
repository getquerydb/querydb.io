import React from 'react'
import Layout from 'components/Layout'
import { navigateTo } from 'gatsby-link'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    firebase
      .database()
      .ref('pentafile_contact/' + this.state.name.replace(/ /g, ''))
      .set({
        ...this.state,
      })
    navigateTo(form.getAttribute('action'))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/contact/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={e => this.handleSubmit(e)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="..."
            required
            onChange={e => this.handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="your@email.com"
            required
            onChange={e => this.handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            placeholder="Message..."
            rows="3"
            width="100%"
            required
            onChange={e => this.handleChange(e)}
          />
        </div>

        <p>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Send Message
          </button>
        </p>
      </form>
    )
  }
}

const ContactPage = ({ location }) => (
  <Layout
    title="Pentafile Contact, Envíanos tus consutlas para apoyarte"
    description="Estamos para apoyudarte a desentralizar y gestionar de forma eficiente tus archivos"
    location={location}
  >
    <section className="section">
      <div className="container">
        <h1 className="text-center">
          👋
          <br />
          Hi, QueryDB
        </h1>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="bs-callout bs-callout-primary">
              <p>
               Question about QueryDB?
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
