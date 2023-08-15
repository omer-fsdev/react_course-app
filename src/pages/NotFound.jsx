import React from "react";
import notFound from "../img/notFound.jpeg";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container className="text-center">
      <img src={notFound} alt="404 not found" width='70%' />
      <div className="d-flex gap-5 justify-content-center mt-4">
        <button
          type="submit"
          className="btn border border-dark bg-light text-primary px-5 py-3 my-2 fw-bold shadow fs-5 fst-italic"
          onClick={() => navigate(-1)}
        >
          BACK
        </button>
        <button
          type="submit"
          className="btn border border-dark bg-light text-primary px-5 py-3 my-2 fw-bold shadow fs-5 fst-italic"
          onClick={() => navigate("/")}
        >
          HOME
        </button>
      </div>
    </Container>
  );
};

export default NotFound;
