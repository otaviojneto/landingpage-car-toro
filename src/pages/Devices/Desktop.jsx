/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import {
  FooterDesktop,
  NavigationDesktop,
  Tabs,
} from '../../components';
import MenuActionsDesktop from '../../components/Navigation/Desktop/MenuActions';
import MenuListDesktop from '../../components/Navigation/Desktop/MenuList';
import DataAventures from '../../mocks/DataAventures';
import DataFooterDesktop from '../../mocks/DataFooterDesktop';
import DataHero from '../../mocks/DataHero';
import DataServicesDesktop, {
  imagesSlide,
} from '../../mocks/DataServicesDesktop';
import DataVersions from '../../Sections/Versions/Desktop/DataVersions';
import {
  Hero,
  ServicesDesktop,
  VersionsDesktop,
} from '../../Sections';
import { ContainerDesktop } from '../../Base/styles';
const HomeDesktop = () => {
  const [isOpenTabs, setIsOpenTabs] = useState();
  const [openMenu, setOpenMenu] = useState(true);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const onTabs = useCallback(value => {
    setIsOpenTabs(value);
  }, []);

  useEffect(() => {
    let __url = window.location.href;
    console.log(__url);
    let link = __url.indexOf('#/#versions') > -1;
    console.log(link);

    if (link) {
      $('html, body').animate(
        {
          scrollTop: $('#versions').offset().top,
        },
        500,
      );
    } else {
      console.log('ok');
    }
    setIsOpenTabs(DataAventures[0].brand);
  }, []);

  return (
    <>
      <NavigationDesktop
        menuActions={MenuActionsDesktop}
        menuList={MenuListDesktop}
        visible={openMenu}
        handleVisible={handleMenu}
        handleTab={onTabs}
        isOpen={isOpenTabs}
        socialMedias={DataFooterDesktop}
      />

      <ContainerDesktop open={openMenu}>
        <Hero
          data={DataHero}
          visible={openMenu}
          open={openMenu}
        />
        <ServicesDesktop
          data={DataServicesDesktop}
          imagesSlide={imagesSlide}
          open={openMenu}
        />

        <VersionsDesktop data={DataVersions} open={openMenu} />
        <Tabs
          id="tudo-sobre-a-toro"
          data={DataAventures}
          isOpen={isOpenTabs}
          handleTab={onTabs}
          open={openMenu}
        />
      </ContainerDesktop>
      <FooterDesktop socialMedias={DataFooterDesktop} />
    </>
  );
};

export default HomeDesktop;
