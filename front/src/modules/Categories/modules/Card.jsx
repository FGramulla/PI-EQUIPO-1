import { CardWrapper } from "./card.style";

const Card = ({ category }) => {
  const { title, image, alt } = category;
  const logo = image;

  return (
    <CardWrapper>
      <div className="imgContainer">
        <img src={logo} alt={alt} />
      </div>
      <p>{title}</p>
    </CardWrapper>
  );
};

export default Card;