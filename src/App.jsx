import NavBar from './components/navbar.jsx';
import MainDiv from './components/main.jsx';
import Model from './components/model.jsx';
import Definitionmodel from './components/definitionmodel.jsx';
import Supportmodel from './components/support.jsx';
import Footer from './components/footer.jsx';
import './styling/mainbody.css';
import { Routes, Route } from 'react-router-dom';
import SelfExam from './pages/selfexam.jsx';
import Facts from './pages/facts.jsx';
import FAQ from './pages/faq.jsx';
import Doctors from './pages/doctors.jsx';

export default function Main() {
  return (
    <div>
      <NavBar />

      {/* Default (Home) Page Layout */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainDiv />
              <Definitionmodel />
              <Model />
              <h2 id='titleSupport'>Support & Resources</h2>
              <section className='layoutofcards'>
                <Supportmodel
                  title={"You are not alone"}
                  description={"Countless brave women have faced this challenge with courage, hope, and determination. Their stories remind us that early detection, support, and awareness can make a real difference."}
                />
                <Supportmodel
                  title={"We’re here for you"}
                  description={"Your health matters and early detection saves lives. We’re proud to bring you free breast cancer screening tests available across Algeria. Take the first step toward awareness and protection."}
                />
                <Supportmodel
                  title={"Find answers"}
                  description={"No one should face uncertainty alone. That’s why we’ve created a space where you can find honest and simple answers to your questions about breast cancer."}
                />
              </section>
              <Footer />
            </>
          }
        />

        {/* Other Routes */}
        <Route path="/selfexam" element={<SelfExam />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </div>
  );
}
