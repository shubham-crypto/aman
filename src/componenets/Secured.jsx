import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export const Secured = ({children}) => {
    var flag=true;

    if(localStorage.token===undefined){
          flag=false;
    }
    
    if(!flag){
        return <Navigate to='/'/>;
    }
    else{
        return children;
    }
}
