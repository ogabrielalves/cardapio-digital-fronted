import style from "./CardFood.module.scss";

interface CardFoodProps {
  price: number;
  title: string;
  image: string;
}

function CardFood({ price, image, title }: CardFoodProps) {
  return (
    <div className={style.container}>
      <img width={"100px"} src={image} alt="" />
      <div className={style.text}>
        <h2>{title}</h2>
        <p>
          <b>Valor: </b>
          R$ {price}
        </p>
      </div>
    </div>
  );
}

export default CardFood;
