
import React from 'react';
import Card from '../components/UI/card';
import CardCarousel from "../components/UI/carousel";

const Posts = (props) => {

  const createTechList = (ar) => {
    return ar.map(node => node.text);
  }

  const renderCards = () => {
    if (!props.posts || props.posts.length === 0) return [];
    return props.posts.map(result => {
      return (
        <Card
          key={result.id} 
          title={result.data.title[0].text}
          desc={result.data.short_desc[0].text}
          link={'create/' + result.uid}
          chips={createTechList(result.data.technology)}
        ></Card>
      )
    })  
  }    

    let posts = renderCards();

    return (
        <CardCarousel>
            { posts }
        </CardCarousel>
       
    )
};


export default Posts;