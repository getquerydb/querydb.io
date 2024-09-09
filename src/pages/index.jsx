import React from 'react'
import Layout from 'components/Layout'
import SectionGetStarted from 'components/SectionGetStarted'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      controls: null,
    }

    this.addControls = this.addControls.bind(this)
    this.removeControls = this.removeControls.bind(this)
  }

  addControls() {
    this.setState({ controls: 'controls' })
  }

  removeControls() {
    this.setState({ controls: null })
  }

  render() {
    return (
      <Layout
        title="QueryDB"
        description="Connect to your database and export in REST API"
        location={this.props.location}
      >
        <section className="section section--hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="mb-xs text-center">Connect to your database and export in REST API</h1>
                <h3 className="font-light text-center">
                  Break down the barriers to accessing your data in the digital age.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="section ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xs-12 p-0 flex-content-center">
                <div className="browser-container hidden-xs text-center">
                  <img src="/assets/images/elements/querydb-logo.png" />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section section__more-features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xs-12 p-0 flex-content-center flex">
                <h2>Discover a new way data extraction and exporting experience</h2>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-xs-12 p-0 flex-content-center">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card-content">
                    <img
                      className="card-img-top"
                      src="/assets/images/elements/icon-db.png"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Connect Relational Databases</h5>
                      <p className="card-text">
                        You can connect to your relational databases securely, we are constantly adding new supports to databases
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card-content">
                    <img
                      className="card-img-top"
                      src="/assets/images/elements/icon-query.png"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Intelligent code editor
                      </h5>
                      <p className="card-text">
                        Design your query with a smart editor that highlights syntax and helps you create queries quickly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card-content">
                    <img
                      className="card-img-top"
                      src="/assets/images/elements/icon-parse.png"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Query parse expressión
                      </h5>
                      <p className="card-text">
                        Build dynamic queries with the help of expression language for a transparent and efficient filter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-12 col-xs-12 p-0 flex-content-center">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card-content">
                    <img
                      className="card-img-top"
                      src="/assets/images/elements/icon-plugin.png"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Plugable Datasources
                      </h5>
                      <p className="card-text">
                        Supports relational databases, you can extend to your own database.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card-content">
                    <img
                      className="card-img-top"
                      src="/assets/images/elements/icon-format.png"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Export Data
                      </h5>
                      <p className="card-text">
                        Export your data to JSON.
                      </p>
                    </div>
                  </div>
                </div>
                {/*
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="card-content">
                    <img
                      className="card-img-top"
                      src="/assets/images/elements/icon-spring.png"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                      Integrated to Spring Cloud
                      </h5>
                      <p className="card-text">
                      Native integration to spring cloud or you can also deploy it in your individual project.
                      </p>
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
            <br />
          </div>
        </section>
        <SectionGetStarted />
      </Layout>
    )
  }
}

export default Homepage
