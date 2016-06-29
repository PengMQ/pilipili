import React from 'react'
import Header from './Header.jsx'
import AllTypeVideos from './AllTypesVideos.jsx'
import Footer from './Footer.jsx'

import {getAllVideos} from '../helpers/data'

const App = ()=>(
    <div>
        <Header />
        <AllTypeVideos allTypesVideos={getAllVideos()}/>
        <Footer />
    </div>
);

export default App
