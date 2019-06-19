import React from 'react';
import { connect } from "react-redux";
import { fetchCharacters } from '../actions'
import styled from 'styled-components';

const ButtonsContainer = styled.div`
    margin: 2rem 0;

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
        visibility: props.nextPage ? "initial" : "hidden",
    };
    let previousStyle = {
        visibility: props.previousPage ? "initial" : "hidden",
    };

    let goNext = () => {
        props.fetchCharacters(props.nextPage);
    }
    let goPrevious = () => {
        props.fetchCharacters(props.previousPage);
    }

    return (
        <div>
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
        </div>
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