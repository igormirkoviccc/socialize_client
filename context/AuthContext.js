import DataContext from "./DataContext";

const AuthReducer = (state, action) =>{
    switch (action.type) {
        case 'error':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const LogIn = ( dispatch ) =>{
    return ({ email, password }) => {
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
                        dispatch({type: 'error', payload: 'Log in error'})
                    }
                })
                .catch(e => {
                    dispatch({type: 'error', payload: 'Log in error'})
                })
    }
}

export const { Provider, Context } = DataContext(
    AuthReducer,
    { LogIn },
    { isAuth: false, errorMessage: '' }
)