import React from 'react';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import { 
  Container,  
  Youtube,
  Twitter,
  Instagram,
  Facebook, 
  Logo,
  SocialMedias,
} from './styles';
import * as images from '../../../assets';

const Medias = ({ socialMedias }) => {
  return (
    <Container>
    <SocialMedias>
      {socialMedias?.map(item => {
        let icon;
        switch (item.name) {
          case 'facebook':
            icon = <Facebook />;
            break;

          case 'instagram':
            icon = <Instagram />;
            break;

          case 'twitter':
            icon = <Twitter />;
            break;

          case 'youtube':
            icon = <Youtube />;
            break;

          default:
            break;
        }

        return (
          <a
            key={item.id}
            onClick={() =>
              DataLayer.push('Footer_ClicouSocial', item.name)
            }
            href={item.link}
            target="blank"
          >
            {icon}
          </a>
        );
      })}
    </SocialMedias>
    <Logo> <img src={images.Flag} alt="Logo"/></Logo>
    </Container>
  );
};

export default Medias;
