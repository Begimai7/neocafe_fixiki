import { useState } from "react";
import ModalUnstyled from "./components/admin/AddNewFillial";

// import MyForm from "./components/Test"


function App() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button  onClick={handleOpen}>
                Open modal
            </button>  
            {open ?  <ModalUnstyled handleClose={handleClose} /> :(
                <h1>rdtcvgbhi</h1>  
            )}
            {/* <MyForm/> */}
        </div>
    )
}
export default App
