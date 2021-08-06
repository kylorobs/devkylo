import CanvasPage from "../components/layouts/canvaspage";
import Students from '../content/students';
import { PrismicClient } from "../lib/prismic";
import Prismic from "prismic-javascript";
import styled from "styled-components";
import ButtonLink from "../components/UI/button_link";
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

export default function Coach(props){
    return (
        <CanvasPage
            type="coach"
            pagetitle="People Coached"
            pagedesc="Kyle Robinson's portfolio of projects created as a javascript developer."
        >

          <TextArea>
            <p>There are many reasons why I love my profession. Besides working in teams and building exciting tech products and features, I also find joy in helping others learn and grow. In my free time I volunteer coach at <a href="https://codebar.io/">codebar.io</a>, and I also run my own javascript teaching program at <a href="https://thegreatsync.com/">thegreatsync.com.</a></p>
            <p> I have also mentored and coached over 25 staff members in my current role, and lead the website training & development propgram.</p>
        
          </TextArea>
      
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

