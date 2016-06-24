import React, {PropTypes} from 'react'

const VideoItem = ({video}) => (
    <li>
        <span>{video.id}</span>
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