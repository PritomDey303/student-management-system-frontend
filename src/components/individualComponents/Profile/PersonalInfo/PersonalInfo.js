import React from "react";
import { Table } from "react-bootstrap";

const Personalinfo = () => {
  return (
    <>
      <div class="card shadow-sm mb-4">
        <div class="card-header bg-transparent border-0">
          <h3 class="mb-0">
            <i class="far fa-clone pr-1"></i>Personal Information
          </h3>
        </div>
        <div class="card-body pt-0">
          <Table striped borderless>
            <tbody>
              <tr>
                <th width="30%">Father's Name</th>
                <td width="2%">:</td>
                <td>Abu Sufian</td>
              </tr>
              <tr>
                <th width="30%">Mother's Name </th>
                <td width="2%">:</td>
                <td>Sokhina Begum</td>
              </tr>
              <tr>
                <th width="30%">Present Address</th>
                <td width="2%">:</td>
                <td>Chittagong University,Jobra,Chittagong</td>
              </tr>
              <tr>
                <th width="30%">Permanent Address</th>
                <td width="2%">:</td>
                <td>Chittagong University,Jobra,Chittagong</td>
              </tr>
              <tr>
                <th width="30%">Date of Birth</th>
                <td width="2%">:</td>
                <td>12/12/1997</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th width="30%"> Religion</th>
                <td width="2%">:</td>
                <td>Islam</td>
              </tr>
              <tr>
                <th width="30%">NID No.</th>
                <td width="2%">:</td>
                <td>1234567890643564</td>
              </tr>
              <tr>
                <th width="30%">Email</th>
                <td width="2%">:</td>
                <td>jack@gmail.com</td>
              </tr>
              <tr>
                <th width="30%">Phone No.</th>
                <td width="2%">:</td>
                <td>12/12/1997</td>
              </tr>
              <tr>
                <th width="30%">Local Gurdian's Name</th>
                <td width="2%">:</td>
                <td>Abu Bashar</td>
              </tr>
              <tr>
                <th width="30%">Local Gurdian's Phone No.</th>
                <td width="2%">:</td>
                <td>013355637553</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Personalinfo;
