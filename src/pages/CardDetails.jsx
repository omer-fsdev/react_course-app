import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data";

const CardDetails = () => {
  const { name } = useParams();

  const navigate = useNavigate()

  return (
    <div>
      {data.map(
        (i) =>
          i.name === name && (
            <div className="container text-center mb-5 pb-5">
              <h3 className="border mb-5 mt-5 border-primary display-6 rounded text-secondary">
                {i.name}
              </h3>
              <img src={i.img} alt={i.name} width="30%" />
              <p className="fst-italic my-5 display-6 fs-2">{i.desc}</p>
              <div className="d-flex gap-5 justify-content-end mt-5">
                <button
                  type="submit"
                  className="btn border border-dark bg-light text-primary px-5 py-3 my-2 fw-bold shadow fs-5 fst-italic"
                  onClick={()=>navigate(-1)}
                >
                  BACK
                </button>
                <button
                  type="submit"
                  className="btn border border-dark bg-light text-primary px-5 py-3 my-2 fw-bold shadow fs-5 fst-italic"
                  onClick={()=>navigate("/")}
                >
                  HOME
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;
