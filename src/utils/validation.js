import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z_ ]*$/, "No special characters allowed")
    .min(2, "Name must be between 2 and 16 characters")
    .max(16, "Name must be between 2 and 16 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email adress"),
  status: Yup.string().max(64, "Status must be less than 64 characters"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain atleast 6 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    ),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email adress"),
  status: Yup.string().max(64, "Status must be less than 64 characters"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain atleast 6 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    ),
});

export const createPostSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .matches(/^[a-zA-Z_ '-]*$/, "No special characters allowed")
    .min(10, "Name must be between 10 and 64 characters")
    .max(64, "Name must be between 10 and 64 characters"),
  content: Yup.string()
    .required("Content is required")
    .min(340, "Content must be between 340 and 900 characters")
    .max(900, "Content must be between 340 and 900 characters"),
  country: Yup.string().required("Tara este obligatorie"),
  activity: Yup.string().required("Activitatea este obligatorie"),
  date: Yup.string().required("Data este obligatorie"),
  season: Yup.string().required("Anotimpul este obligatorie"),
});
