import React from 'react'
import Header from './Header'
import AllTypeVideos from './AllTypeVideos'
import Footer from './Footer'

import {getAllVideos} from '../helpers/data'

const App = ()=>(
    <div>
        <Header />
        <AllTypeVideos allTypesVideos={getAllVideos()}/>
        <Footer />
    </div>
);

export default App
