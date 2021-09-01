import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 28px;


  ${props =>
    props.background &&
    css`
     background-image: url(${props.background});
     background-size: cover; 
     background-repeat: no-repeat;
     object-fit: cover;
     height: 100%;
    `};
`;


export const LogoConnect = styled.div`
    position:absolute;
    bottom: 80%;

`;


export const FiatTitle = styled.div`
  color: ${Colors.light};
  height: 127px;
  width: ${props => props.width && props.width}px;
  margin-top: ${props => (props.highlighted ? '0' : '20')}px;
  h1 {
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: ${props => (props.highlighted ? '39' : '26')}px;
    font-weight: 600;
    letter-spacing: 0.29px;
    line-height: 33px;
    position: relative;
    line-height: 2rem;

    h3 {
      position: relative;
      z-index: 1;
      font-family: 'FuturaPT Bold', sans-serif;
    }
  }

`;

export const FiatTitleStories = styled.div`
  display: flex;
  align-items: center;

  h3 {
  font-size: ${props => (props.highlighted ? '20' : '26')}px;
  margin-right: 5px;
  font-family: 'FuturaPT Bold', sans-serif;
  }
  h3:last-child {
    color: ${Colors.primary}
  }

  h2 {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  position: relative;
  width: 181px;

  img {
    display: flex;
    height: 30px;
    left: ${props => (props.highlighted ? '-37' : 0)}vw;
    position: absolute;
    top: ${props => (props.highlighted ? '-330' : '-370')}px;
    width: ${props => (props.highlighted ? '40' : '38')}px;
    z-index: 0;
  }

  p {
    color: ${Colors.light};
    display: flex;
    font-size: 15px;
    height: 92px;
    justify-content: flex-start;
    letter-spacing: 0.11px;
    line-height: 21px;
    position: relative;
    top: -370px;
    left: 60px;
    font-family: "FuturaPT Medium",sans-serif;
    width: 285px; 
    padding-right: 20px;

  }
`;

export const Next = styled.div`
    display: flex;
    position:absolute;
    right: 20px;
    top: ${props => (props.highlighted ? 10 : 90 )}%;

    span {
      font-family: 'FuturaPt Bold',sans-serif;
      color: ${Colors.white};
      white-space: nowrap;
    }

    img {
      margin-left: 10px;
    }

`;

export const ScrollToMore = styled.div`
  div {
    white-space: nowrap;
    transform: rotate(270deg);
    position: absolute;
    top: 50%;
    left: -45px;
    
    span { 
      font-family: 'FuturaPT Bold';
    }
  }

`;

export const FiatToro = styled.div`
  height: 630px;
`;


export const SetaToMore = styled.img`
  position: absolute;
  bottom: 25%;
  margin-left: -5px;

`;