import DataContext from "./DataContext";
import { AsyncStorage } from "react-native";

<<<<<<< HEAD
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
=======
const AuthReducer = (state, action) =>{
    switch (action.type) {
        case 'error':
            return {...state, errorMessage: action.payload}
        case 'login':
            return {errorMessage: '', isAuth: true}
        default:
            return state;
    }
}

const LogIn = ( dispatch ) => ({ email, password }) => {
            fetch('http://159.65.165.71:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
                .then(res => {
                    if(res.ok){
                        return res.json()
                    }else{
                        dispatch({type: 'error', payload: 'Login error'})
                    }
                })
                .then(async (res) => {
                    console.log(res);
                    await AsyncStorage.setItem('auth_token', res.token.toString());
                    await AsyncStorage.setItem('id', res.id.toString());
                    dispatch({type: 'login', payload: res.toString()})
                })
                .catch(e => {
                    dispatch({type: 'error', payload: 'Login error'})
                })
    }
>>>>>>> 9d850fc2d724d91cb1d0b268f5e0b95538de0af1

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
<<<<<<< HEAD
  AuthReducer,
  { LogIn },
  { SignUp },
  { isAuth: false, errorMessage: "" }
);
=======
    AuthReducer,
    { LogIn },
    { isAuth: false, errorMessage: '', user: null}
)
>>>>>>> 9d850fc2d724d91cb1d0b268f5e0b95538de0af1
