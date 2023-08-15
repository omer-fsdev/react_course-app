import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const TeacherDetails = () => {
  const { id } = useParams();

  const [teacher, setTeacher] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data))
      .catch((err) => console.error(err));
  }, [id]);

  // console.log(teacher)

  return (
    <Container className="text-center mb-5">
      <h3 className="border mt-4 border-primary text-center display-6 rounded text-secondary">
        {teacher.name}
      </h3>
      <div className="mb-5 pb-5">
        <img
          src={`https://api.dicebear.com/6.x/personas/svg?seed=${teacher.name}&radius=50&mouth=bigSmile,smile,lips,smirk`}
          alt={teacher.name}
          width="40%"
        />

        <p className="fst-italic mt-5 mb-3 display-6 fs-2">
          {" "}
          <span className="fst-normal">📧 </span> {teacher.email}
        </p>
        <p className="fst-italic my-3 display-6 fs-2">
          {" "}
          <span className="fst-normal">📞 </span> {teacher.phone}
        </p>
        <p className="fst-italic mt-3 mb-5 display-6 fs-2">
          {" "}
          <span className="fst-normal">🌎 </span> {teacher.website}
        </p>
        <div className="d-flex gap-5 justify-content-end mt-5">
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
      </div>
    </Container>
  );
};

export default TeacherDetails;
