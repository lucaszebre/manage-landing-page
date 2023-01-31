import React from 'react'
import { FeedbackContainer,FeedBackWrap, FeedbackImage, FeedbackName, FeedbackText } from './FeedBackElements'
const Feedback = (props) => {
    return (
        
    <FeedbackContainer>
        <FeedbackImage src={`../../../images/${props.image}`} alt="profile-image"/>
        <FeedBackWrap>
            <FeedbackName>{props.name}</FeedbackName>
            <FeedbackText>{props.text}</FeedbackText>
        </FeedBackWrap>
    </FeedbackContainer>
    )
}

export default Feedback
