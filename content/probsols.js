
import React from 'react';
import styled from 'styled-components';
import Card from '../components/UI/card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Flex = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 90%;
    margin: auto;
`

class ProbSols extends React.Component {
    static getInitialProps({ req }) {
        let userAgent;
        let deviceType;
        if (req) {
          userAgent = req.headers["user-agent"];
        } else {
          userAgent = navigator.userAgent;
        }
        const md = new MobileDetect(userAgent);
        if (md.tablet()) {
          deviceType = "tablet";
        } else if (md.mobile()) {
          deviceType = "mobile";
        } else {
          deviceType = "desktop";
        }
        return { deviceType };
      }

render(){
    return (
        <Container>
        <Carousel 
            responsive={responsive}
            infinite={true}
            ssr={true}
            deviceType={this.props.deviceType}
        >
            <Card 
                problem="Staff struggle to work with large chunks of html"
                solution="Create a component library"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                problem="Advice staff have to manually log database"
                solution="Integrating the Adice pro API"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                problem="Lost form entires"
                solution="Create a logging system that captures all entries."
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                problem="Recreating the same design over and over"
                solution="Build a flexible template"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>

        </Carousel>
        </Container>
       
    )
}
} 

export default ProbSols;