import React from "react";

function Categories({categories, filterItems}) {

    return (
        categories.map((category, index) => {
            return(
            <div id = {index} key={index} >
         
                <button className="cat-btn" onClick={()=>{filterItems(category)}}>{category}</button>
            </div>
            )

        }
        )
    );
  }
  
  export default Categories;