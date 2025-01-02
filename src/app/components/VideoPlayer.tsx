import React, { useState } from "react";
import ReactPlayer from 'react-player';
import Image from "next/image";
import '../../styles/videoplayer.scss';

interface VideoPlayerProps{
    videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoId = videoUrl.split("v=")[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handlePlayClick = () => {
        setIsPlaying(true);
    }

    return(
        <div className="video-container">
            {!isPlaying ? (
                <div className="video-thumbnail" onClick={handlePlayClick}>
                    <Image 
                    src={thumbnailUrl} 
                    alt="Thumbnail do video" 
                    width={1280} 
                    height={720} 
                    className="thumbnail-image" 
                    priority={true}/>
                    <div className="play-button"></div>
                </div>
            ) : (
                <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="400px"
                    playing={isPlaying}
                    controls={true}
                />
            )}
        </div>
    );
};

export default VideoPlayer;