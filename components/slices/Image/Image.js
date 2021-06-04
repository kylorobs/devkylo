import React from "react";
import Picture from "../../UI/picture";

const Slice_Image = ({ slice }) => {
    if(slice){  
        const data = slice.primary;
        return (
            <Picture ur={data.uploaded_image.url} alt={data.uploaded_image.alt} />
        )
    } else {
      return null;
    }
}

export default Slice_Image