import React from 'react'
import { Helmet } from 'react-helmet'
import Header from 'components/Header'
import Footer from 'components/Footer'

import 'scss/main.scss'

export default ({ children, title, description, location }) => (
  <div className="wrapper">
    <Helmet>
      <title>{title || 'QueryDB'}</title>
      <meta name="google-site-verification" content="R031SqiWeB6RqvdPdgeoD2k1ekxsoG5rwOmgIfvk_Ag" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Easy Query Any Database and Export Any Format"
      />
      <link rel="icon" href="/assets/images/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/images/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/favicon-16x16.png"
      />

      <meta name="format-detection" content="telephone=no" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://querydb.io${location && location.pathname}`}
      />
      <meta
        property="og:image"
        content="https://querydb.io/assets/images/social-facebook-1200x630.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rclaros_pe" />
      <meta name="twitter:creator" content="@rclaros_pe" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://querydb.io/assets/images/social-twitter-600x314.png"
      />
      <script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-database.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LYEEXFLCQP"></script>
      <script src="/assets/scripts/a.js" />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
