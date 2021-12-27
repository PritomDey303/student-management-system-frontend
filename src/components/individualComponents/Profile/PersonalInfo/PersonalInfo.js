import React from "react";
import { Table } from "react-bootstrap";

const Personalinfo = (props) => {
  const {
    father_name,
    mother_name,
    present_address,
    permanent_address,
    date_of_birth,
    gender,
    religion,
    nid,
    email,
    phone,
    guardian_name,
    guardian_phone,
  } = props.personalInfo;
  return (
    <>
      <div className="card p-3 shadow-lg mb-4">
        <div className="card-header bg-transparent border-0">
          <h3 className="mb-2 text-success">
            <i className="far fa-clone pr-1 "></i>Personal Information
          </h3>
        </div>
        <div className="card-body pt-0">
          <Table striped borderless>
            <tbody>
              <tr>
                <th width="30%">Father's Name</th>
                <td width="2%">:</td>
                <td>{father_name}</td>
              </tr>
              <tr>
                <th width="30%">Mother's Name </th>
                <td width="2%">:</td>
                <td>{mother_name}</td>
              </tr>
              <tr>
                <th width="30%">Present Address</th>
                <td width="2%">:</td>
                <td>{present_address}</td>
              </tr>
              <tr>
                <th width="30%">Permanent Address</th>
                <td width="2%">:</td>
                <td>{permanent_address}</td>
              </tr>
              <tr>
                <th width="30%">Date of Birth</th>
                <td width="2%">:</td>
                <td>{date_of_birth}</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <th width="30%"> Religion</th>
                <td width="2%">:</td>
                <td>{religion}</td>
              </tr>
              <tr>
                <th width="30%">NID No.</th>
                <td width="2%">:</td>
                <td>{nid}</td>
              </tr>
              <tr>
                <th width="30%">Email</th>
                <td width="2%">:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <th width="30%">Phone No.</th>
                <td width="2%">:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <th width="30%">Local Gurdian's Name</th>
                <td width="2%">:</td>
                <td>{guardian_name}</td>
              </tr>
              <tr>
                <th width="30%">Local Gurdian's Phone No.</th>
                <td width="2%">:</td>
                <td>{guardian_phone}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Personalinfo;
