import DataContext from "./DataContext";

const AuthReducer = (state, action) =>{
    switch (action.type) {
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
            .then(res => res.text())
            .then(res => console.log(res))
    }
}

export const { Provider, Context } = DataContext(
    AuthReducer,
    { LogIn },
    {isAuth: false}
)