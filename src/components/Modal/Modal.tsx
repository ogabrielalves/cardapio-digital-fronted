import { useEffect, useState } from "react";
import { Input } from "../Input";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FoodData } from "../../interface/FoodData";
import Button from "@mui/material/Button";

import style from "./Modal.module.scss";

interface ModalProps {
  closeModal(): void;
}

function Modal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
      id: 0,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [closeModal, isSuccess]);

  return (
    <div className={style.modalOverflow}>
      <div className={style.modalBody}>
        <div className={style.boxTop}>
          <h2>Cadastre um alimento novo!</h2>
          <IconButton aria-label="delete" size="large" onClick={closeModal}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
        <form className={style.inputContainer}>
          <Input label="Titulo do item" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="URL da Imagem" value={image} updateValue={setImage} />
        </form>
        <Button variant="contained" onClick={submit}>
          Cadastrar item
        </Button>
      </div>
    </div>
  );
}

export default Modal;
