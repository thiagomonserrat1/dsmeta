import axios from "axios";
import { toast } from "react-toastify";
import close from "../../assets/img/close.png";

type Props = {
  children: any;
  isOpen: boolean;
  setIsOpen: any;
};

const handleClick = (id: any) => {
  axios(`https://konia-api.herokuapp.com/konia/${id}/`).then((response) => {
    toast.info("Usuário editado com sucesso");
    console.log(response.data);
  });
};

const Modal = ({ children, isOpen, setIsOpen }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-close" onClick={() => setIsOpen(false)}>
        <img className="close-img" src={close} />
      </div>
      {children}
    </div>
  );
};
export default Modal;
