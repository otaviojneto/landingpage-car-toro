import * as images from '../assets';

const DataHero = [
  {
    id: 1,
    image: images.hero.storiesIndex,
    highlighted: true,
    new: true,
    head: {
      title: 'Nova',
      Subtitle: 'Fiat toro',
    },
  },
  {
    id: 2,
    new: true,
    image: images.hero.storiesMotor,
    head: {
      title: 'Motor',
      
      brand: 'turbo',
      Subtitle: '270 flex',
      description:
        ' Muito mais força com um torque de 27,5 Kgfm @1750 rpm e ainda consome menos combustível.',
    },
  },
  {
    id: 3,
    image: images.hero.storiesDesign,
    head: {
      title: 'Novo',
      brand: 'Design',
      Subtitle: 'externo',
      description:
        'São tantas novidades de design que você nem vai saber por que se apaixonou.',
    },
  },
  {
    id: 4,
    image: images.hero.storiesInterior,
    head: {
      title: 'UM',
      brand: 'Interior',
      Subtitle: 'totalmente renovado',
      description:
        'Revestimento impecável, cluster full digital de 7” e 26 litros de porta-objetos para você guardar tudo.',
    },
  },
  {
    id: 5,
    image: images.hero.storiesMultimidia,
    head: {
      title: 'Nova',
      brand: 'Central',
      brand2: 'multimídia ',
      Subtitle: 'na vertical',
      description:
        'Você vai interagir na tela de 10.1” do seu carro do mesmo jeito que faz no celular: na vertical.',
    },
  },
  {
    id: 6,
    new: true,
    image: images.hero.storiesConnect,
    head: {
      title: 'NOVO',
      Subtitle: 'CONNECT ME',
      description:
        'Ligue o motor, ajuste o ar e veja notificações em tempo real mesmo longe do carro.',
    },
  },
];

export default DataHero;
