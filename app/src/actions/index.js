import { useState } from 'react'

import axios from 'axios';

export const FETCH_RICKNMORTY = "FETCH_RICKNMORTY";
export const FETCH_RICKNMORTY_SUCCESS = "FETCH_RICKNMORTY_SUCCESS";
export const FETCH_RICKNMORTY_FAILURE = "RETCH_RICKNMORTY_FAILURE";

export const getRicknMorty = (api) => dispatch => {

    dispatch({type: FETCH_RICKNMORTY});
    axios
       .get(api)
       .then(res => {
           console.log(res.data);
          dispatch({type: FETCH_RICKNMORTY_SUCCESS, payload: res.data});
       })
       .catch(err => {
        console.log(err.response);
        dispatch({
            type: FETCH_RICKNMORTY_FAILURE, 
            payload: `${err.response.status} ${err.response.data}`
        });
       });
    };

    