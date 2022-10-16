import Card from './Card';
import bg1 from '../images/img1.jpg';
import bg2 from '../images/img2.jpg';
import bg3 from '../images/img3.jpg';

const CARDS = [
  {
    img: bg1,
    title: 'Revolutionary',
    description: 'We have created our own',
  },
  {
    img: bg2,
    title: 'Customize anything with',
    description: 'We have created our own',
  },
  {
    img: bg3,
    title: 'New features regularly',
    description: 'We have created our own',
  },
];

function Cards() {
  return (
    <div>
      Cards
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {CARDS.map((card) => {
          return (
            <Card
              key={card.title}
              bgImg={card.img}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
