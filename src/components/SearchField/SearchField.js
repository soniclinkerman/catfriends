import React from "react";

const SearchField = ({value}) => {
    return(
        <div className="pa2">
            <div className="">
                <input 
                className="pa3" 
                type="search" 
                onChange={value} 
                placeholder="Search Kitten"/>
            </div>
        </div>
    )
}

export default SearchField