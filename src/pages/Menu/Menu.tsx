import { useState } from "react";

import { useFoodData } from "../../hooks/useFoodData";
import CardFood from "../../components/CardFood/CardFood";
import { Modal } from "../../components/Modal";
import Button from "@mui/material/Button";

import style from "./Menu.module.scss";

function Menu() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      {data ? (
        <>
          <h1>Menu</h1>
          <div className={style.cardGrid}>
            {data.map((food) => (
              <CardFood
                key={food.id}
                image={food.image}
                price={food.price}
                title={food.title}
              />
            ))}
          </div>
          <Button variant="contained" onClick={handleOpenModal}>
            Novo
          </Button>
        </>
      ) : (
        <>
          <h1>Não foi possível obter os dados do Back-End</h1>
          <h3>Verifique se o Back-End está funcionando!</h3>
        </>
      )}
      {isModalOpen && <Modal closeModal={handleOpenModal} />}
    </div>
  );
}

export default Menu;
