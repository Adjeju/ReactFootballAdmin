import React from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import loginFormSchema from "../validators/loginFormSchema";
import { useLoginUserMutation } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../slices/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [login, { isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      id: "",
      secret: "",
    },
  });

  const onFormSubmit = async (data) => {
    try {
      const payload = await login(data).unwrap();
      dispatch(loginAdmin(payload.accessToken));
      navigate("/admin/matches");
    } catch (error) {
      reset();
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <hr />
      <form className="row" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-group">
          <Form.Label htmlFor="inputUsername">Username</Form.Label>
          <Controller
            name="id"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                id="inputUsername"
                aria-describedby="passwordHelpBlock"
                placeholder="Enter username"
              />
            )}
          />
          {errors.username && (
            <Alert variant="danger" className="mt-2">
              {errors.username.message}
            </Alert>
          )}
        </div>
        <div className="form-group mt-2">
          <Form.Label htmlFor="inputPassword">Password</Form.Label>
          <Controller
            name="secret"
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                type="password"
                id="inputPassword"
                aria-describedby="passwordHelpBlock"
                placeholder="Enter password"
              />
            )}
          />
          {errors.password && (
            <Alert variant="danger" className="mt-2">
              {errors.password.message}
            </Alert>
          )}
        </div>
        <div className="d-flex align-items-center">
          <Button
            type="submit"
            style={{ width: "80px" }}
            className="mt-3"
            variant="outline-light border text-dark"
          >
            Sign up
          </Button>
          {isLoading && <Spinner animation="border" role="status" />}
        </div>
      </form>
      {error && (
        <Alert variant="danger" className="mt-2">
          {error.data.message}
        </Alert>
      )}
    </div>
  );
};

export default LoginPage;
