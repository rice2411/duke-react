import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //1
  const [data, setData] = useState([]); //2
  const [isFetchData, setIsFetchData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //useState, useEffect, Khái niệm cơ bản về bất đồng bộ ( async await), axios, loading using state, list key, condition rendering
  const getData = async () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // Nếu lấy thành công thì làm
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        // Nếu lỗi thì làm
        console.log(error);
      })
      .then(function () {
        // Luôn luôn làm
        setIsLoading(false);
      });
  };
  const handleClick = () => {
    //thêmm mới
    setIsFetchData(true);
  };
  useEffect(() => {
    getData();
  }, []); //array ddi

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((val, idx) => (
                <tr key={idx}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
