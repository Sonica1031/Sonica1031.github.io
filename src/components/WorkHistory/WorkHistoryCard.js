import React, {useState} from "react";
import { Card, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';
import workHistory from "../../data";

const WorkHistoryCard = prop =>{

    const [activeIndex, setIndex] = useState(0);
    const [activelyShowing, setShowing] = useState(false);

    const next = () =>{
        if(activelyShowing) return;
        const nextIndex = setIndex === workHistory.length - 1 ? 0 : activeIndex + 1;
        setIndex(nextIndex);
    }
    const previous = () => {
        if(activelyShowing) return;
        const nextIndex = setIndex === 0 ? workHistory.length -1 : activeIndex - 1;
        setIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if(activelyShowing) return;
        setIndex(newIndex);
    }
    const slides = workHistory.map(x =>{
    return (
      
        <CarouselItem
    
        className="custom-tag"
        tag="div"
        key={x.id}
        onExiting={() => setShowing(true)}
        onExited={() => setShowing(false)}>
        <div className="cardDiv">
        <Card body outline color="warning" className="WHPTag">
        <CardTitle><b>{x.place_of_business}</b></CardTitle>
        <CardText className="WHPTag">{x.date}</CardText>
        <CardText className="WHPTag">{x.job_title}</CardText>
        <CardText className="WHPTag">{x.address}</CardText>
        <CardText className="WHPTag">{x.phone_number}</CardText>
        </Card>
        </div>
        </CarouselItem>
    
    )
    })
    return(
        <div>
        <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}>
        <CarouselIndicators items={workHistory} activeIndex={activeIndex} onClickHandler={goToIndex}></CarouselIndicators>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </div>
    )
}

export default WorkHistoryCard;