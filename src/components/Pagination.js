import React from 'react';

export default function Pagination(props) {
    let { nextPage, previousPage, nextPageCB, previousPageCB } = props;
    let nextStyle = {
        visibility: nextPage ? "initial" : "hidden",
    };
    let previousStyle = {
        visibility: previousPage ? "initial" : "hidden",
    };
    return (
        <div className="pagination">
            <button
                style={previousStyle}
                onClick={previousPageCB}
            >
                {"<"}
            </button>

            <button
                style={nextStyle}
                onClick={nextPageCB}
            >
                {">"}
            </button>
        </div>
    );
}