//import './App.css';
import "./tailwind.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Academic from "./components/AcademicInformation/Academic";
import Experience from "./components/WorkExperience/Experience";
import Additional from "./components/AdditionalInformation/Additional";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="">
        <Profile />
        <div className="md:grid md:grid-cols-2">
          <Academic />
          <Experience />
        </div>
        <Additional />
      </div>
      <Footer />
    </div>
  );
}

export default App;
