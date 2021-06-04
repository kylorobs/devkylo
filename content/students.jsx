
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

class Students extends React.Component {
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

  createTechList = (ar) => {
    return ar.map(node => node.text);
  }

  renderCards = () => {
    if (!this.props.students || this.props.students.length === 0) return [];
    return this.props.students.map(result => {
      return (
        <Card
          key={result.id} 
          title={result.data.name[0].text}
          desc={result.data.comment[0].text}
          link={'create/'}
          chips={this.createTechList(result.data.technology)}
        ></Card>
      )
    })  
  }    

render(){

    let students = this.renderCards();
  
    return (
        <Container>
          <Carousel 
              responsive={responsive}
              infinite={true}
              ssr={true}
              deviceType={this.props.deviceType}
          >
            { students }
          </Carousel>
        </Container>
       
    )
}
} 

export default Students;