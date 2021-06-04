import React from "react";
import styled from 'styled-components';

const Embed = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px; height: 0; overflow: hidden;
    margin-bottom: 1em;

    iframe, object, embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`

const Slice_Embed = ({ slice }) => {
    if(slice){   	
        return (
            <div>
                <Embed dangerouslySetInnerHTML={{ __html: slice.primary.embed_link.html }} />
            </div>
        );
    } else {
      return null;
    }
}

export default Slice_Embed