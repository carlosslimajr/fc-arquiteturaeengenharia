import React from 'react'
import { VideoWrapper } from './styles'

const Video = () => {
  return (
    <VideoWrapper>
      <video
        // style={{ position: 'absolute', width: '100%' }}
        height="700px"
        autoPlay
        // loop
        muted
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </VideoWrapper>
  )
}

export default Video
