import React, {PropTypes} from 'react'
import VideoItem from './VideoItem'

const VideosList = ({videosList}) => (
    <ul>
        {videosList.map(video =>
            <VideoItem key={video.id} video={video}/>)}
    </ul>
);
VideosList.propTypes = {
    videosList: PropTypes.array.isRequired
};
export default VideosList