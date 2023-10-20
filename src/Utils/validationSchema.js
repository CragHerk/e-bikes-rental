import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("To pole jest wymagane"),
  lastName: Yup.string().required("To pole jest wymagane"),
  companyName: Yup.string(),
  country: Yup.string().required("To pole jest wymagane"),
  street: Yup.string().required("To pole jest wymagane"),
  postalCode: Yup.string().required("To pole jest wymagane"),
  city: Yup.string().required("To pole jest wymagane"),
  phone: Yup.string()
    .matches(/^[0-9]{9,12}$/, "Numer telefonu jest nieprawidłowy")
    .required("To pole jest wymagane"),
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("To pole jest wymagane"),
});
