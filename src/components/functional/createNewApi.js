import React, { useState } from "react";
import { createApi } from "../../http/system";

const CreateNewApi = ({ setIsOpened }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [method, setMethod] = useState("get");
  const [path, setPath] = useState("/");

  const createHandler = () => {
    createApi({ path: path, controller: name, callback: code, method })
      .then((data) => {
        console.log(data);
      })
      .finally(() => {
        setIsOpened(false);
      });
  };

  return (
    <div className='container d-flex flex-column p-3'>
      <input
        placeholder='Название метода'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder='Название пути до апи'
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <input
        placeholder='Метод запроса'
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      />
      <textarea
        placeholder='Код'
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={createHandler} className='btn btn-success'>
        Создать
      </button>
    </div>
  );
};

export default CreateNewApi;
