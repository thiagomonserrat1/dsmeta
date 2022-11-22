import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { User } from "../../models/user";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

const SalesCard = () => {
  const max = new Date();
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [use, setUse] = useState<User[]>([]);

  useEffect(() => {
    axios.get("https://konia-api.herokuapp.com/konia/").then((response) => {
      setUse(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Criados de:</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <h2 className="dsmeta-sales-title">Ate:</h2>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th>Criado em</th>
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
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton />
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

export default SalesCard;
