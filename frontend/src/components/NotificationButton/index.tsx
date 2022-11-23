import "./styles.css";
import { toast } from "react-toastify";
import buttonRed from "../../assets/img/test.png";
import axios from "axios";
import Modal from "../Modal/index";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

type Props = {
  userId: string;
};
const element: any = document.querySelector("#put-request .date-updated");
let nomeee = "";
const article = { nome: "" };
article.nome = nomeee;

const NotificationButton = ({ userId }: Props) => {
  const [modalIOpen, setModalIOpen] = useState(false);

  const put = (id: string) => {
    setModalIOpen(false);
    axios
      .put(`https://konia-api.herokuapp.com/konia/${id}/`, article)
      .then((response) => {
        toast.success("Nome editado com sucesso!");
        element.innerHTML = response.data.updatedAt;
      });
  };

  useEffect(() => {
    <Link to="" />;
  });

  return (
    <>
      <Modal isOpen={modalIOpen} setIsOpen={setModalIOpen}>
        <div className="test">
          <input
            type="text"
            onChange={(e) => (article.nome = e.target.value)}
          ></input>
          <button className="salve" onClick={() => put(userId)}>
            Salvar
          </button>
        </div>
      </Modal>
      <div
        className="konia-red-btn"
        onClick={() => {
          setModalIOpen(true);
        }}
      >
        <img src={buttonRed} />
      </div>
    </>
  );
};

export default NotificationButton;
