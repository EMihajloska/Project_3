import { CustomersData } from "../data/customers";

type Props = {
  title?: string;
};

export default function CustomersCards({ title }: Props) {
  return (
    <div className="container py-5">
      {title && (
        <div className="row d-flex justify-content-center text-center mb-5">
          <div className="col-md-2">
            <hr className="hr-orange" />
          </div>
          <div className="col-md-6">
            <h2 className="text-shadow">{title}</h2>
          </div>
          <div className="col-md-2">
            <hr className="hr-orange" />
          </div>
        </div>
      )}
      <div className="row">
        {CustomersData.map((el) => (
          <div className="col-md-4 d-flex align-content-stretch">
            <div className="card customCard">
              <img
                className="card-img-top image-sm mx-auto"
                src={el.img}
                alt=""
              />
              <div className="card-body text-center">
                <p>{el.desc}</p>
                <small className="card-title">{el.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
