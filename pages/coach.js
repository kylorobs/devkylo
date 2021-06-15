import CanvasPage from "../components/layouts/canvaspage";
import Students from '../content/students';
import { PrismicClient } from "../lib/prismic";
import Prismic from "prismic-javascript";
import styled from "styled-components";
import ButtonLink from "../components/UI/button_link";

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    a {
        margin: 1rem;
    }
`

export default function Coach(props){
    return (
        <CanvasPage
            type="coach"
            pagetitle="People Coached"
            pagedesc="Kylo Robinson's portfolio of projects created as a javascript developer."
        >
            <p>Kylo Robinson's portfolio of projects created as a javascript developer.</p>
      
           <Flex>
                <Students listing students={props.students.results}/>
           </Flex>

        </CanvasPage>
    )
}

export async function getStaticProps() {
    const students = await PrismicClient.query(
        Prismic.Predicates.at("document.type", "student"),
        { orderings: "[my.post.published desc]" }
      )
    return {
      props: {
        students
      },
    }
  }

