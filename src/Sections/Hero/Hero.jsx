import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import $ from 'jquery';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';

import * as images from '../../assets';
import {
  Swiper,
  Image,
  Brand,
  Toro,
  New,
  Flag,
  FlagColors,
} from './styles';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Hero({ data, open }) {
  let swipeIndex = 1;

  const cardClick = cardClicked => {
    $(
      `#toro-2022 span[aria-label="Go to slide ${cardClicked}"]`,
    ).click(e => {
      let elementoSel = window
        .getComputedStyle(
          document.querySelector(
            `#toro-2022 span[aria-label="Go to slide ${cardClicked}"]`,
          ),
          '::after',
        )
        .content.replace(/[^\w\s!?]/g, '')
        .replace(/\s/g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase();
      DataLayer.push('MainPage_ClicouCard', `${elementoSel}`);
      swipeIndex = cardClicked;
    });
  };
  cardClick(2);
  cardClick(3);
  cardClick(4);
  cardClick(5);
  cardClick(6);

  $(`#toro-2022 div.swiper-button-next`).click(e => {
    if (swipeIndex === 6) {
      swipeIndex = 1;
    } else {
      swipeIndex = swipeIndex + 1;
    }
    DataLayer.push(
      'Conteudo_ClicouNextStories',
      'proximo',
      swipeIndex === 1
        ? 'nova-fiat-toro-2022'
        : window
            .getComputedStyle(
              document.querySelector(
                `#toro-2022 span[aria-label="Go to slide ${swipeIndex}"]`,
              ),
              '::after',
            )
            .content.replace(/[^\w\s!?]/g, '')
            .replace(/\s/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
    );
  });
  $(`#toro-2022 div.swiper-button-prev`).click(e => {
    if (swipeIndex === 1) {
      swipeIndex = 6;
    } else {
      swipeIndex = swipeIndex - 1;
    }
    DataLayer.push(
      'Conteudo_ClicouNextStories',
      'proximo',
      swipeIndex === 1
        ? 'nova-fiat-toro-2022'
        : window
            .getComputedStyle(
              document.querySelector(
                `#toro-2022 span[aria-label="Go to slide ${swipeIndex}"]`,
              ),
              '::after',
            )
            .content.replace(/[^\w\s!?]/g, '')
            .replace(/\s/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
    );
  });

  return (
    <>
      <Swiper
        id="toro-2022"
        allowTouchMove={false}
        navigation
        pagination={{ clickable: true }}
        // prettier-ignore
        onSlideChange={(parameter) => {
          let i = 1;
           // prettier-ignore
          // eslint-disable-next-line func-names
          $($(".swiper-container")[0]).find($('.swiper-wrapper')).find(".swiper-slide").each(function(index ) { 
            // console.log($(this))

          if ($(this).hasClass("swiper-slide-active")){
            const elementSwipper = $($(".swiper-container")[0]).find($('.swiper-wrapper'))
            let dest =  - (- parseInt($($($(".swiper-slide-active")[0]).find("img")[0]).css("width"))) * (parameter.activeIndex) 
         
             // prettier-ignore
            /* eslint-disable */
            elementSwipper.css('transform', 'translateX(' + - dest + 'px)'); // eslint-disable-line;
          }
          i++;
          });

        }}
      >
        <Brand src={images.LogoFiat2x} alt="logo" />
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image}
              alt="image"
              onClick={() => {
                DataLayer.push('Menu_ClicouAbrir');
              }}
            />
            <New highlighted={item?.highlighted}>
              <div>
                <Toro
                  highlighted={item?.highlighted}
                  new={item?.new}
                >
                  <FlagColors>
                    {item?.highlighted ? (
                      <img src={images.FlagColorida} alt="" />
                    ) : null}
                  </FlagColors>
                  <span>{item.head.title}</span>
                  <h2>{item.head.brand}</h2>
                  <h2>{item.head.brand2}</h2>
                  <h1>{item.head.Subtitle}</h1>
                </Toro>
              </div>
              <Flag>
                <img src={images.hero.flag} alt="" />
                <p>{item.head.description}</p>
              </Flag>
            </New>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
