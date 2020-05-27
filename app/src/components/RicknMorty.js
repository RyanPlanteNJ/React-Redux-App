import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { getRicknMorty } from '../actions';

const RicknMorty = props => {
    const fetchRicknMorty = e => {
        e.preventDefault();
        props.getRicknMorty();
    };

    return (
        <>
            <button onClick={fetchRicknMorty}>Fetch Characters</button>
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