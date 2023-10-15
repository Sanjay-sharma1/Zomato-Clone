import React from 'react';
import "./filter.css";
import FilterItems from './filterItem/filterItem';

const Filters =({filterlist})=>{
    return (
        <div className='filters'>
            {filterlist && 
                filterlist.map((filter) => {
                return <FilterItems filter = {filter} key ={filter.id} />;
            })}
        </div>
    );
}

export default Filters;