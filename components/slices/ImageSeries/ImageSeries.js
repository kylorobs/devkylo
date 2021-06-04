import styled from 'styled-components';
import Picture from '../../UI/picture';

const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

const Slice_ImageSeries = ({ slice }) => {
    if(slice){  
       return (
           <Flex>
               {slice.items.map(item => (
                    <Picture key={item.image.url} url={item.image.url} alt={item.image.alt || ''} />
                ))}
           </Flex>
       )
    } else {
      return null;
    }
}

export default Slice_ImageSeries;