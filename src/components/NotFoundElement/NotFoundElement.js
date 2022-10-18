import notFound from "../../images/notFound.jpg";
import css from "./NotFoundElement.module.css";

export default function NotFoundElement() {
  return (
    <div>
      <img className={css.NotFoundImg} src={notFound} alt="Not found"></img>
    </div>
  );
}
