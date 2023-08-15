import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(user)

  return (
    <div className="container">
      <div className="row pt-3 pb-5 justify-content-center gap-lg-5">
        <h3 className="text-center mt-3 border border-primary display-6 rounded text-secondary">TEACHERS</h3>
        {user.map(({ id, username, address, company, name }) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={id}
            >
              <img
                src={`https://api.dicebear.com/6.x/personas/svg?seed=${name}&radius=50&mouth=bigSmile,smile,lips,smirk`}
                alt="teacher"
                onClick={()=>navigate(`/teachers/${id}`)}
                style={{cursor:'pointer'}}
              />
              <div className="d-flex flex-column align-items-center">
                <p className="display-6 fst-italic">{username}</p>
                <p>🌎 {address.city}</p>
                <p>🏢 {company.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teacher;
