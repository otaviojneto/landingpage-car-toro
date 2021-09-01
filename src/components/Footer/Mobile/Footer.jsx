import React from 'react';
import DataFooter from '../../../mocks/DataFooter';
import DataSocialMedias from '../../../mocks/DataSocialMedias';
import { Colors } from '../../../styles';
import {
  Container,
  Medias,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
} from './styles';

import Button from '../../Button';
import { DataLayer } from '../../Track/DataLayer/DataLayer';

const Footer = () => {
  return (
    <>
      <Container>
        {DataFooter.map(item => (
          <Button
            datalayer={'Footer_ClicouCTA'}
            datalayername={item.ref}
            key={item.id}
            to={item.link}
            bg={Colors.primary}
            height={50}
            target={item.link !== '/#/agende' && '_blank'}
          >
            <p>{item.name} </p>
          </Button>
        ))}
        <Medias>
          {DataSocialMedias.map(item => {
            let icon;
            switch (item.name) {
              case 'facebook':
                icon = <Facebook />;
                break;
              case 'Twitter':
                icon = <Twitter />;
                break;

              case 'Instagram':
                icon = <Instagram />;
                break;

              case 'Youtube':
                icon = <Youtube />;
                break;

              default:
            }

            return (
              <a
                key={item.id}
                onClick={() =>
                  DataLayer.push(
                    'Footer_ClicouSocial',
                    item.name
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLocaleLowerCase(),
                  )
                }
                href={item.link}
                target="blank"
              >
                {icon}
              </a>
            );
          })}
        </Medias>
      </Container>
    </>
  );
};

export default Footer;
