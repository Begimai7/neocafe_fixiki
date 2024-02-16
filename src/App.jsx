import { useState } from "react";
import CreateMenuModal from "./components/admin/CreateMenuModal"

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div> 
      <CreateMenuModal openModal={open} handleCloseModal={handleOpen} />
    </div>
  )
}

export default App