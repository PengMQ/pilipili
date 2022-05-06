import Header from "./Header";

require('../../stylesheets/components/allTypesVideos.scss');
import React, {PropTypes} from 'react'
import PerTypeVideos from './PerTypeVideos.jsx'

const AllTypesVideos = ({allTypesVideos}) => (
    <section className='all-videos'>
        <ul>
            {
                allTypesVideos.map(perTypeVideos =>
                    <PerTypeVideos key={perTypeVideos.videoType} perTypeVideos={perTypeVideos}/>)
            }

        </ul>

    </section>
);

AllTypesVideos.propTypes = {
    allTypesVideos: PropTypes.array.isRequired
};

const name = 'NANA'

export default AllTypesVideos;