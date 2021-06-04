
import React from 'react';
import styled from 'styled-components';
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

const Container = styled.div`
    width: 90%;
    margin: auto;
    button {
      background-color: ${props => props.theme.colors.primary};
      color: black;
      margin: -2rem;
      &::before {
        color: black;
      }

      @media(min-width: 600px){
        min-width: 60px;
        min-height: 60px;
      }
    }
`

class CardCarousel extends React.Component {
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
            {this.props.children}
          </Carousel>
        </Container>
       
    )
}
} 

export default CardCarousel;