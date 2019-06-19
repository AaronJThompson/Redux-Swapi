import React from 'react';
import { connect } from "react-redux";
import { fetchCharacters } from '../actions'
import styled from 'styled-components';

const ButtonsContainer = styled.div`
    margin: 2rem auto;
    width: 100%;
    max-width: 15rem;
    display:flex;
    justify-content: space-between;
    button {
        font-size: 2rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border: none;
        background-color: #262122;
        color: #F2F2F2;
        border-radius: .5rem;
    }

    .previous-page{
        margin-right: 1rem;
    }
`

function Pagination(props) {
    let nextStyle = {
        opacity: props.nextPage ? "1" : "0.2",
    };
    let previousStyle = {
        opacity: props.previousPage ? "1" : "0.2",
    };

    let goNext = () => {
        if (props.nextPage)
            props.fetchCharacters(props.nextPage);
    }
    let goPrevious = () => {
        if (props.previousPage)
            props.fetchCharacters(props.previousPage);
    }

    return (
        <ButtonsContainer>
            <button
                style={previousStyle}
                onClick={goPrevious}
                className='previous-page'
            >
                {"<"}
            </button>

            <button
                style={nextStyle}
                onClick={goNext}
            >
                {">"}
            </button>
        </ButtonsContainer>
    );
}

function mapStateToProps(state) {
return {
    nextPage: state.chars.nextPage,
    previousPage: state.chars.previousPage
};
}
export default connect(
mapStateToProps,
{
    fetchCharacters
}
)(Pagination);