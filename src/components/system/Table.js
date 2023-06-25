import React from "react";
import Table from "react-bootstrap/esm/Table";
import Row from "./Row";

const TableSystem = ({ data, fields, addHandler, removeHandler }) => {
  return (
    <div>
      <Row>
        {addHandler && (
          <button
            className='btn btn-success'
            onClick={() => addHandler && addHandler()}
          >
            +
          </button>
        )}
        {removeHandler && (
          <button
            className='btn btn-danger'
            onClick={() => removeHandler && removeHandler()}
          >
            -
          </button>
        )}
      </Row>
      <Table striped bordered hover>
        <thead class='thead-dark'>
          <tr>
            {fields &&
              fields.map((field) => (
                <td class='bg-dark text-light' key={field?.id}>
                  {field?.name}
                </td>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr key={row?.id}>
                {Object.keys(row)
                  .filter((key) =>
                    fields.find((field) => field.name === key) ? true : false
                  )
                  .map((key) => (
                    <td key={row.id}>{row[key]}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableSystem;
