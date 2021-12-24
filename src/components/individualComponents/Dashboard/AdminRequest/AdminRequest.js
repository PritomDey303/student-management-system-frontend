import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

const Adminrequest = () => {
  const { addToast } = useToasts();
  const [Admins, setAdmins] = useState([]);
  const [Reload, setReload] = useState(1);
  useEffect(() => {
    Reload &&
      axios({
        method: "get",
        url: "http://localhost:5000/admin/adminpendingrequest",
      }).then(function (res) {
        console.log(res.data);
        setAdmins(res.data);
      });
  }, [Reload]);

  //approve admin function
  const approveAdmin = (auth_id) => {
    axios
      .put(`http://localhost:5000/admin/approveadmin/${auth_id}`)
      .then((res) => {
        if (res.status === 200) {
          addToast(res.data.msg, {
            appearance: "success",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 5000,
            transitionDuration: 400,
          });
          setReload((prev) => prev + 1);
        } else {
          addToast(res.data.msg, {
            appearance: "error",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 5000,
            transitionDuration: 400,
          });
        }
      });
  };

  //decline admin reauest
  const declineAdmin = (auth_id) => {
    axios
      .delete(`http://localhost:5000/admin/declineadmin/${auth_id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          addToast(res.data.msg, {
            appearance: "success",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 5000,
            transitionDuration: 400,
          });
          setReload((prev) => prev + 1);
        } else {
          addToast(res.data.msg, {
            appearance: "error",
            placement: "top-right",
            autoDismiss: true,
            autoDismissTimeout: 5000,
            transitionDuration: 400,
          });
        }
      });
  };
  return (
    <div>
      <Row className="my-4">
        <Col>
          <h2 className="text-success">Verify Admin Signup Requests</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped hover size="lg" responsive>
            <thead className="bg-success text-light border-none">
              <tr className="text-center">
                <th>Auth Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Aprrove</th>
                <th>Decline</th>
              </tr>
            </thead>
            <tbody>
              {Admins.map((admin) => (
                <tr key={admin.authentication_id} className="text-center">
                  <td>{admin.authentication_id}</td>
                  <td>{admin.admin_name}</td>
                  <td>{admin.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => approveAdmin(admin.authentication_id)}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => declineAdmin(admin.authentication_id)}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Adminrequest;
