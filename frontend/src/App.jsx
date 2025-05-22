

import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'
import BusinessSection from './shared/BusinessSection'
function App() {
 

  return (
    <>
      <div>

         <BrowserRouter>
         <Header />
         <div className='mt-80'></div>
         <BusinessSection />

         <div className='min-h-screen'></div>
         <Footer />
         </BrowserRouter>

        </div>
     </>
  )
}

export default App
