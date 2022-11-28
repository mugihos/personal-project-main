import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="ahoaho-2022-mugiho.au.auth0.com"
      clientId="CatEUTyJVSe4KQiquFhQXxgn1Div9XPQ"
      redirectUri={window.location.origin}
      audience="https://thisenthat/api"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
