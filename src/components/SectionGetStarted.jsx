import React from 'react'
import Link from 'components/Link'

const GetStarted = () => (
  <section className="section section--small get-started">
    <div className="container">
      <div className="row get-started--signup text-center">
        <div className="col-sm-12 p-0">
          <h3 className="mb-xs">
            Connect your data now.
          </h3>
          <Link
            data-track
            data-track-location="get-started"
            data-track-event="Clicked Get Started"
            to="https://demo.querydb.io/"
            className="btn btn-lg btn-primary"
          >
            Started
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default GetStarted
