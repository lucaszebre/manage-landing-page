import Feedback from "../FeedBack/FeedBack.js";
import React from 'react'
import {FeedBackWrap,FeedContainer, FeedTitle } from './FeedElement'

export const Feed = () => {
return (
    <FeedContainer>
        <FeedTitle>What they've said</FeedTitle>
        <FeedBackWrap>
            <Feedback
                image="avatar-ali.png"
                name="Anisha Li"
                text="Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
            />
            <Feedback
                image="avatar-richard.png"
                name="Ali Bravo"
                text="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
            />
            <Feedback
                image="avatar-shanai.png"
                name="Richard Watts"
                text="Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
            />
            <Feedback
                image = "avatar-anisha.png"
                name="Shanai Gough"
                text="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
            />
        </FeedBackWrap>
    </FeedContainer>
)
}

export default Feed

