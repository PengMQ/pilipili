require('../../stylesheets/components/videoItem.scss');
require('../../stylesheets/components/perTypeVideos.scss');
require('../../stylesheets/utils/colors.scss');
require('../../stylesheets/utils/spaces.scss');
import React, {PropTypes} from 'react'
import VideosList from './VideosList.jsx'

const PerTypeVideos = ({perTypeVideos}) => (
    <li className='per-type-videos'>

        <p className='per-type-videos--title'>
            <span className={`icon-${perTypeVideos.videoType} vertical-middle`}></span>
            <span className='per-type-videos--title--type inline-block vertical-middle'>{perTypeVideos.videoType}</span>
        </p>

        <VideosList videosList={perTypeVideos.videos}/>

        <div className='add-new-video'>
            <span className='icon-add vertical-middle'></span>
            <span className='mid-gray vertical-middle inline-block ml5'>Add more items</span>
        </div>
    </li>
);
PerTypeVideos.propTypes = {
    perTypeVideos: PropTypes.object.isRequired
};
export default PerTypeVideos