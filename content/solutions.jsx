
import React from 'react';
import Card from '../components/UI/card';
import "react-multi-carousel/lib/styles.css";
import CardCarousel from 'components/UI/carousel';


const Solutions = (props) => {


  const createTechList = (ar) => {
    return ar.map(node => node.text);
  }

  const renderCards = () => {
    if (!props.solutions || props.solutions.length === 0) return [];
    return props.solutions.map(result => {
      return (
        <Card
          key={result.id} 
          problem={result.data.problem[0].text}
          solution={result.data.solution[0].text}
          link={'solve/' + result.uid}
          chips={createTechList(result.data.technology)}
        ></Card>
      )
    })  
  }    

    let solutions = renderCards();
  
    return (
        <CardCarousel>
            { solutions }
        </CardCarousel>
    )
} 

export default Solutions;