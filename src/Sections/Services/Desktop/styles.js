import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { Colors } from '../../../styles';
import { FiChevronDown } from 'react-icons/fi';
import { Carousel as CarouselContainer } from 'react-responsive-carousel';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Swiper = styled(SwiperReact)`
  width: 725px;
  right: 0;
  position: absolute;
    .swiper-button {
    &-next,
    &-prev {
      opacity: 0;
    }
  }
  .swiper-slide {
    img.img-slide {
      width: 320px;
      height: 420px;
      border-radius: 5px;
      box-shadow: none !important;
    }
    &:last-child {
      opacity: 0;
    }
    &-active {
      img {
        opacity: 1;
        border: 2px solid ${Colors.light};
      }
    }
  }
`;

export const ImgContainer = styled.div``;

export const Carousel = styled(CarouselContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1600px;

  .swiper-slider {
    height: 700px;
  }
  .control-dots {
    position: absolute;
    top: 90%;
  }

  .dot {
    background-color: #f5f5f5;
    opacity: 0.7 !important;
    box-shadow: none !important;
    width: 72px !important;
    border-radius: 0 !important;
    height: 4px !important;
  }
  .dot.selected {
    background-color: ${Colors.primary} !important;
    opacity: 1 !important;
  }
`;

export const Main = styled.div`
  height: 620px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url(${props => props.bg && props.bg});
  background-position: 80px 0%;
`;

export const TextContainer = styled.div`
  width: 300px;
  height: 230px;
  color: ${Colors.white};
  margin-left: 250px;
  margin-top: 170px;
  .connectMe {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
    top: -60px;

    h3 {
      font-family: 'FuturaPT Light', sans-serif;
      font-size: 12px;
      text-align: left;
    }
    img {
      width: 120px;
    }

    &:after {
      content: '';
      width: 50px;
      height: 2px;
      background-color: ${Colors.primary};
      position: relative;
      top: 10px;
    }
  }

  h1 {
    width: ${props => (props.titleWidth ? '200' : '390')}px;
    color: ${Colors.white};
    text-align: left;
    margin-bottom: 10px;
    font-size: 40px;
    line-height: 40px;
    font-family: 'FuturaPT Bold', sans-serif;
  }

  p {
    color: ${Colors.white};
    text-align: left;
    font-size: 18px;
    height: 100px;
  }

  h2 {
    text-align: left;
    position: relative;
    bottom: ${props => (props.highlighted ? '-78' : '-110')}px;
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 16px;

    span {
      font-family: 'FuturaPT Bold', sans-serif;
      font-size: 16px;
    }
  }
`;

export const ChevronDown = styled(FiChevronDown)`
  color: ${Colors.white};
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  z-index: 9999;
`;
export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 620px;
  z-index: 9999;
  span {
    color: ${Colors.white};
    font-family: 'FuturaPT Light', sans-serif;
    font-size: 1rem;
  }
`;
