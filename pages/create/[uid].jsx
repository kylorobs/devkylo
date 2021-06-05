import React from 'react';
import { PrismicClient } from '../../lib/prismic';
import Prismic from "prismic-javascript"
import CanvasPage from '../../components/layouts/canvaspage';
import styled from 'styled-components';
import Chip from '../../components/UI/chip';
import SliceRenderer from '../../components/slices/SliceRenderer';
import { RichText } from "prismic-reactjs"

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

const CreatePage = ({ data }) => {

    console.log('Canvas Page');
    console.log(data)

    return (

        <CanvasPage
            type="create"
            pagetitle={data.title[0].text}
            pagedesc={data.short_desc[0].text}
        >
            <Flex>

            </Flex>
            <Text>
                <h2>Task</h2>
                <p>{data.task[0].text}</p>
                <h2>Project Overview</h2>
                {RichText.render(data.text)} 
                <SliceRenderer slices={data.body} />
            </Text>
    
        </CanvasPage>
    );
}

export default CreatePage;

export async function getStaticPaths() {
    const { results } = await PrismicClient.query(
      Prismic.Predicates.at("document.type", "post")
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
    const { data } = await PrismicClient.getByUID("post", uid)
    return {
      props: { data },
    }
  }



// We can retrieve the uid as a param and check in which page it belongs. Examples:
// http://localhost:3000/posts/hello-world
// http://localhost:3000/posts/hey-macarena
// http://localhost:3000/posts/etc