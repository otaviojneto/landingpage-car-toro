import React, {
  useCallback,
  useEffect,
  useState,
  createRef,
} from 'react';
import Stories from 'react-insta-stories';
import {
  Container,
  Content,
  Description,
  FiatTitle,
  FiatTitleStories,
  FiatToro,
  LogoConnect,
  ScrollToMore,
  SetaToMore,
  Next,
} from './styles';
import { Colors } from '../../styles';
import * as images from '../../assets';
const StoriesComponent = ({ stories, defaultInterval }) => {
  const containerRef = createRef();

  useEffect(() => {
    const { current: container } = containerRef;
    const { children: containerChildren } = container || {};
    const [storiesContainer] = containerChildren || [];
    const { children: storiesChildren } = storiesContainer || {};
    const [storiesHeader] = storiesChildren || [];
    const { children: storiesHeaderChildren } =
      storiesHeader || {};

    // Condicional para trocar a cor do header dos stories
    if (storiesHeaderChildren && storiesHeaderChildren.length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of storiesHeaderChildren) {
        const { children: itemChildren } = item || {};
        item.style.height = '5px';
        item.style.marginRight = '4px';
        item.style.marginTop = '7px';
        item.style.borderRadius = 0;

        const [itemComponent] = itemChildren || [];
        itemComponent.style.background = Colors.primary;
        itemComponent.style.borderRadius = 0;
      }
    }
  }, [containerRef]);

  const [screens, setScreens] = useState([]);
  const [current, setCurrent] = useState(0);

  const renderScreen = useCallback(() => {
    stories.map(item => {
      const screen = {
        content: () => (
          <Container id="toro-2022" background={item?.image}>
            <FiatTitle
              highlighted={item?.highlighted}
              width={item?.head?.width}
            >
              <ScrollToMore>
                <div>
                  <span>Scroll para ver mais</span>
                </div>
                <SetaToMore src={images.Seta} alt="icon" />
              </ScrollToMore>
              <FiatTitleStories>
                <h2>{item?.head?.titlemain}</h2>
                <h3>{item?.head?.titlenew} </h3>
                <LogoConnect>
                  {item.id === 6 ? (
                    <img
                      src={images.LogoConnect}
                      alt="logo-connect"
                    ></img>
                  ) : null}
                </LogoConnect>
                <h3>{item?.head?.brand}</h3>
              </FiatTitleStories>
              <h1>{item?.head?.title}</h1>
            </FiatTitle>
            <Content highlighted={item?.highlighted}>
              <Description
                highlighted={item?.highlighted}
                width={item?.description?.width}
              >
                {item.head?.next !== 'Design Externo' ? (
                  <>
                    <img
                      src={images.FlagGreen}
                      alt="Fiat Green"
                    />
                    <p>{item?.description?.text}</p>
                  </>
                ) : null}
              </Description>
              <Next highlighted={item?.highlighted}>
                <span>{item?.action?.text}</span>
                {item?.id === 1 ? (
                  <img src={images.HandIcon} alt="handle" />
                ) : (
                  <>
                    {item?.id !== 6 && (
                      <img
                        src={images.setaright1}
                        alt="handle"
                      />
                    )}
                  </>
                )}
              </Next>
            </Content>
          </Container>
        ),
      };

      return setScreens(rest => [...rest, screen]);
    });
  }, [stories]);

  useEffect(() => {
    renderScreen();
  }, [renderScreen]);

  if (screens.length < 1) {
    return <h1>Carregando...</h1>;
  }

  return (
    <FiatToro id="toro-2022" ref={containerRef}>
      <Stories
        stories={screens}
        defaultInterval={defaultInterval ?? 1500000000}
        width="100vw"
        height="630px"
        onStoryStart={(s, st) => {
          const direction = () => {
            if (s > current) {
              return 'proximo';
            }

            setCurrent(s);
            return 'anterior';
          };

          return null;
        }}
        loop
      />
    </FiatToro>
  );
};

export default StoriesComponent;
