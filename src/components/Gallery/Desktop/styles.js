import styled from 'styled-components';
import { Colors } from '../../../styles';
import * as images from '../../../assets';
import { Swiper as SwiperReact } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";

export const Swiper = styled(SwiperReact)`
  margin-bottom: -8px;
  .swiper-slide {
    width: 100% !important;
  }
  .swiper-button {
    &-next,
    &-prev {
      background-color: ${Colors.primary};
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 4px;
      color: ${Colors.white};
      content: '';
      height: 40px;
      width: 40px;
      position: absolute;
      z-index: 999999;

      &::after {
        font-size: 16px;
      }
    }

    &-next {
      background-image: url(${IoIosArrowForward});
    }

    &-prev {
      background-image: url(${IoIosArrowBack});
    }

    &-disabled {
      opacity: 0;
    }
  }
`;

export const Container = styled.div`
  background-color: ${Colors.warning};
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  max-height: 1000px;
  padding: 0px 94px 50px 94px;
  margin-bottom: 100px;

  img {
    width: 100%;
  }

  & > div {
    .flickity-viewport,
    .flickity-slider {
      img {
        height: 450px;
        width: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
      .flickity-slider {
      }
    }
  }
`;
export const Nav = styled.div`
  padding: 0;
  width: 334px;

  & > div {
    .flickity-viewport {
      cursor: default !important;
      height: 460px !important;

      & > div {
        height: 100% !important;
        transform: none !important;
        width: 96%;
        column-count: 2;
        column-fill: balance;
        -moz-column-fill: balance;
        -webkit-column-fill: balance;

        button {
          height: ${props => props.height}px;
          top: -5px;
          left: auto !important;
          margin-top: 6px;
          margin-left: 6px;
          position: relative !important;
          width: 158px;
          background-color: transparent;

          img {
            object-fit: cover;
          }

          &.is-selected,
          &.is-nav-selected {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const Image = styled.img`
  height: ${props => props.height}px !important;
`;

export const ContainerImages = styled.div`
  button {
    &::before {
      display: block;
      position: absolute;
      content: url(${images.Zoom});
      z-index: 9999;
      left: 95%;
      top: 8px;
    }
  }
`;

export const ButtonCloseModal = styled.button`
  background-image: url(${IoIosClose});
  width: 30px;
  height: 30px;
  background-color: ${Colors.primary};
  position: absolute;
  top: 0;
  left: 25%;
  z-index: 999999999;
  color: white;
  font-size: 1.5rem;
`;

export const ModalImage = styled.img`
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  left: 25vw;
`