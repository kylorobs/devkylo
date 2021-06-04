import React from 'react';
import { PrismicClient } from '../../lib/prismic';
import Prismic from "prismic-javascript"
import CanvasPage from '../../components/layouts/canvaspage';
import styled from 'styled-components';
import Chip from '../../components/UI/chip';

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
                <Chip>Javascript</Chip>
                <Chip>CSS Grid</Chip>
                <Chip>Firebase</Chip>
                <Chip>Github</Chip>
                <Chip>CSS Transitions</Chip>
                </Flex>
            <Text>
                <h2>Task</h2>
                <p>{data.task[0].text}</p>
                <h2>Project Overview</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <p> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
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