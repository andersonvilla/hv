import 'tailwind.css';
import Header from 'components/Header/Header';
import Profile from 'components/Profile/Profile';
import Academic from 'components/AcademicInformation/Academic';
import Experience from 'components/WorkExperience/Experience';
import Additional from 'components/AdditionalInformation/Additional';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className='lg:grid lg:grid-cols-2'>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-1'>
          <Profile />
          <Academic />
        </div>
        <div className='md:grid md:grid-cols-2 md:border-t-[1px] md:border-t-[#57C8B4] lg:grid-cols-1'>
          <Experience />
          <Additional />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
