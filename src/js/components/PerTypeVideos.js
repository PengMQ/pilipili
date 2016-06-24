require('../../stylesheets/components/perTypeVideos.scss');
import React, {PropTypes} from 'react'
import VideosList from './VideosList'

const PerTypeVideos = ({perTypeVideos}) => (
    <li className='per-type-videos'>
        <p className='per-type-videos--title'>{perTypeVideos.videoType}</p>
        <VideosList videosList={perTypeVideos.videos}/>
        <div className='add-new-video'><button>+</button></div>
    </li>
);
PerTypeVideos.propTypes = {
    perTypeVideos: PropTypes.object.isRequired
};
export default PerTypeVideos