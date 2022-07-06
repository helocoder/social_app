import {Navigate} from 'react-router-dom'

export const Private = ({children}) =>{
    const user = localStorage.getItem('user');

    if(!user){
        return <Navigate to="/login"/>
    }else{
        return children
    }
}