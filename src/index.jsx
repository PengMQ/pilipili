require('./stylesheets/base/reset.scss');

import React from 'react'
import {render} from 'react-dom'
import App from './js/components/App.jsx'

render(
    <App />,
    document.getElementById('root')
);