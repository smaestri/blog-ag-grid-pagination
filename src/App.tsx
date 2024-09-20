import { useState } from 'react'
import Grid from './Grid';
function App() {
  
  const [itemToShow, setItemToShow] = useState("");

  return (
    <>
    <div className="flex flex-row">
      <div className="flex flex-col gap-3">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setItemToShow("berries")}>Display berries</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={() => setItemToShow("locations")}>Display locations</button>
      </div>
      <div>
        <Grid itemToShow={itemToShow}></Grid>
      </div>
    </div>
     
    </>
  )
}

export default App
