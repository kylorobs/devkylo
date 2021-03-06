
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

class PlaceHolder extends React.Component {
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
                title="New Home Page Design"
                desc="A new improved page for KCLSU"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                title="Advice Pro Integration"
                desc="Integrating the Adice pro API"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                title="Building a Component Library"
                desc="Designing a cusatom library"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                title="New Home Page Design"
                desc="A new improved page for KCLSU"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                title="New Home Page Design"
                desc="A new improved page for KCLSU"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
            <Card 
                title="New Home Page Design"
                desc="A new improved page for KCLSU"
                chips={['Node Js', 'Javascript', 'React', 'Firebase']}
            ></Card>
        </Carousel>
        </Container>
       
    )
}
} 

export default PlaceHolder;