import { Formik } from "formik";
import React from "react";
import styled from "styled-components";

import { useProject } from "../providers/DataProvider";

import Button from "../components/Button";
import Loading from "../components/Loading";
import TextInput from "../components/TextInput";

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const CreateProjectView = () => {
  const dispatch = useProject();

  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Name is required";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        dispatch({ type: "CREATE_PROJECT", data: values });
        console.log("sent");
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <TextInput
              errors={errors.name && touched.name && errors.name}
              label={"Name"}
              name={"name"}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            <TextInput
              errors={
                errors.description && touched.description && errors.description
              }
              label={"Description"}
              name={"description"}
              onBlur={handleBlur}
              onChange={handleChange}
              type={"description"}
              value={values.description}
            />
            <Button
              disabled={isSubmitting}
              isPrimary={true}
              style={{ maxWidth: "200px", width: "100%" }}
              type="submit"
            >
              {isSubmitting ? <Loading isAlternate={true} /> : "Sign In"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateProjectView;
