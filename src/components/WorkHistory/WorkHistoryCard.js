import React, {useState} from "react";
import { Card, CardTitle, CardText} from 'reactstrap';
import workHistory from "../../data";

function WorkHistoryCard (){
    let [index, setIndex] = useState(0);

    const prev = () =>{
    if(index !== 0){
        setIndex(index-1)
    }
    }

    const next = () =>{
    if(index !== 7){
        setIndex(index+1)
    }
    }

  const slides = workHistory.map(x =>{
         return(
        <div className="custom-tag cardDiv">
        <button className="btns" onClick={prev}>prev</button>
        <Card body outline color="warning" className="WHPTag">
        <CardTitle><b>{x.place_of_business}</b></CardTitle>
        <CardText className="WHPTag">{x.date}</CardText>
        <CardText className="WHPTag">{x.job_title}</CardText>
        <CardText className="WHPTag">{x.address}</CardText>
        <CardText className="WHPTag">{x.phone_number}</CardText>
        </Card>
        <button className="btns" onClick={next}>next</button>
        </div>
         );
})


    return(
        <div>
            {slides[index]}
        </div>
    )
}

export default WorkHistoryCard;