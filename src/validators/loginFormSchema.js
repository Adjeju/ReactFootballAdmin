import * as yup from "yup";

const loginFormSchema = yup.object().shape({
  id: yup.string().required("This field is required"),
  secret: yup.string().required("This field is required"),
});

export default loginFormSchema;
