
import React from 'react';
import styled from 'styled-components';
import Card from '../components/UI/card';
import CardCarousel from "../components/UI/carousel";
import ButtonLink from "../components/UI/button_link";

const Parent1 = styled.div`
  position: relative;
`

const Absolute1= styled.div`
  position: absolute;
  bottom: -8%;
  right: 8%;
`

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

    if (props.listing) return posts

    else return (
        <Parent1>
          <CardCarousel>
              { posts }
          </CardCarousel>
            <Absolute1>
               <ButtonLink link="/create"> See All  Projects</ButtonLink>
            </Absolute1>
        </Parent1>
       
    )
};


export default Posts;