/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import * as images from '../../../assets';
import {
  Button,
  Gallery as GalleryComponent,
} from '../../../components';
import { Colors } from '../../../styles';

import {
  BoxSection,
  Car,
  Content,
  Cta,
  Details,
  Infos,
  Model,
  Swiper,
  Text,
} from './styles';

SwiperCore.use([Navigation, A11y]);

const VersionsDesktop = ({ data, open }) => {
  const [scrollTop, setScrollTop] = useState();
  const [onBlock, setOnBlock] = useState(false);
  const [afterBlock, setAfterBlock] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const boxVersions =
      document.querySelector('#versions').offsetTop;

    const heightVersions =
      document.querySelector('#versions').offsetHeight;

    const checkAfterBlock =
      scrollTop > boxVersions + heightVersions - 500;

    const checkOnBlock =
      scrollTop >= boxVersions + 100 && !checkAfterBlock;

    setOnBlock(checkOnBlock);
    setAfterBlock(checkAfterBlock);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  

  // let swipeIndex = 1;

  return (
    <>
      <Swiper
        id="versions"
        pagination={{ clickable: true }}
        navigation={{ clickable: false, draggable: false }}
        simulateTouch={false}
        allowTouchMove={false}
        onBlock={onBlock}
        afterBlock={afterBlock}
        // prettier-ignore

        loop
      >
        {data.map(item => (
          <SwiperSlide key={item.id} id="conteudo-galeria">
            <Content
              width={item.presentation.width}
              bg={item.presentation.bg}
              key={item.id}
              open={open}
            >
              <h5>
                TODAS AS VERSÕES <span>DA FIAT TORO</span>
              </h5>
              <BoxSection>
                <div>
                  <Text>
                    <span
                      style={{ display: 'none' }}
                      className="titleSubtitle"
                    >
                      {`${item.version}`
                        .replace(/\s/g, '-')
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .toLocaleLowerCase()}
                    </span>
                    <img src={images.Flag} alt="flag"></img>
                    <h3>FIAT TORO</h3>

                    <h1>{item.presentation.title}</h1>
                    <h1>{item.presentation.subtitle}</h1>
                  </Text>

                  <Details>
                    {item.details.map(detail => (
                      <Infos>
                        <img src={detail.bg} alt={detail.text} />

                        <span>{detail.text}</span>
                      </Infos>
                    ))}
                  </Details>
                </div>

                <Car src={item.presentation.image} alt="image" />
              </BoxSection>
            </Content>
            <Model></Model>

            <GalleryComponent
              data={item.gallery}
              id={item.id}
              versionName={`${item.presentation.title}-${item.presentation.subtitle}`
                .normalize('NFD')
                .replace(/\s/g, '-')
                .replace(/[\u0300-\u036f]/g, '')
                .toLocaleLowerCase()}
            />

            <Cta>
              <Button
                datalayer={'TodasAsVersoes_ClicouCTA'}
                datalayername={'compre-a-sua'}
                datalayerversionname={item.version
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase()}
                height={50}
                width={220}
                bg={Colors.primary}
                to={'/#/agende'}
              >
                Compre a sua
              </Button>
              <Button
                height={50}
                width={220}
                // to="/#/agende"
                datalayer={'TodasAsVersoes_ClicouCTA'}
                datalayername={'monte-a-sua'}
                datalayerversionname={item.version
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase()}
                to={'https://toro.fiat.com.br/monte.html'}
              >
                Monte a sua
              </Button>
            </Cta>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default VersionsDesktop;
