import CanvasPage from "../components/layouts/canvaspage";
import Solutions from '../content/solutions';
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

export default function Solve(props){
    return (
        <CanvasPage
            type="solve"
            pagetitle="Problems solved"
            pagedesc="Kylo Robinson's portfolio of projects created as a javascript developer."
        >
            <p>Kylo Robinson's portfolio of projects created as a javascript developer.</p>
           <Flex>
                <Solutions listing solutions={props.solutions.results} />
           </Flex>

        </CanvasPage>
    )
}

export async function getStaticProps() {
    const solutions = await PrismicClient.query(
      Prismic.Predicates.at("document.type", "solution"),
      { orderings: "[my.post.published desc]" }
    )
    return {
      props: {
        solutions
      },
    }
  }

