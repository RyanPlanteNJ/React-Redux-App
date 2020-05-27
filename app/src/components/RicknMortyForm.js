import React from "react";

export default function RicknMortyForm(props) {
   
    return (
        <form onSubmit={props.fetchRicknMorty}>
            <label htmlFor="charcID">Character ID: </label>
            <input type="number" id="id" name="id"/>
            <input type="submit"/>
        </form>
    )
}