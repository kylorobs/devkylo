import Head from 'next/head'
import Image from 'next/image';
import BlueCanada from '../components/landscapes/blue_canada/blue_canada';
import SectionHeading from '../components/UI/sectionHeading';
import ICreate from '../content/icreate';


export default function Home() {
  return (
    <>
      <Head>
        <title>Kylo Robinson - Fullstack Javascript Developer</title>
        <meta name="description" content="A portfolio of work for Kylo Robinson, a fullstack javascript developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BlueCanada>
          <h1>
            KYLO ROBINSON - Fullstack Javascript Developer
          </h1>
          <p>sdsdwdwdwd</p>
        </BlueCanada>
        <ICreate />
        <BlueCanada></BlueCanada>
        <SectionHeading heading="I.SOLVE()" right>
          <p>I work across mulltiple teams, finding and executing solutions to problems on my own.</p>
        </SectionHeading>
        <BlueCanada></BlueCanada>
        <SectionHeading heading="I.COACH()" >
          <p>I love to coach and upskill others. I even built my own javascript teaching system.</p>
        </SectionHeading>
      </main>

      <footer>
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </>
  )
}



// https://dev.to/ruben_suet/set-up-nextjs-9-4-with-prismic-as-headless-cms-27ij
// https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
// https://nextjs.org/docs/api-reference/next/image
// https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript
// https://css-tricks.com/how-to-do-knockout-text/
// https://codepen.io/Jintos/full/crlxk
// https://dev.to/dolearning/importing-svgs-to-next-js-nna