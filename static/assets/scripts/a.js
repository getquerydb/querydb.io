!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="S3zY2vYFImkwn2X297OTV8T6DEjq9gd5";analytics.SNIPPET_VERSION="4.13.2";
  analytics.load("S3zY2vYFImkwn2X297OTV8T6DEjq9gd5");
  analytics.page();
  }}();

  const firebaseConfig = {
    apiKey: "AIzaSyCtxCn1eyWMLO1TbKY9C-JxQsvn54xkxpM",
    authDomain: "pentafile-website.firebaseapp.com",
    databaseURL: "https://pentafile-website.firebaseio.com",
    projectId: "pentafile-website",
    storageBucket: "pentafile-website.appspot.com",
    messagingSenderId: "295531598789",
    appId: "1:295531598789:web:2e81e15496179dff97b1ac"
  };
  

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

