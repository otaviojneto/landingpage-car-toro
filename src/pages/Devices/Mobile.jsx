import React, { useEffect } from 'react';
import $ from 'jquery';
import Base from '../../Base';
import { TabsMobile, Stories, Cta } from '../../components';
import DataServices from '../../mocks/DataServices';
import DataStories from '../../mocks/DataStories';
import DataVersions from '../../mocks/DataVersions';
import DataDetails from '../../mocks/DataDetails';
import { ServicesMobile, VersionsMobile } from '../../Sections';

const HomeMobile = () => {
  useEffect(() => {
    let __url = window.location.href;
    console.log(__url);
    let link = __url.indexOf('#/#versions') > -1;
    console.log(link);
    if (link) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#versions").offset().top
      }, 500);
      $('body').scrollTo(500);
    } else {
      console.log('ok');
    }
  }, []);

  return (
    <>
      <Base>
        <Stories stories={DataStories} />
        <ServicesMobile data={DataServices} />
        <VersionsMobile data={DataVersions} />
        <TabsMobile data={DataDetails} />
        <Cta />
      </Base>
    </>
  );
};

export default HomeMobile;
