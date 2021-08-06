import React from 'react';
import { PrismicClient } from '../../lib/prismic';
import Prismic from "prismic-javascript"
import CanvasPage from '../../components/layouts/canvaspage';
import SliceRenderer from '../../components/slices/SliceRenderer';
import { RichText } from "prismic-reactjs"
import TextArea from '../../components/UI/textarea';

const CreatePage = ({ data }) => {

    return (

        <CanvasPage
            type="build"
            pagetitle={data.title[0].text}
            pagedesc={data.short_desc[0].text}
        >
            <TextArea>
                <h2>Task</h2>
                <p>{data.task[0].text}</p>
                <h2>Project Overview</h2>
                {RichText.render(data.text)} 
                <SliceRenderer slices={data.body} />
            </TextArea>
    
        </CanvasPage>
    );
}

export default CreatePage;

export async function getStaticPaths() {
    const { results } = await PrismicClient.query(
      Prismic.Predicates.at("document.type", "post")
    )
  
    const paths = results.map(post => ({
      params: {
        uid: post.uid,
      },
    }))
    return {
      paths,
      fallback: false,
    }
  }

  export async function getStaticProps({ params }) {
    const { uid } = params
    const { data } = await PrismicClient.getByUID("post", uid)
    return {
      props: { data },
    }
  }


