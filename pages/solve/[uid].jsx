import React from 'react';
import { PrismicClient } from '../../lib/prismic';
import Prismic from "prismic-javascript"
import CanvasPage from '../../components/layouts/canvaspage';
import styled from 'styled-components';
import SliceRenderer from '../../components/slices/SliceRenderer';
// import { RichText } from "prismic-reactjs"
import TechList from '../../content/techlist';

const Text = styled.div`
    margin: 1rem;
    @media(min-width: 600px){
        margin: 4rem;
    }

    h2 {
        margin-top: 4rem;
    }

    p {
        font-family: ${props => props.theme.fonts.paragraph};
        font-size: 2.2rem;
        margin: 2rem 0;
        line-height: 32px;
    }
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
    overflow: hidden;

    @media (min-width: 600px){
        padding: 2rem;
    }
`

const SolvePage = ({ data }) => {

    console.log('Canvas Page');
    console.log(data.slices)

    const createTechList = (ar) => {
        return ar.map(node => node.text);
    }

    return (

        <CanvasPage
            type="solve"
            pagetitle={data.title[0].text}
            pagedesc={data.problem[0].text}
        >
            
            <Text>
                <TechList list={createTechList(data.technology)}/>
                <h2>Problem</h2>
                <p>{data.problem[0].text}</p>
                <h2>Solution</h2>
                <p>{data.solution[0].text}</p>
                <SliceRenderer slices={data.body} />
            </Text>
    
        </CanvasPage>
    );
}

export default SolvePage;

export async function getStaticPaths() {
    const { results } = await PrismicClient.query(
      Prismic.Predicates.at("document.type", "solution")
    )
  
    const paths = results.map(post => ({
      params: {
        uid: post.uid,
      },
    }))
    return {
      paths,
      fallback: false,
    }
  }

  export async function getStaticProps({ params }) {
    const { uid } = params
    const { data } = await PrismicClient.getByUID("solution", uid)
    return {
      props: { data },
    }
  }



// We can retrieve the uid as a param and check in which page it belongs. Examples:
// http://localhost:3000/posts/hello-world
// http://localhost:3000/posts/hey-macarena
// http://localhost:3000/posts/etc