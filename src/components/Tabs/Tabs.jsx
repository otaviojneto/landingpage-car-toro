import React from 'react';
import Aventure from '../../Sections/Aventure/Aventure';
import { DataLayer } from '../Track/DataLayer/DataLayer';

import { Button, Container } from './styles';

const Tabs = ({ data, isOpen, handleTab, open }) => {
  return (
    <Container open={open} id="tudo-sobre-a-toro">
      <h1>TEM TUDO QUE VOCÊ PRECISA PARA UMA NOVA AVENTURA</h1>
      <header>
        {data.map(item => (
          <Button
            isActive={item.brand === isOpen}
            onClick={() => {
              handleTab(item.brand);
              DataLayer.push(
                'TudoSobre_ClicouFeature',
                item.brand
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
              );
            }}
            key={item.brand}
          >
            <span>{item.brand}</span>
          </Button>
        ))}
      </header>

      {data.map(
        item =>
          item.brand === isOpen && (
            <Aventure
              key={item.data}
              data={item.data}
              open={open}
            />
          ),
      )}
    </Container>
  );
};

export default Tabs;
