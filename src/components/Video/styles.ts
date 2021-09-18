import styled from 'styled-components'

export const VideoWrapper = styled.div`
  video {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    width: 100%;
    max-width: 1400px;
    left: -100px;
    right: 0;
    top: -50px;
    text-align: center;
    z-index: -1;

    filter: opacity(20%) blur(0.5px);
    opacity: 1;
  }
`
