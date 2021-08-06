import CanvasPage from "../components/layouts/canvaspage";
import Solutions from '../content/solutions';
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

export default function Solve(props){
    return (
        <CanvasPage
            type="solve"
            pagetitle="Problems solved"
            pagedesc="Kyle Robinson's portfolio of projects created as a javascript developer."
        >
          <TextArea>
            <p> My day-to-day work involves working across multiple internal teams, delivering and maintaining web services. </p>
            <p>The teams I interact with often present a range of needs, and my role is to come up with solutions, and be the technical lead on the delivery. </p><p>This might mean I operate independently and build out the feature, like the database manager project, or it might entail working with other developers, like making a nested tabular component keyboard accessible.</p>

          </TextArea>
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

