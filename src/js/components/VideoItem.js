require('../../stylesheets/utils/layout.scss');
require('../../stylesheets/components/videoItem.scss');
import React, {PropTypes} from 'react'

const VideoItem = ({video}) => (
    <li className='video-item float-left'>
        <span>{video.id}</span>
        <a href="#">
            <img src={video.imgUrl} alt={video.alt}/>
        </a>
    </li>
);
VideoItem.PropTypes = {
    video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
})
};
export default VideoItem