import React from "react";
import ReactPlayer from 'react-player';
import '../../styles/videoplayer.scss';

const VideoPlayer: React.FC = () => (
    <div className="video-container">
        <ReactPlayer
            url={"https://www.youtube.com/watch?v=N20q-391r48"}
            width="100%"
            height="400px"
            playing={false}
            controls={true}
        />
    </div>
)

export default VideoPlayer;