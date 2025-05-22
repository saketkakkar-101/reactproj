

import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'
function App() {
 

  return (
    <>
      <div>

         <BrowserRouter>
         <Header />
         <div className='min-h-screen'></div>
         <Footer />
         </BrowserRouter>

        </div>
     </>
  )
}

export default App
