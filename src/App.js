import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import AdminDashboard from "./components/AdminDashboard";
import BecomeAHost from "./components/BecomeAHost";
import ExploreNearby from "./components/ExploreNearby";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AddHouse from "./components/Host/AddHouse/AddHouse";
import PageFourAdd from "./components/Host/AddHouse/PageFourAdd";
import PageThreeAdd from "./components/Host/AddHouse/PageThreeAdd";
import PageTwoAdd from "./components/Host/AddHouse/PageTwoAdd";
import HostDashboard from "./components/HostDashboard";
import LoginUser from "./components/LoginUser";
import MainHostAccount from "./components/MainHostAccount";
import MoreDetails from "./components/MoreDetails";
import SearchPage from "./components/SearchPage";
import SignIn from "./components/Signin";
import Slider from "./components/Slider";


function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/add-house-host-page-four" element={ <PageFourAdd /> } />
            <Route exact path="/add-house-host-page-three" element={ <PageThreeAdd /> } />
            <Route exact path="/add-house-host-page-two" element={ <PageTwoAdd /> } />
            <Route exact path="/add-house-host" element={ <AddHouse />} />
            <Route exact path="/main-host-account" element={ <MainHostAccount />} />
            <Route exact path="/more-details" element={ <MoreDetails /> } />
            <Route exact path="/slider" element={ <Slider /> } />
            <Route exact path="/sign-in" element={ <SignIn /> } />
            <Route exact path="/admin-dashboard" element={ <AdminDashboard /> } />
            <Route exact path="/login-user" element={ <LoginUser /> }  />
            <Route exact path="/become-a-host" element={ <HostDashboard /> } />
            <Route exact path="/become-a-host-register" element={ <BecomeAHost /> } />
            <Route exact path="/search-page" element={ <SearchPage /> } />
            <Route exact path="/explore-nearby" element={ <ExploreNearby /> } />
            <Route exact path="/" element={ <Home /> } />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
