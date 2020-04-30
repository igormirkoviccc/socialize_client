import DataContext from "./DataContext";
import { AsyncStorage } from 'react-native';

const AuthReducer = (state, action) =>{
    switch (action.type) {
        case 'error':
            return {...state, errorMessage: action.payload}
        case 'login':
            return {errorMessage: '', token: action.payload}
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
                        return res.text()
                    }else{
                        dispatch({type: 'error', payload: 'Login error'})
                    }
                })
                .then(async (res) => {
                    await AsyncStorage.setItem('auth_token', res.toString());
                    dispatch({type: 'login', payload: res.toString()})
                })
                .catch(e => {
                    dispatch({type: 'error', payload: 'Login error'})
                })
    }


export const { Provider, Context } = DataContext(
    AuthReducer,
    { LogIn },
    { token: AsyncStorage.getItem('auth_token'), errorMessage: '' }
)