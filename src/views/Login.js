import { Formik } from "formik";
import { navigate } from "@reach/router";
import React from "react";
import styled from "styled-components";

import { device } from "../utils/device";

import Button from "../components/Button";
import Loading from "../components/Loading";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: #eeeeee solid 1px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 30px;
  width: 100%;

  @media ${device.tablet} {
    margin: 0;
    max-width: 600px;
    padding: 40px 45px;
  }
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
`;

const LoginView = () => {
  return (
    <Wrapper>
      <Container>
        <Logo style={{ margin: "0 0 50px" }} />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            console.log(values);
            let errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              navigate("/home");
              console.log(values);
            }, 2000);
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
                  errors={errors.email && touched.email && errors.email}
                  label={"Email"}
                  name={"email"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <TextInput
                  errors={
                    errors.password && touched.password && errors.password
                  }
                  label={"Password"}
                  name={"password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type={"password"}
                  value={values.password}
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
      </Container>
    </Wrapper>
  );
};

export default LoginView;
