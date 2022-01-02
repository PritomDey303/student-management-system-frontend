import React from "react";
import { Table } from "react-bootstrap";

const Resultinfo = (props) => {
  const resultInfo = props.resultInfo;
  return (
    <>
      <div className="card p-3 shadow-lg mt-4">
        <div className="card-header bg-transparent border-0">
          <h3 className="mb-2 text-success">
            <i className="far fa-clone pr-1 "></i>Academic Result
          </h3>
        </div>
        <div className="card-body pt-0">
          <Table striped borderless>
            <tbody>
              {resultInfo.map((result) => (
                <tr>
                  <th width="50%">{result.semester_name}</th>
                  <td width="2%">:</td>
                  <td>{result.gpa}</td>
                </tr>
              ))}
              {!resultInfo.length && (
                <h4 className="mt-5 py-5 text-danger text-center ">
                  Result not available
                </h4>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Resultinfo;
