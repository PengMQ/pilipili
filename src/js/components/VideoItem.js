require('../../stylesheets/utils/layout.scss');
require('../../stylesheets/components/videoItem.scss');
import React, {PropTypes} from 'react'

const VideoItem = ({video}) => (
    <li className='video-item float-left'>
        <a href="#" className='video-item--imag-area'>
            <img src={video.imgUrl} alt={video.alt}/>
        </a>
        <sapn className='video-item--title inline-block full-width'>{video.title}</sapn>
        <span className='video-item--action clearfix inline-block full-width'>
            <span className='float-left inline-block'>
                <span className='icon-gift'></span>
                <span>{video.id}</span>
            </span>

            <span className='inline-block float-right'>{video.alt}</span>
        </span>
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