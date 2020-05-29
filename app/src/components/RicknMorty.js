import React from 'react';
import { connect } from 'react-redux';
import RicknMortyForm from './RicknMortyForm';

import styled from 'styled-components';

import { getRicknMorty } from '../actions';


const StyledHeader = styled.h2`
    color: #315A72;
    font-size: 4rem;

`;

const StyledName = styled.h4`
    background-color: #333F46;
    margin: 3px 0;
    border-radius: 3rem;
    border-right: #ABD5EC 8px solid;
    border-bottom: #ABD5EC 5px solid;
    padding: 2rem;
    font-size: 3rem;
    color: #FFF;    
`;


const RicknMorty = props => {
    const fetchRicknMorty = e => {
        e.preventDefault();
        props.getRicknMorty();
    };

    return (
        <>
            <StyledHeader>Rick and Morty</StyledHeader>
            <div>
            {props.character.map(character => ( 
              <StyledName key={character.id}>{character.name}: {character.status}</StyledName>
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