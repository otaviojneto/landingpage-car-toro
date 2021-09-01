import styled from 'styled-components';

import { Swiper as SwiperReact } from 'swiper/react';
import { Colors } from '../../styles';

export const Swiper = styled(SwiperReact)`
  .swiper-slide {
    width: 100% !important;
  }
  .swiper-button {
    &-next,
    &-prev {
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      border: 1px solid ${Colors.primary};
      border-radius: 4px;
      color: ${Colors.white};
      margin-top: -70px;
      top: 464px;
      width: 44px;
      transition: all 0.3s ease-in;

      &::after {
        font-size: 18px;
      }
    }

    &-next {
      top: 94%;
      transition: all 0.3s ease-in;
      @media (min-width: 1366px) {
        left: ${props => (props.open ? 75 : 70)}%;
      }
      @media (min-width: 1440px) {
        left: ${props => (props.open ? 73 : 69)}%;
      }
      @media (min-width: 1536px) {
        left: ${props => (props.open ? 71 : 68)}%;
      }
      @media (min-width: 1600px) {
        left: ${props => (props.open ? 66 : 64)}%;
      }
    } 

    &-prev {
      left: ${props => (props.open ? 62.5 : 61)}%;
      top: 94%;
      transition: all 0.3s ease-in;
      @media (min-width: 1366px) {
        left: ${props => (props.open ? 69.5 : 66)}%;
      }
      @media (min-width: 1440px) {
        left: ${props => (props.open ? 68 : 65)}%;
      }
      @media (min-width: 1536px) {
        left: ${props => (props.open ? 66.5 : 63.9)}%;
      }
      @media (min-width: 1600px) {
        left: ${props => (props.open ? 62.5 : 70)}%;
      }
    }
  }

  .swiper-pagination {
    height: 44px;
    bottom: 80px;
    left: 225px;
    transition: all 0.3s ease-in;
    @media (min-width: 1366px) {
      left: ${props => (props.open === false ? 19 : 29.5)}%;
    }
    @media (min-width: 1440px) {
      left: ${props => (props.open === false ? 18 : 27.5)}%;
    }
    @media (min-width: 1536px) {
      left: ${props => (props.open === false ? 16.5 : 25)}%;
    }
    @media (min-width: 1600px) {
      left: ${props => (props.open === false ? 13 : 24)}%;
    }
    &-bullet {
      background-color: ${Colors.white};
      border-radius: 0 !important;
      bottom: 64px;
      height: 4px;
      margin: 0;
      opacity: 1;
      width: 32px;

      &-active {
        background-color: ${Colors.primary};
        height: 4px;
        opacity: 1;
        width: 32px;
      }

      & + span {
        margin-left: 8px;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: ${Colors.blue};
  color: ${Colors.white};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;

  & > div {
    /* width: 286px; */
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    h2 {
      color: ${Colors.white};
      font-family: 'FuturaPT Bold', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      padding-bottom: 5px;
      width: 254px;
    }

    h3 {
      font-family: 'FuturaPT Bold', sans-serif;
      width: 288px;
      height: 100px;
      font-size: 32px;
      line-height: 32px;
      color: ${Colors.primary};
    }

    p {
      font-family: 'FuturaPT Light', sans-serif;
      font-size: 14px;
      height: 105px;
      line-height: 15px;
      width: 288px;
      height: 80px;
      margin-top: -9px;
    }
    span {
      position: absolute;
      bottom: 25px;
      font-family: 'FuturaPT Bold', sans-serif;
    }
    span:last-child {
      font-family: 'FuturaPT Light', sans-serif;
      position: absolute;
      bottom: 5px;
    }
    strong {
      font-family: 'FuturaPT Bold', sans-serif;
    }
  }

  img,
  source {
    width: 614px;
    height: 390px;
    margin-left: 17px;
    border-radius: 15px;
  }
`;

export const ButtonAventure = styled.button`
  width: 180px;
  height: 40px;
  background-color: ${Colors.primary};
  border-radius: 4px;
  transition: 0.3s;

  a {
    color: ${Colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
    font-size: 14px;
    text-align: center;

    &:hover{
      color: ${Colors.primary};
    }
  }

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.primary};
  }
`;
