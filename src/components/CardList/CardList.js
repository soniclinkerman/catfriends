import React from "react";
import Card from "../Card/Card";


const CardList= ({cats}) => {
    console.log('Cardlist')
    const cardComponent = cats.map((cat,i) => {
        return  <Card key={cats[i].id} id={cats[i].id} name={cats[i].name} email={cats[i].email} />
    })
    return(
        <div>
           {cardComponent}
        </div>
    )
}

export default CardList