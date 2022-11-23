import axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { User } from "../../models/user";
import NotificationButton from "../NotificationButton";

import "./styles.css";
import PostForm from "../FormPost";

const UserCard = () => {
  const [use, setUse] = useState<User[]>([]);

  axios.get("https://konia-api.herokuapp.com/konia/").then((response) => {
    setUse(response.data);
  });

  return (
    <div className="konia-card">
      <div>
        <div className="create">
          <PostForm />
        </div>
        <table className="konia-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="sumir">Criado em</th>
              <th>Nome</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {use?.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="show992">{user.id}</td>
                  <td className="show576">
                    {new Date(user.create_at).toLocaleDateString()}
                  </td>
                  <td>{user.nome}</td>
                  <td>
                    <div className="konia-red-btn-container">
                      <NotificationButton userId={user.id} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCard;
