import CanvasPage from "../components/layouts/canvaspage";
import PlaceHolder from '../content/placeholders';

const Create = () => {
    return (
        <CanvasPage
            type="solve"
            pagetitle="Things created"
            pagedesc="Kylo Robinson's portfolio of projects created as a javascript developer."
        >
            <h1>Things I have created</h1>
            <p>Kylo Robinson's portfolio of projects created as a javascript developer.</p>
            <PlaceHolder />

        </CanvasPage>
    )
}

export default Create;