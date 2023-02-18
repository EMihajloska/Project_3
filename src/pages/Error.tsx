import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="text-center d-flex align-items-center justify-content-center h-320">
      <h1 className="text-orange">
        Грешка 404. Врати се назад на <Link to="/" className="text-orange"> почетна</Link>
      </h1>
    </div>
  );
}
