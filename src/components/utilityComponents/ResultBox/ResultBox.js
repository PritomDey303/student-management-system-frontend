import React from "react";
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Resultbox = (props) => {
  const { register } = useForm();
  const { semester_id, semester_name } = props.semester;
  return (
    <Col md={4} sm={6} className="mb-4">
      <p className="text-success">Update {semester_name} result:</p>
      <Form.Group className="mb-3 m mx-auto" controlId="form">
        <Form.Control
          type="text"
          {...register(`${semester_id}`)}
          placeholder=""
        />
      </Form.Group>
    </Col>
  );
};

export default Resultbox;
