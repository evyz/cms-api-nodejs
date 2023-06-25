import { useEffect, useState } from "react";
import { apiList } from "../../http/system";
import "bootstrap/dist/css/bootstrap.min.css";
import TableSystem from "../system/Table";
import PopupSystem from "../system/Popup";
import CreateNewApi from "./createNewApi";

function ApiList() {
  const [list, setList] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  const apiFieldsTable = [
    { id: 1, name: "api" },
    { id: 2, name: "method" },
    { id: 3, name: "controller" },
  ];

  useEffect(() => {
    apiList({ page: 1, size: 40 }).then((data) => {
      setList(data);
    });
  }, []);

  const addHandler = () => {
    setIsOpened(true);
  };

  return (
    <div className='container-sm'>
      <PopupSystem
        onCloseHandler={(e) => setIsOpened(false)}
        isOpened={isOpened}
      >
        <CreateNewApi setIsOpened={setIsOpened} />
      </PopupSystem>
      <TableSystem
        addHandler={addHandler}
        data={list}
        fields={apiFieldsTable}
      />
    </div>
  );
}

export default ApiList;
