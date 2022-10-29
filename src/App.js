import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import AdminFifth from './components/Admin/AdminFifth';
import AdminFirst from "./components/Admin/AdminFirst";
import AdminFourth from './components/Admin/AdminFourth';
import AdminSecond from './components/Admin/AdminSecond';
import AdminThird from './components/Admin/AdminThird';
import EditAdminFourth from './components/Admin/EditAdminFourth';
import EditAdminSecond from './components/Admin/EditAdminSecond';
import EditAdminThird from './components/Admin/EditAdminThird';
import AllhouseImage from './components/AllhouseImage';
import CircularLoader from './components/CircularLoader';
import BankCard from "./components/Customer/BankCard";
import Checkout from "./components/Customer/Checkout";
import CustomerFirst from "./components/Customer/CustomerFirst";
import CustomerProfile from "./components/Customer/CustomerProfile";
import CustomerSecond from "./components/Customer/CustomerSecond";
import CustomerSettings from './components/Customer/CustomerSettings';
import Reserve from "./components/Customer/Reserve";
import ExploreNearby from "./components/ExploreNearby";
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/Header';
import {AddHouseWithRouter} from "./components/Host/AddHouse/AddHouse";
import {PageFourAddWithRouter} from "./components/Host/AddHouse/PageFourAdd";
import {PageThreeAddWithRouter} from "./components/Host/AddHouse/PageThreeAdd";
import {PageTwoAddWithRouter} from "./components/Host/AddHouse/PageTwoAdd";
import BackFirst from './components/Host/Edits/Back/BackFirst';
import BackSecond from './components/Host/Edits/Back/BackSecond';
import BackThree from './components/Host/Edits/Back/BackThree';
import EditFirst from "./components/Host/Edits/EditFirst";
import EditFourth from "./components/Host/Edits/EditFourth";
import EditSecond from "./components/Host/Edits/EditSecond";
import EditThird from "./components/Host/Edits/EditThird";
import HostProfile from "./components/Host/Edits/HostProfile";
import HostSettings from './components/Host/Edits/HostSettings';
import HostHouses from './components/Host/HostHouses';
import TenantsDetails from './components/Host/TenantsDetails';
import HostDashboard from "./components/HostDashboard";
import LoginUser from "./components/LoginUser";
import MainHostAccount from "./components/MainHostAccount";
import PageNotFound from './components/PageNotFound';
import SearchPage from "./components/SearchPage";
import SignIn from "./components/Signin";
import Slider from "./components/Slider";
import Protected from './Protected';

// import Home from './components/Home';
const LazyHome = React.lazy(() => import('./components/Home'))

// import MoreDetails from "./components/MoreDetails";
const LazyMoreDetails = React.lazy(() => import('./components/MoreDetails'))

// import BecomeAHost from "./components/BecomeAHost";
const LazyBecomeAHost = React.lazy(() => import('./components/BecomeAHost'))

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/customer-settings" element={ 
              <Protected Cmp={CustomerSettings} />
             } />
            <Route exact path="/host-settings" element={ 
              <Protected Cmp={HostSettings} />
             } />
            <Route exact path="/tenants-details" element={ 
              <Protected Cmp={TenantsDetails} />
             } />
            <Route exact path="/back-third/:id" element={ 
              <Protected Cmp={BackThree} />
             } />
            <Route exact path="/back-second/:id" element={ 
              <Protected Cmp={BackSecond} /> } />
            <Route exact path="/back-first/:id" element={ 
              <Protected Cmp={BackFirst} />
             } />
            <Route exact path="/forgot-password" element={ <ForgotPassword /> } />
            <Route exact path="/*" element={ <PageNotFound /> } />
            <Route exact path="/host-houses" element={ 
              <Protected Cmp={HostHouses} />
             } />
            <Route exact path="/all-house-images/:id" element={ 
              <AllhouseImage />
             } />
            <Route exact path="/edit-admin-third/:id" element={ 
              <Protected Cmp={EditAdminThird} />
             } />
            <Route exact path="/edit-admin-fourth/:id" element={ 
              <Protected Cmp={EditAdminFourth} />
             } />
            <Route exact path="/edit-admin-second/:id" element={ 
              <Protected Cmp={EditAdminSecond} />
             } />
             <Route exact path="/admin-fifth" element={ 
              <Protected Cmp={AdminFifth} />
             } />
            <Route exact path="/admin-fourth" element={ 
              <Protected Cmp={AdminFourth} />
             } />
            <Route exact path="/admin-third" element={ 
              <Protected Cmp={AdminThird} />
             } />
            <Route exact path="/admin-second" element={ 
              <Protected Cmp={AdminSecond} />
             } />
            <Route exact path="/host-profile" element={ 
              <Protected Cmp={HostProfile} />
             } />
            <Route exact path="/customer-profile" element={ 
              <Protected Cmp={CustomerProfile} />
             } />
            <Route exact path="/customer-house-room-checkout-with-bank/:paramaId" element={ 
              <Protected Cmp={BankCard} />
             } />
            <Route exact path="/customer-house-room-checkout/:paramaId" element={ 
              <Protected Cmp={Checkout} /> } />
            <Route exact path="/customer-house-room-reservation/:paramaId" element={ 
              <Protected Cmp={Reserve} />
             } />
            <Route exact path="/customer-second-page" element={ 
              <Protected Cmp={CustomerSecond} />
             } />
            <Route exact path="/customer-main-account" element={ 
              <Protected Cmp={CustomerFirst} />
             } />
            <Route exact path="/edit-four/:id" element={ 
              <Protected Cmp={EditFourth} />
             } />
            <Route exact path="/edit-third/:id" element={ 
              <Protected Cmp={EditThird} />
             } />
            <Route exact path="/edit-Second/:id" element={ 
              <Protected Cmp={EditSecond} />
             } />
            <Route exact path="/edit-first/:id" element={ 
              <Protected Cmp={EditFirst} />
             } />
            <Route exact path="/add-house-host-page-four" element={ 
              <Protected Cmp={PageFourAddWithRouter} />
             } />
            <Route exact path="/add-house-host-page-three" element={ 
              <Protected Cmp={PageThreeAddWithRouter}/>
             } />
            <Route exact path="/add-house-host-page-two" element={ 
              <Protected Cmp={PageTwoAddWithRouter} /> } />
            <Route exact path="/add-house-host" element={ 
              <Protected Cmp={AddHouseWithRouter} />
              } />
            <Route exact path="/main-host-account" element={ 
              <Protected Cmp={MainHostAccount} />} />
            <Route exact path="/more-details/:id" element={
              <React.Suspense fallback={<CircularLoader />}>
                <LazyMoreDetails />
              </React.Suspense>
               } />
            <Route exact path="/slider" element={ <Slider /> } />
            <Route exact path="/sign-in" element={ <SignIn /> } />
            <Route exact path="/admin-dashboard" element={ <Protected Cmp={AdminFirst} /> } />
            <Route exact path="/login-user" element={ <LoginUser /> }  />
            <Route exact path="/become-a-host" element={ <HostDashboard /> } />
            <Route exact path="/become-a-host-register" element={ 
              <React.Suspense fallback={<CircularLoader />}>
                <LazyBecomeAHost />
              </React.Suspense>
             } />
            <Route exact path="/search-page" element={ <SearchPage /> } />
            <Route exact path="/explore-nearby" element={ <ExploreNearby /> } />
            <Route exact path="/" element={ 
              <React.Suspense fallback={<CircularLoader />}>
                <LazyHome />
              </React.Suspense>
            } />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
