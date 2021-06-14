import CanvasPage from "../components/layouts/canvaspage";
import Posts from '../content/posts';
import { PrismicClient } from "../lib/prismic";
import Prismic from "prismic-javascript";
import styled from "styled-components";

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
            pagedesc="Kylo Robinson's portfolio of projects created as a javascript developer."
        >
            <p>Kylo Robinson's portfolio of projects created as a javascript developer.</p>
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

