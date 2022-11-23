import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PostForm = () => {
  const url = "https://konia-api.herokuapp.com/konia/";
  const [data, setData] = useState({ nome: "" });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(url, {
        nome: data.nome,
      })
      .then((res) => {
        toast.success("Usuário criado com sucesso!");
        console.log(res.data);
      });
  };

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newdata = { ...data };
    newdata.nome = e.target.value;
    setData(newdata);
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handle(e)} value={data.nome} type="text" />
        <button>Criar</button>
      </form>
    </div>
  );
};
export default PostForm;
