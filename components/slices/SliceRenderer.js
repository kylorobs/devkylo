import React from 'react';

import { Slice_Text, Slice_Embed, Slice_Image, Slice_Card, Slice_ImageSeries } from './SliceTypes';


const SliceRenderer = ({ slices }) => {
    console.log('SLICES')
    console.log(slices)
    if (slices) {
        return slices.map((slice, index) => {
            const res = (() => {
                switch(slice.slice_type){
                    case 'text':
                        return (
                            <div key={ index} role="presentation">
                                <Slice_Text slice={ slice} />
                            </div>
                        );
                    case 'embed':
                        return (
                            <div key={ index } role="presentation">
                                <Slice_Embed slice={ slice} />
                            </div>                       
                        );
                    case 'image':
                        return (
                            <div key={ index} role="presentation">
                                <Slice_Image slice={ slice} />
                            </div>                       
                        );
                    case 'card':
                        return (
                            <div key={index} role="presentation">
                                <Slice_Card slice={ slice } />
                            </div>                       
                        );
                    case 'gallery':
                        return <Slice_ImageSeries slice={ slice } />
                    default: return;
                }
            })();
            return res
        })
    }

    else return null;
 
}

export default SliceRenderer;