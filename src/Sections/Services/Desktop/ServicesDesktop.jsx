/* eslint-disable no-undef */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import $ from 'jquery';
import {
  Container,
  Main,
  TextContainer,
  ImgContainer,
  Carousel,
  ArrowBox,
  ChevronDown,
  Swiper,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as images from '../../../assets';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Navigation,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

const Services = ({ data, imagesSlide }) => {
  let aSwiperParent = document.querySelector('#swiperServices');

  function handlePassSlide(onClickHandler, dir) {
    if (dir === 'prev') {
      let aPrevChild = aSwiperParent.querySelector(
        '.swiper-button-prev',
      );

      aPrevChild.classList.add('aPrev');

      console.log(aPrevChild);

      onClickHandler();
      $('.aPrev').trigger('click');
    } else {
      let aNextChild = aSwiperParent.querySelector(
        '.swiper-button-next',
      );

      aNextChild.classList.add('aNext');

      console.log(aNextChild);

      onClickHandler();
      $('.aNext').trigger('click');
    }
  }

  const renderArrow = direction => onClickHandler => {
    const styles = {
      position: 'absolute',
      top: '67%',
      backgroundColor: '#18131F99',
      zIndex: 2,
      width: '50px',
      height: '50px',
      border: '1px solid #209051',
      borderRadius: '4px',
    };
    const stylesImage = {
      width: '20px',
      height: '20px',
    };
    if (direction === 'prev') {
      styles.left = '15.5%';
    } else {
      styles.left = '19.5%';
    }

    return (
      <button
        type="button"
        onClick={
          direction === 'prev'
            ? () => handlePassSlide(onClickHandler, 'prev')
            : () => handlePassSlide(onClickHandler, 'next')
        }
        style={styles}
      >
        <img
          src={
            direction === 'prev'
              ? `${images.prev1}`
              : `${images.next1}`
          }
          alt="arrows"
          style={stylesImage}
        />
      </button>
    );
  };

  return (
    <Container id="services">
      <ArrowBox>
        <span>Scroll para saber mais</span>
        <AnchorLink href="#services">
          <ChevronDown />
        </AnchorLink>
      </ArrowBox>
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={renderArrow('prev')}
        renderArrowNext={renderArrow('next')}
        infiniteLoop={false}
        swipeable={false}
        selectedItem={0}
        animationHandler="fade"
      >
        {data.map(item => (
          <Main bg={item.background} key={item.id}>
            <TextContainer
              titleWidth={item.header.small}
              highlighted={item.header.highlighted}
            >
              {item.id === 2 && (
                <div className="connectMe">
                  <h3>Conheça os serviços do</h3>
                  <img src={images.LogoConnect} alt="Connect" />
                </div>
              )}
              <h1>{item.header.text}</h1>
              <p>{item.description.desktop}</p>
              <h2>
                Proximo: <br /> <span>{item.next}</span>
              </h2>
            </TextContainer>
          </Main>
        ))}
      </Carousel>
      <Swiper
        id="swiperServices"
        navigation={{ clickable: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={2}
        loop={false}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
      >
        <ImgContainer>
          {imagesSlide.map(pics => {
            return (
              <SwiperSlide id="services-desktop-slide">
                <img
                  className="img-slide"
                  src={pics.imageSrc}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </ImgContainer>
      </Swiper>
    </Container>
  );
};
export default Services;
