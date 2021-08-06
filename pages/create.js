import CanvasPage from "../components/layouts/canvaspage";
import Posts from '../content/posts';
import { PrismicClient } from "../lib/prismic";
import Prismic from "prismic-javascript";
import styled from "styled-components";
import TextArea from "../components/UI/textarea";

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    a {
        margin: 1rem;
    }
`

export default  function Create(props){
    return (
        <CanvasPage
            type="create"
            pagetitle="Things Built"
            pagedesc="Kyle Robinson's portfolio of projects created as a javascript developer."
        >
          <TextArea>
            <p>Here are a few of my favourite projects I have worked on. These range from a full accessible component library, to a full stack database manager application, to a personal propject involving animated SVGs.</p>
            <p>My favourite tech stack for a project is React Js on the front end and Node Js/ Express Js on the backend, both built with Typescript for type safety and faster development.</p>

          </TextArea>
           <Flex>
                <Posts listing posts={props.posts.results}/>
           </Flex>

        </CanvasPage>
    )
}

export async function getStaticProps() {
    const posts = await PrismicClient.query(
      Prismic.Predicates.at("document.type", "post"),
      { orderings: "[my.post.published desc]" }
    )
    return {
      props: {
        posts
      },
    }
  }

