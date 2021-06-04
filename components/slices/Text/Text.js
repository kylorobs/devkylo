import React from "react";
import { RichText } from "prismic-reactjs"

const Slice_Text = ({ slice }) => {
    console.log('TEXT SLICE');
    console.log(slice)
    if(slice){   	
        return (
            <div>
                {/* {RichText.render(slice.primary.content)}  */}
            </div>
        );
    } else {
      return null;
    }
}

export default Slice_Text;