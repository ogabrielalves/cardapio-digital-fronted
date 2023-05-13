import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFoodDataDelete } from "../../hooks/useFoodDataMutate";

import style from "./CardFood.module.scss";

interface CardFoodProps {
  id: number;
  price: number;
  title: string;
  image: string;
}

function CardFood({ price, image, title, id }: CardFoodProps) {
  const { mutate } = useFoodDataDelete();

  const deleteItem = () => {
    mutate(id);
  };

  return (
    <div className={style.container}>
      <img width={"100px"} src={image} alt="" />
      <div className={style.text}>
        <h2>{title}</h2>
        <p>
          <b>Valor: </b>
          R$ {price}.00
        </p>
      </div>
      <div className={style.deleteIcon}>
        <IconButton aria-label="delete" color="primary" onClick={deleteItem}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default CardFood;
