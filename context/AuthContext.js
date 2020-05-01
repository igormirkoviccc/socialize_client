import DataContext from "./DataContext";
import { AsyncStorage } from "react-native";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "error":
      return { ...state, errorMessage: action.payload };
    case "login":
      return { errorMessage: "", isAuth: true };
    default:
      return state;
  }
};

const LogIn = (dispatch) => ({ email, password }) => {
  fetch("http://159.65.165.71:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.text();
      } else {
        dispatch({ type: "error", payload: "Login error" });
      }
    })
    .then(async (res) => {
      await AsyncStorage.setItem("auth_token", res.toString());
      dispatch({ type: "login", payload: res.toString() });
    })
    .catch((e) => {
      dispatch({ type: "error", payload: "Login error" });
    });
};
const SignUp = (dispatch) => ({
  name,
  age,
  gender,
  username,
  email,
  password,
}) => {
  fetch("http://159.65.165.71:8000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age, gender, username, email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.text();
      } else {
        dispatch({ type: "error", payload: "Sign up error" });
      }
    })
    .then(async (res) => {
      await AsyncStorage.setItem("auth_token", res.toString());
      dispatch({ type: "sign up", payload: res.toString() });
    })
    .catch((e) => {
      dispatch({ type: "error", payload: "Sign up error" });
    });
};

export const { Provider, Context } = DataContext(
  AuthReducer,
  { LogIn },
  { SignUp },
  { isAuth: false, errorMessage: "" }
);
