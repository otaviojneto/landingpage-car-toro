import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { BoxSection, Swiper } from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, A11y]);

const Services = ({ data }) => {
  return (
    <Swiper
      allowTouchMove={false}
      navigation
      loop
      pagination={{ clickable: true }}>
      {data.map((item, index) => (
        <SwiperSlide>
          <BoxSection key={item.id} highlighted={index === 0}>
            <div>
              <img src={item.image} alt="image" />

              <div>
                <h1>
                  {item?.header?.map(title =>
                    title.bold ? (
                      <strong>{title.text}</strong>
                    ) : (
                      title.text
                    ),
                  )}
                </h1>

                <p>{item?.description}</p>
              </div>
            </div>
          </BoxSection>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Services;
