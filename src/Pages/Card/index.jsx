import React from 'react'
import './CardElements.jsx'
import {CardH3,CardContainer, CardWrap, CardA, CardP} from './CardElements.jsx'
export default function Card(props){
  return (
    
        <CardContainer>
            <CardWrap>
              <CardA className="number" href="#">{props.number}</CardA>
              <CardH3>{props.title}</CardH3>
            </CardWrap>
              <CardP>{props.text}</CardP>
        </CardContainer>
  )
}
