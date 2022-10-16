import '../styles/card.css';

function Card(props) {
  return (
    <div>
      <div className="card-img" style={{ backgroundImage: `url(${props.bgImg})` }} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
