import React from "react";

const Pagination = (props) => {
    const {page, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}><div>◀️</div></button>
            <div>Page {page}</div>
            <button onClick={onRightClick}><div>▶️</div></button>
        </div>
    )
}

export default Pagination;