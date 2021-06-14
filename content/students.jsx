
import React from 'react';
import Card from '../components/UI/card';
import "react-multi-carousel/lib/styles.css";
import CardCarousel from 'components/UI/carousel';


const Students = (props) => {


  const createTechList = (ar) => {
    return ar.map(node => node.text);
  }

  const renderCards = () => {
    if (!props.students || props.students.length === 0) return [];
    return props.students.map(result => {
      return (
        <Card
          key={result.id} 
          title={result.data.name[0].text}
          desc={result.data.comment[0].text}
          link={'create/'}
          chips={createTechList(result.data.technology)}
        ></Card>
      )
    })  
  }    

    let students = renderCards();

    if (props.listing) return students
  
    else return (
        <CardCarousel>
            { students }
        </CardCarousel>
    )
} 

export default Students;