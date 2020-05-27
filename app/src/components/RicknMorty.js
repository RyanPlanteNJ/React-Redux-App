import React from 'react';
import { connect } from 'react-redux';
import RicknMortyForm from './RicknMortyForm';

import styled from 'styled-components';

import { getRicknMorty } from '../actions';

const RicknMorty = props => {
    const fetchRicknMorty = e => {
        e.preventDefault();
        props.getRicknMorty();
    }

    return (
        <>
            <h2>Rick and Morty</h2>
            <div>
                {props.character.map(character => (
                    <h4 key={character.id}>{character.name}</h4>
                ))}
                <RicknMortyForm fetchRicknMorty={fetchRicknMorty}/>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    character: state.character,
    error: state.error
});

export default connect(
    mapStateToProps,
    { getRicknMorty })(RicknMorty);