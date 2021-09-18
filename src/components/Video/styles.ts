import styled from 'styled-components'

export const VideoWrapper = styled.div`
  /* border: 5px solid black; */
  /* width: 500px; */

  /* height: 500px; */
  /*  */
  /* position: absolute; */

  /* z-index: -1; */
  /* filter: brightness(50%); */
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

    filter: opacity(15%) blur(0.5px);
    opacity: 1;
  }
`
