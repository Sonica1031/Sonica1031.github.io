import React, {useState} from "react";
import { Card, CardTitle, CardText} from 'reactstrap';
import workHistory from "../../data";

const WorkHistoryCard = prop =>{

  const slides = workHistory.map(x =>{
    return (
      
       
    
       
        <div className="custom-tag cardDiv">
        <Card body outline color="warning" className="WHPTag">
        <CardTitle><b>{x.place_of_business}</b></CardTitle>
        <CardText className="WHPTag">{x.date}</CardText>
        <CardText className="WHPTag">{x.job_title}</CardText>
        <CardText className="WHPTag">{x.address}</CardText>
        <CardText className="WHPTag">{x.phone_number}</CardText>
        </Card>
        </div>
    
    )
    })
    return(
        <div>
        {slides}
        </div>
    )
}

export default WorkHistoryCard;