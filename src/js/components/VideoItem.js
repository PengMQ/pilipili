require('../../stylesheets/utils/layout.scss');
require('../../stylesheets/utils/icons.scss');
require('../../stylesheets/components/videoItem.scss');

import React, {PropTypes} from 'react'

const VideoItem = ({video}) => (
    <li className='video-item float-left'>
        <a href="#" className='video-item--imag-area'>
            <img src={video.imgUrl} alt={video.alt}/>
        </a>
        <sapn className='video-item--title inline-block full-width'>{video.title}</sapn>
        <span className='video-item--action clearfix inline-block full-width'>
            <span className='float-left inline-block half-width'>
                <span className='icon-gift vertical-middle'></span>
                <span className='video-item--id vertical-middle'>{video.id} he</span>
            </span>

            <span className='inline-block float-right'>
                <span className='icon-comment vertical-middle'></span>
                <span className='video-item--comment vertical-middle'>{video.alt}</span>
            </span>
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