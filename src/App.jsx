import './App.css'
import NavBar from './components/Items/NavBar/NavBar'
import Routing from './components/Items/NavBar/Routing'
import './assets/font/fonts.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const HandleCvDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/AiswaryaVinodResume.pdf';
    link.download = 'Aiswarya_Vinod_CV.pdf';  // File name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <>
      <NavBar HandleCvDownload={HandleCvDownload}></NavBar>
      <main>
        <Routing  HandleCvDownload={HandleCvDownload}></Routing>
      </main>
       <ToastContainer />
    </>
  )
}

export default App
