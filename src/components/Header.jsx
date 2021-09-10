import React from 'react'
import Link from 'components/Link'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      dropdownOpen: false,
      menuOpen: false,
    }
  }

  toggleMenu() {
    const currentState = this.state.menuOpen
    this.setState({ menuOpen: !currentState })
  }

  toggleDropdown(e) {
    e.preventDefault()
    const currentState = this.state.dropdownOpen
    this.setState({ dropdownOpen: !currentState })
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-has-shadow">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={this.toggleMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/images/elements/logo.png"
                className="navbar-brand__img"
                alt=""
              />
            </Link>
          </div>

          <div
            id="navbar-collapse"
            className={`navbar-collapse ${
              this.state.menuOpen ? 'collapsed in' : 'collapse'
            }`}
            aria-expanded={this.state.menuOpen}
          >
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link data-track data-track-location="header" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link data-track data-track-location="header" to="https://docs.querydb.io/">
                  Docs
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  data-track
                  data-track-location="header"
                  track-event="Clicked Get Started"
                  to="https://querydb.netlify.app/"
                  className="btn btn-primary navbar-btn"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
