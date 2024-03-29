
import BlueCanada from '../components/landscapes/blue_canada/blue_canada';
import MagicalLake from '../components/landscapes/lake/lake';
import RicketyBridge from '../components/landscapes/bridge/bridge';
import SectionHeading from '../components/UI/sectionHeading';
import ICreate from '../content/icreate';
import Students from '../content/students';
import Posts from '../content/posts';
import Solutions from '../content/solutions';
import FullPage from '../components/layouts/fullpage';
import styled from 'styled-components';
import { PrismicClient } from "../lib/prismic";
import Prismic from "prismic-javascript";

const Heading=styled.h1`
  font-size: 5rem;
  margin: 0;
  padding:0;
  margin-bottom: 8rem;

  

  @media (min-width: 350px){
    font-size: 6rem;
  }
  @media (min-width: 600px){
    font-size: 11rem;
  }
`

const HeaddingInner=styled.span`
  display: inline;
  font-size: 3rem;
  float: ${props => props.align};
  margin-top:0;
  background-color: black;
  text-align: ${props => props.align};
  color: #70ffbf;
  padding: 1rem;
 
  @media (min-width: 650px){
    font-size: 5rem;
  }
`


export default function Home(props) {


  return (
    <FullPage 
      pagetitle=" Kylo Robinson - Fullstack Javascript Developer" 
      pagedesc="A portfolio of work as a javascript developer, building React and Node Js applications.">
        
        <BlueCanada>
          <Heading>
            DEV KYLO <HeaddingInner align="left">Kyle Robinson -  </HeaddingInner><HeaddingInner align="right">Senior Javascript / React</HeaddingInner>
          </Heading>

        </BlueCanada>
        <ICreate />

        <MagicalLake>
            <Posts posts={props.posts.results}/>
        </MagicalLake>
        <SectionHeading heading="SOLVE" right>
          <p>I work across multiple teams, finding and executing solutions to problems on my own.</p>
        </SectionHeading>
        <RicketyBridge>
          <Solutions solutions={props.solutions.results} />
        </RicketyBridge>
        <SectionHeading heading="COACH" >
          <p>I love to coach and upskill others. I even built my own javascript teaching system.</p>
        </SectionHeading>
        <Students students={props.students.results}/>
    </FullPage>
  )
}

export async function getStaticProps() {
  const posts = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.published desc]" }
  )
  const students = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "student"),
    { orderings: "[my.post.published desc]" }
  )
  const solutions = await PrismicClient.query(
    Prismic.Predicates.at("document.type", "solution"),
    { orderings: "[my.post.published desc]" }
  )
  return {
    props: {
      posts,
      students,
      solutions
    },
  }
}


// https://dev.to/ruben_suet/set-up-nextjs-9-4-with-prismic-as-headless-cms-27ij
// https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
// https://nextjs.org/docs/api-reference/next/image
// https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript
// https://css-tricks.com/how-to-do-knockout-text/
// https://codepen.io/Jintos/full/crlxk
// https://dev.to/dolearning/importing-svgs-to-next-js-nna


