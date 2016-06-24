import React, {PropTypes} from 'react'
import PerTypeVideos from './PerTypeVideos'

const AllTypeVideos = ({allTypesVideos})=>(
    <section className='all-videos'>
        <ul>
            {
                allTypesVideos.map(perTypeVideos =>
                    <PerTypeVideos key={perTypeVideos.videoType} perTypeVideos={perTypeVideos}/>)
            }

        </ul>

    </section>
);

AllTypeVideos.propTypes =  {
    allTypesVideos: PropTypes.array.isRequired
};

export default AllTypeVideos;