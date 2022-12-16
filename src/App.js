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
import { PageFiveAddWithRouter } from './components/Host/AddHouse/PageFiveAdd';
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
import SigninWithRouter from "./components/Signin";
import Slider from "./components/Slider";
import Protected from './Protected';
import MoreDetails from "./components/MoreDetails";
import CreativeHeaven from './components/Filters/CreativeHeaven';
import Apartment from './components/Filters/Apartment';
import Bungalow from './components/Filters/Bungalow';
import Mansion from './components/Filters/Mansion';
import Villa from './components/Filters/Villa';
import Palace from './components/Filters/Palace';
import Castle from './components/Filters/Castle';
import SplitHouse from './components/Filters/SplitHouse';
import Tower from './components/Filters/Tower';
import SplitLevel from './components/Filters/SplitLevel';
import Ranch from './components/Filters/Ranch';
import IHouse from './components/Filters/IHouse';
import LongHouse from './components/Filters/LongHouse';
import HouseBarn from './components/Filters/HouseBarn';
import TownHouse from './components/Filters/TownHouse';
import Condominium from './components/Filters/Condominium';
import Duplex from './components/Filters/Duplex';
import Courtyard from './components/Filters/Courtyard';
import SnoutHouse from './components/Filters/SnoutHouse';
import Octagon from './components/Filters/Octagon';
import MobileHome from './components/Filters/MobileHome';
import ModularBuilding from './components/Filters/ModularBuilding';
import Cottage from './components/Filters/Cottage';
import TerracedHouse from './components/Filters/TerracedHouse';
import FamilyHomes from './components/Filters/FamilyHomes';
import GableFront from './components/Filters/GableFront';
import EditFive from './components/Host/Edits/EditFive';
import HostReviews from './components/HostReviews';
import TenantsReview from './components/Host/TenantReview';
import AllhouseImageTwo from './components/AllHouseImagesTwo';
import AllPayments from './components/Admin/AllPayments';

// import Home from './components/Home';
const LazyHome = React.lazy(() => import('./components/Home'))

// import BecomeAHost from "./components/BecomeAHost";
const LazyBecomeAHost = React.lazy(() => import('./components/BecomeAHost'))

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/tenant-review" element={ <TenantsReview /> }>
              <Route exact path=":id" element={ <TenantsReview /> } />
            </Route>
            
            <Route exact path="/host-reviews" element={ <HostReviews /> }>
              <Route exact path=":id" element={ <HostReviews /> } />
            </Route>

            <Route exact path="/gable-front" element={ <GableFront /> } />
            <Route exact path="/single-family-homes" element={ <FamilyHomes /> } />
            <Route exact path="/terraced-house" element={ <TerracedHouse /> } />
            <Route exact path="/cottage" element={ <Cottage /> } />
            <Route exact path="/modular-building" element={ <ModularBuilding /> } />
            <Route exact path="/mobile-home" element={ <MobileHome /> } />
            <Route exact path="/octagon" element={ <Octagon /> } />
            <Route exact path="/snout-house" element={ <SnoutHouse /> } />
            <Route exact path="/courtyard" element={ <Courtyard /> } />
            <Route exact path="/duplex" element={ <Duplex /> } />
            <Route exact path="/condominium" element={ <Condominium /> } />
            <Route exact path="/town-house" element={ <TownHouse /> } />
            <Route exact path="/house-barn" element={ <HouseBarn /> } />
            <Route exact path="/long-house" element={ <LongHouse /> } />
            <Route exact path="/i-house" element={ <IHouse /> } />
            <Route exact path="/ranch" element={ <Ranch /> } />
            <Route exact path="/split-level" element={ <SplitLevel /> } />
            <Route exact path="/tower" element={ <Tower /> } />
            <Route exact path="/split-house" element={ <SplitHouse /> } />
            <Route exact path="/castle" element={ <Castle /> } />
            <Route exact path="/palace" element={ <Palace /> } />
            <Route exact path="/villa" element={ <Villa /> } />
            <Route exact path="/mansion" element={ <Mansion /> } />
            <Route exact path="/bungalow" element={ <Bungalow /> } />
            <Route exact path="/apartments" element={ <Apartment /> } />
            <Route exact path="/creative-heaven" element={ <CreativeHeaven /> } />

            <Route exact path="/customer-settings" element={ 
              <Protected Cmp={CustomerSettings} />
             } />

            <Route exact path="/host-settings" element={ 
              <Protected Cmp={HostSettings} />
             } />

            <Route exact path="/tenants-details" element={ 
              <Protected Cmp={TenantsDetails} />
             } />

             
            <Route exact path="/back-third" element={ 
              <Protected Cmp={BackThree} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={BackThree} />
              } />
             </Route>


            <Route exact path="/back-second" element={ 
              <Protected Cmp={BackSecond} /> }>
              
              <Route exact path=":id" element={ 
                <Protected Cmp={BackSecond} /> } />
            </Route>


            <Route exact path="/back-first" element={ 
              <Protected Cmp={BackFirst} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={BackFirst} />
              } />
             </Route>


            <Route exact path="/forgot-password" element={ <ForgotPassword /> } />


            <Route exact path="/*" element={ <PageNotFound /> } />


            <Route exact path="/host-houses" element={ 
              <Protected Cmp={HostHouses} />
             } />


            <Route exact path="/all-house-images" element={ 
              <AllhouseImage />
             }>
              <Route exact path=":id" element={ 
                <AllhouseImage />
              } />
             </Route>


             <Route exact path="/all-house-images-when-booking" element={ 
              <AllhouseImageTwo />
             }>
              <Route exact path=":id" element={ 
                <AllhouseImageTwo />
              } />
             </Route>


            <Route exact path="/edit-admin-third" element={ 
              <Protected Cmp={EditAdminThird} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={EditAdminThird} />
              } />
             </Route>


            <Route exact path="/edit-admin-fourth" element={ 
              <Protected Cmp={EditAdminFourth} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={EditAdminFourth} />
              } />
             </Route>


            <Route exact path="/edit-admin-second" element={ 
              <Protected Cmp={EditAdminSecond} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={EditAdminSecond} />
              } />
             </Route>


             <Route exact path="/all-payments" element={ 
              <Protected Cmp={AllPayments} />
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


            <Route exact path="/customer-house-room-checkout-with-bank" element={ 
              <Protected Cmp={BankCard} />
             }>
              <Route exact path=":paramaId" element={ 
                <Protected Cmp={BankCard} />
              } />
             </Route>


            <Route exact path="/customer-house-room-checkout" element={ 
              <Protected Cmp={Checkout} /> }>
                <Route exact path=":paramaId" element={ 
                  <Protected Cmp={Checkout} /> } />
            </Route>


            <Route exact path="/customer-house-room-reservation" element={ 
              <Protected Cmp={Reserve} />
             }>
              <Route exact path=":paramaId" element={ 
                <Protected Cmp={Reserve} />
              } />
             </Route>


            <Route exact path="/customer-second-page" element={ 
              <Protected Cmp={CustomerSecond} />
             } />


            <Route exact path="/customer-main-account" element={ 
              <Protected Cmp={CustomerFirst} />
             } />


             <Route exact path="/edit-five" element={ 
              <Protected Cmp={EditFive} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={EditFive} />
              } />
             </Route>


            <Route exact path="/edit-four" element={ 
              <Protected Cmp={EditFourth} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={EditFourth} />
              } />
             </Route>


            <Route exact path="/edit-third" element={ 
              <Protected Cmp={EditThird} />
             }>
             <Route exact path=":id" element={ 
              <Protected Cmp={EditThird} />
             } />
             </Route>


            <Route exact path="/edit-Second" element={ 
              <Protected Cmp={EditSecond} />
             }>
              <Route exact path=":id" element={ 
                <Protected Cmp={EditSecond} />
              } />
             </Route>

            <Route exact path="/edit-first" element={ 
              <Protected Cmp={EditFirst} />
             }> 
              <Route exact path=":id" element={ 
                <Protected Cmp={EditFirst} />
              } /> 
             </Route>

             <Route exact path="/add-house-host-page-five" element={ 
              <Protected Cmp={PageFiveAddWithRouter} />
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


            <Route exact path="/more-details" element={
                <MoreDetails />
            }>
               
            </Route>

            <Route exact path="/slider" element={ <Slider /> } />

            <Route exact path="/sign-in" element={ <SigninWithRouter /> } />

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
