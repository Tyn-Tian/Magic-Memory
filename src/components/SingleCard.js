import './SingleCard.css'

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card front" className="front card-img" />
        <img src="/img/cover.png" alt="card back" className="back card-img" />
      </div>
    </div>
  );
};

export default SingleCard;
