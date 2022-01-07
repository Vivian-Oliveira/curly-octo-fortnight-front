import styled from "styled-components";
import { starWarsYellow } from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;

  @keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
  }
  @-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
  }
  @-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
  }
  @-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
  }
  .stars, .twinkling, .clouds {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
  }
  .stars {
    background:#000 url("https://www.script-tutorials.com/demos/360/images/stars.png") repeat top center;
    background-size: cover;
    z-index:0;
  }
  .twinkling{
    background:transparent url("https://www.script-tutorials.com/demos/360/images/twinkling.png") repeat top center;
    z-index:1;
    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  z-index: 2;
`

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 40px;
  margin: 14px 14px 24px 24px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${starWarsYellow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
`;
