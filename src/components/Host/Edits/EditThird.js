import React, {useState, useEffect} from 'react'
import './EditThird.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom'

import { FaBath, FaToiletPaper, FaTv, FaTemperatureHigh, FaWifi, FaBreadSlice, FaPencilRuler, FaUtensils, FaToilet, FaWineBottle, FaBabyCarriage } from "react-icons/fa";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import IronIcon from '@mui/icons-material/Iron';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import BlenderIcon from '@mui/icons-material/Blender';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import BalconyIcon from '@mui/icons-material/Balcony';
import YardIcon from '@mui/icons-material/Yard';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Drier from '../../Images/drier.jpg'
import KitchenIcon from '@mui/icons-material/Kitchen';

import BaseURL from '../../BaseUrl';

import swal from 'sweetalert';
import { BeachAccessOutlined, Camera, ChildCare, Grass, HeatPump, Landscape, MoreHoriz, ShoppingBag, Shower, SportsSoccer } from '@mui/icons-material';

function EditThird() {
    const [searchParams] = useSearchParams();
    
    var paramaId = searchParams.get('id');

    var title = searchParams.get('name');

  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [imageToBe, setImageToBe] = useState(null);
  const [userId] = useState(userData.data.id);
  const [editBaths, setEditBaths] = useState(0);
  const [editHair, setEditHair] = useState("0");
  const [editWasher, setEditWasher] = useState("0");
  const [editDrier, setEditDrier] = useState("0");
  const [editEssentials, setEditEssentials] = useState("0");
  const [editIron, setEditIron] = useState("0");
  const [editTV, setEditTV] = useState("0");
  const [editAir, setEditAir] = useState("0");
  const [editHeating, setEditHeating] = useState("0");
  const [editWifi, setEditWifi] = useState("0");
  const [editRefrigerator, setEditRefrigerator] = useState("0");
  const [editMicrowave, setEditMicrowave] = useState("0");
  const [editDishes, setEditDishes] = useState("0");
  const [editKitchen, setEditKitchen] = useState("0");
  const [editBlender, setEditBlender] = useState("0");
  const [editCoffee, setEditCoffee] = useState("0");
  const [editFire, setEditFire] = useState("0");
  const [editBread, setEditBread] = useState("0");
  const [editPatio, setEditPatio] = useState("0");
  const [editBackyard, setEditBackyard] = useState("0");
  const [editOutdoor, setEditOutdoor] = useState("0");
  const [editBeachEssentials, setEditBeachEssentials] = useState("0");
  const [editPool, setEditPool] = useState(0);
  const [editParking, setEditParking] = useState("0");
  const [editLong, setEditLong] = useState("0");
  const [editPrivate, setEditPrivate] = useState("0");

  const [editOffice, setEditOffice] = useState("0");
  const [editOven, setEditOven] = useState("0");
  const [editChef, setEditChef] = useState("0");
  const [editShopping, setEditShopping] = useState("0");
  const [editGames, setEditGames] = useState("0");
  const [editFarm, setEditFarm] = useState("0");
  const [editRanch, setEditRanch] = useState("0");
  const [editChildren, setEditChildren] = useState("0");
  const [editBeach, setEditBeach] = useState("0");
  const [editToilet, setEditToilet] = useState("0");
  const [editShower, setEditShower] = useState("0");
  const [editCinema, setEditCinema] = useState("0");

  const [editMiniBar, setEditMiniBar] = useState("0");
  const [editBabyCot, setEditBabyCot] = useState("0");

  const [boxChecked, setBoxChecked] = useState(false);
  const [boxChecked2, setBoxChecked2] = useState(false);
  const [boxChecked3, setBoxChecked3] = useState(false);
  const [boxChecked4, setBoxChecked4] = useState(false);
  const [boxChecked5, setBoxChecked5] = useState(false);
  const [boxChecked6, setBoxChecked6] = useState(false);
  const [boxChecked7, setBoxChecked7] = useState(false);
  const [boxChecked8, setBoxChecked8] = useState(false);
  const [boxChecked9, setBoxChecked9] = useState(false);
  const [boxChecked10, setBoxChecked10] = useState(false);
  const [boxChecked11, setBoxChecked11] = useState(false);
  const [boxChecked12, setBoxChecked12] = useState(false);
  const [boxChecked13, setBoxChecked13] = useState(false);
  const [boxChecked14, setBoxChecked14] = useState(false);
  const [boxChecked15, setBoxChecked15] = useState(false);
  const [boxChecked16, setBoxChecked16] = useState(false);
  const [boxChecked17, setBoxChecked17] = useState(false);
  const [boxChecked18, setBoxChecked18] = useState(false);
  const [boxChecked19, setBoxChecked19] = useState(false);
  const [boxChecked20, setBoxChecked20] = useState(false);
  const [boxChecked21, setBoxChecked21] = useState(false);
  const [boxChecked22, setBoxChecked22] = useState(false);
  const [boxChecked23, setBoxChecked23] = useState(false);
  const [boxChecked24, setBoxChecked24] = useState(false);
  const [boxChecked25, setBoxChecked25] = useState(false);
  const [boxChecked26, setBoxChecked26] = useState(false);

  const [boxChecked28, setBoxChecked28] = useState(false);
  const [boxChecked29, setBoxChecked29] = useState(false);
  const [boxChecked30, setBoxChecked30] = useState(false);
  const [boxChecked31, setBoxChecked31] = useState(false);
  const [boxChecked32, setBoxChecked32] = useState(false);
  const [boxChecked33, setBoxChecked33] = useState(false);
  const [boxChecked34, setBoxChecked34] = useState(false);
  const [boxChecked35, setBoxChecked35] = useState(false);
  const [boxChecked36, setBoxChecked36] = useState(false);
  const [boxChecked37, setBoxChecked37] = useState(false);
  const [boxChecked38, setBoxChecked38] = useState(false);
  const [boxChecked39, setBoxChecked39] = useState(false);

  const [boxChecked40, setBoxChecked40] = useState(false);
  const [boxChecked41, setBoxChecked41] = useState(false);

  const Navigate = useNavigate();


  useEffect(()=>{
    const realTwo = async () => {
        const love = await axios.get(`${BaseURL}/api/get-stars-details/${paramaId}`);
        if(love.data.status === 200){
        setEditBaths(love.data.stars.bathtub);
        if(love.data.stars.bathtub === "1"){
            setBoxChecked(true);
        }
        setEditHair(love.data.stars.hair_drier);
        if(love.data.stars.hair_drier === "1"){
            setBoxChecked2(true);
        }
        setEditWasher(love.data.stars.washer);
        if(love.data.stars.washer === "1"){
            setBoxChecked3(true);
        }
        setEditDrier(love.data.stars.drier);
        if(love.data.stars.drier === "1"){
            setBoxChecked4(true);
        }
        setEditEssentials(love.data.stars.essentials);
        if(love.data.stars.essentials === "1"){
            setBoxChecked5(true);
        }
        setEditIron(love.data.stars.iron);
        if(love.data.stars.iron === "1"){
            setBoxChecked6(true);
        }
        setEditTV(love.data.stars.tv);
        if(love.data.stars.tv === "1"){
            setBoxChecked7(true);
        }
        setEditAir(love.data.stars.air_condition)
        if(love.data.stars.air_condition === "1"){
            setBoxChecked8(true);
        }
        setEditHeating(love.data.stars.heating);
        if(love.data.stars.heating === "1"){
            setBoxChecked9(true);
        }
        setEditWifi(love.data.stars.wifi);
        if(love.data.stars.wifi === "1"){
            setBoxChecked10(true);
        }

        setEditOffice(love.data.stars.office_equipment)
        if(love.data.stars.office_equipment === "1"){
            setBoxChecked28(true);
        }
        setEditOven(love.data.stars.oven)
        if(love.data.stars.oven === "1"){
            setBoxChecked29(true);
        }
        setEditChef(love.data.stars.chef)
        if(love.data.stars.chef === "1"){
            setBoxChecked30(true);
        }
        setEditShopping(love.data.stars.shopping)
        if(love.data.stars.shopping === "1"){
            setBoxChecked31(true);
        }
        setEditGames(love.data.stars.games_court)
        if(love.data.stars.games_court === "1"){
            setBoxChecked32(true);
        }
        setEditFarm(love.data.stars.farm)
        if(love.data.stars.farm === "1"){
            setBoxChecked33(true);
        }
        setEditRanch(love.data.stars.ranch)
        if(love.data.stars.ranch === "1"){
            setBoxChecked34(true);
        }
        setEditChildren(love.data.stars.children_play)
        if(love.data.stars.children_play === "1"){
            setBoxChecked35(true);
        }
        setEditBeach(love.data.stars.beach_front)
        if(love.data.stars.beach_front === "1"){
            setBoxChecked36(true);
        }
        setEditToilet(love.data.stars.toilet)
        if(love.data.stars.toilet === "1"){
            setBoxChecked37(true);
        }
        setEditShower(love.data.stars.shower)
        if(love.data.stars.shower === "1"){
            setBoxChecked38(true);
        }
        setEditCinema(love.data.stars.cinema)
        if(love.data.stars.cinema === "1"){
            setBoxChecked39(true);
        }

        setEditRefrigerator(love.data.stars.refrigeration);
        if(love.data.stars.refrigeration === "1"){
            setBoxChecked11(true);
        }
        setEditMicrowave(love.data.stars.microwave);
        if(love.data.stars.microwave === "1"){
            setBoxChecked12(true);
        }
        setEditDishes(love.data.stars.dishes_silverware);
        if(love.data.stars.dishes_silverware === "1"){
            setBoxChecked13(true);
        }
        setEditKitchen(love.data.stars.kitchen);
        if(love.data.stars.kitchen === "1"){
            setBoxChecked14(true);
        }
        setEditBlender(love.data.stars.blender);
        if(love.data.stars.blender === "1"){
            setBoxChecked15(true);
        }
        setEditCoffee(love.data.stars.coffee_maker);
        if(love.data.stars.coffee_maker === "1"){
            setBoxChecked16(true);
        }
        setEditFire(love.data.stars.fire_extinguisher);
        if(love.data.stars.fire_extinguisher === "1"){
            setBoxChecked17(true);
        }
        setEditBread(love.data.stars.bread_toaster);
        if(love.data.stars.bread_toaster === "1"){
            setBoxChecked18(true);
        }
        setEditPatio(love.data.stars.patio_balcony);
        if(love.data.stars.patio_balcony === "1"){
            setBoxChecked19(true);
        }
        setEditBackyard(love.data.stars.backyard);
        if(love.data.stars.backyard === "1"){
            setBoxChecked20(true);
        }
        setEditOutdoor(love.data.stars.outdoor_grill);
        if(love.data.stars.outdoor_grill === "1"){
            setBoxChecked21(true);
        }
        setEditBeachEssentials(love.data.stars.beach_essential);
        if(love.data.stars.beach_essential === "1"){
            setBoxChecked22(true);
        }
        setEditPool(love.data.stars.pool);
        if(love.data.stars.pool === "1"){
            setBoxChecked23(true);
        }
        setEditParking(love.data.stars.parking);
        if(love.data.stars.parking === "1"){
            setBoxChecked24(true);
        }
        setEditLong(love.data.stars.long_term);
        if(love.data.stars.long_term === "1"){
            setBoxChecked25(true);
        }
        setEditPrivate(love.data.stars.private_entrance);
        if(love.data.stars.private_entrance === "1"){
            setBoxChecked26(true);
        }

        setEditMiniBar(love.data.stars.mini_bar);
        if(love.data.stars.mini_bar === "1"){
            setBoxChecked40(true);
        }

        setEditBabyCot(love.data.stars.baby_cot);
        if(love.data.stars.baby_cot === "1"){
            setBoxChecked41(true);
        }
        }
      }
    realTwo();
  },[paramaId])


  useEffect(()=>{
    const realThree = async () => {
        const SendId = userId;
        const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
        setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`)
      }
    realThree();
  },[userId]);

  const handleBaths = () => {
    if(editBaths === "1"){
        setBoxChecked(false);
        setEditBaths("0");
    }
    if(editBaths === "0"){
        setBoxChecked(true);
        setEditBaths("1");
    }
  }

  const handleHair = () => {
    if(editHair === "1"){
        setEditHair("0");
        setBoxChecked2(false);
    }
    if(editHair === "0"){
        setEditHair("1");
        setBoxChecked2(true);
    }
  }

  const handleWasher = () => {
    if(editWasher === "1"){
        setEditWasher("0");
        setBoxChecked3(false);
    }
    if(editWasher === "0"){
        setEditWasher("1");
        setBoxChecked3(true);
    }
  }

  const handleDrier = () => {
    if(editDrier === "1"){
        setEditDrier("0");
        setBoxChecked4(false);
    }
    if(editDrier === "0"){
        setEditDrier("1");
        setBoxChecked4(true);
    }
  }

  const handleEssentials = () => {
    if(editEssentials === "1"){
        setEditEssentials("0");
        setBoxChecked5(false);
    }
    if(editEssentials === "0"){
        setEditEssentials("1");
        setBoxChecked5(true);
    }
  }

  const handleIron = () => {
    if(editIron === "1"){
        setEditIron("0");
        setBoxChecked6(false);
    }
    if(editIron === "0"){
        setEditIron("1");
        setBoxChecked6(true);
    }
  }

  const handleTv = () => {
    if(editTV === "1"){
        setEditTV("0");
        setBoxChecked7(false);
    }
    if(editTV === "0"){
        setEditTV("1");
        setBoxChecked7(true);
    }
  }

  const handleAir = () => {
    if(editAir === "1"){
        setEditAir("0");
        setBoxChecked8(false);
    }
    if(editAir === "0"){
        setEditAir("1");
        setBoxChecked8(true);
    }
  }

  const handleHeating = () => {
    if(editHeating === "1"){
        setEditHeating("0");
        setBoxChecked9(false);
    }
    if(editHeating === "0"){
        setEditHeating("1");
        setBoxChecked9(true);
    }
  }

  const handleWifi = () => {
    if(editWifi === "1"){
        setEditWifi("0");
        setBoxChecked10(false);
    }
    if(editWifi === "0"){
        setEditWifi("1");
        setBoxChecked10(true);
    }
  }

  const handleRefrigerator = () => {
    if(editRefrigerator === "1"){
        setEditRefrigerator("0");
        setBoxChecked11(false);
    }
    if(editRefrigerator === "0"){
        setEditRefrigerator("1");
        setBoxChecked11(true);
    }
  }
  const handleMicrowave = () => {
    if(editMicrowave === "1"){
        setEditMicrowave("0");
        setBoxChecked12(false);
    }
    if(editMicrowave === "0"){
        setEditMicrowave("1");
        setBoxChecked12(true);
    }
  }

  const handleDishes = () => {
    if(editDishes === "1"){
        setEditDishes("0");
        setBoxChecked13(false);
    }
    if(editDishes === "0"){
        setEditDishes("1");
        setBoxChecked13(true);
    }
  }

  const handleKitchen = () => {
    if(editKitchen === "1"){
        setEditKitchen("0");
        setBoxChecked14(false);
    }
    if(editKitchen === "0"){
        setEditKitchen("1");
        setBoxChecked14(true);
    }
  }

  const handleBlender = () => {
    if(editBlender === "1"){
        setEditBlender("0");
        setBoxChecked15(false);
    }
    if(editBlender === "0"){
        setEditBlender("1");
        setBoxChecked15(true);
    }
  }

  const handleCoffee = () => {
    if(editCoffee === "1"){
        setEditCoffee("0");
        setBoxChecked16(false);
    }
    if(editCoffee === "0"){
        setEditCoffee("1");
        setBoxChecked16(true);
    }
  }

  const handleFire = () => {
    if(editFire === "1"){
        setEditFire("0");
        setBoxChecked17(false);
    }
    if(editFire === "0"){
        setEditFire("1");
        setBoxChecked17(true);
    }
  }

  const handleBread = () => {
    if(editBread === "1"){
        setEditBread("0");
        setBoxChecked18(false);
    }
    if(editBread === "0"){
        setEditBread("1");
        setBoxChecked18(true);
    }
  }

  const handlePatio = () => {
    if(editPatio === "1"){
        setEditPatio("0");
        setBoxChecked19(false);
    }
    if(editPatio === "0"){
        setEditPatio("1");
        setBoxChecked19(true);
    }
  }

  const handleBackyard = () => {
    if(editBackyard === "1"){
        setEditBackyard("0");
        setBoxChecked20(false);
    }
    if(editBackyard === "0"){
        setEditBackyard("1");
        setBoxChecked20(true);
    }
  }

  const handleOutDoor = () => {
    if(editOutdoor === "1"){
        setEditOutdoor("0");
        setBoxChecked21(false);
    }
    if(editOutdoor === "0"){
        setEditOutdoor("1");
        setBoxChecked21(true);
    }
  }

  const handleBeachEssentials = () => {
    if(editBeachEssentials === "1"){
        setEditBeachEssentials("0");
        setBoxChecked22(false);
    }
    if(editBeachEssentials === "0"){
        setEditBeachEssentials("1");
        setBoxChecked22(true);
    }
  }

  const handlePool = () => {
    if(editPool === "1"){
        setEditPool("0");
        setBoxChecked23(false);
    }
    if(editPool === "0"){
        setEditPool("1");
        setBoxChecked23(true);
    }
  }

  const handleParking = () => {
    if(editParking === "1"){
        setEditParking("0");
        setBoxChecked24(false);
    }
    if(editParking === "0"){
        setEditParking("1");
        setBoxChecked24(true);
    }
  }

  const handleLong = () => {
    if(editLong === "1"){
        setEditLong("0");
        setBoxChecked25(false);
    }
    if(editLong === "0"){
        setEditLong("1");
        setBoxChecked25(true);
    }
  }

  const handlePrivate = () => {
    if(editPrivate === "1"){
        setEditPrivate("0");
        setBoxChecked26(false);
    }
    if(editPrivate === "0"){
        setEditPrivate("1");
        setBoxChecked26(true);
    }
  }

  const handleOffice = () => {
    if(editOffice === "1"){
        setEditOffice("0");
        setBoxChecked28(false);
    }
    if(editOffice === "0"){
        setEditOffice("1");
        setBoxChecked28(true);
    }
  }

  const handleOven = () => {
    if(editOven === "1"){
        setEditOven("0");
        setBoxChecked29(false);
    }
    if(editOven === "0"){
        setEditOven("1");
        setBoxChecked29(true);
    }
  }

  const handleChef = () => {
    if(editChef === "1"){
        setEditChef("0");
        setBoxChecked30(false);
    }
    if(editChef === "0"){
        setEditChef("1");
        setBoxChecked30(true);
    }
  }

  const handleShopping = () => {
    if(editShopping === "1"){
        setEditShopping("0");
        setBoxChecked31(false);
    }
    if(editShopping === "0"){
        setEditShopping("1");
        setBoxChecked31(true);
    }
  }

  const handleGames = () => {
    if(editGames === "1"){
        setEditGames("0");
        setBoxChecked32(false);
    }
    if(editGames === "0"){
        setEditGames("1");
        setBoxChecked32(true);
    }
  }

  const handleFarm = () => {
    if(editFarm === "1"){
        setEditFarm("0");
        setBoxChecked33(false);
    }
    if(editFarm === "0"){
        setEditFarm("1");
        setBoxChecked33(true);
    }
  }

  const handleRanch = () => {
    if(editRanch === "1"){
        setEditRanch("0");
        setBoxChecked34(false);
    }
    if(editRanch === "0"){
        setEditRanch("1");
        setBoxChecked34(true);
    }
  }

  const handleChildren = () => {
    if(editChildren === "1"){
        setEditChildren("0");
        setBoxChecked35(false);
    }
    if(editChildren === "0"){
        setEditChildren("1");
        setBoxChecked35(true);
    }
  }

  const handleBeach = () => {
    if(editBeach === "1"){
        setEditBeach("0");
        setBoxChecked36(false);
    }
    if(editBeach === "0"){
        setEditBeach("1");
        setBoxChecked36(true);
    }
  }

  const handleToilet = () => {
    if(editToilet === "1"){
        setEditToilet("0");
        setBoxChecked37(false);
    }
    if(editToilet === "0"){
        setEditToilet("1");
        setBoxChecked37(true);
    }
  }

  const handleShower = () => {
    if(editShower === "1"){
        setEditShower("0");
        setBoxChecked38(false);
    }
    if(editShower === "0"){
        setEditShower("1");
        setBoxChecked38(true);
    }
  }

  const handleCinema = () => {
    if(editCinema === "1"){
        setEditCinema("0");
        setBoxChecked39(false);
    }
    if(editCinema === "0"){
        setEditCinema("1");
        setBoxChecked39(true);
    }
  }

  const handleMiniBar = () => {
    if(editMiniBar === "1"){
        setEditMiniBar("0");
        setBoxChecked40(false);
    }
    if(editMiniBar === "0"){
        setEditMiniBar("1");
        setBoxChecked40(true);
    }
  }

  const handleBabyCot = () => {
    if(editBabyCot === "1"){
        setEditBabyCot("0");
        setBoxChecked41(false);
    }
    if(editBabyCot === "0"){
        setEditBabyCot("1");
        setBoxChecked41(true);
    }
  }

  const handleUpdate2 = (e) => {
    e.preventDefault();
    const url = `${BaseURL}/api/update-seventy_five-details/${paramaId}`;
    const data = new FormData();
    data.append('bathtub', editBaths);
    data.append('hair_drier', editHair);
    data.append('washer', editWasher);
    data.append('drier', editDrier);
    data.append('iron', editIron);
    data.append('tv', editTV);
    data.append('air_condition', editAir);
    data.append('heating', editHeating);
    data.append('wifi', editWifi);
    data.append('refrigeration', editRefrigerator);
    data.append('microwave', editMicrowave);
    data.append('dishes_silverware', editDishes);
    data.append('kitchen', editKitchen);
    data.append('blender', editBlender);
    data.append('coffee_maker', editCoffee);
    data.append('fire_extinguisher', editFire);
    data.append('bread_toaster', editBread);
    data.append('patio_balcony', editPatio);
    data.append('backyard', editBackyard);
    data.append('outdoor_grill', editOutdoor);
    data.append('beach_essential', editBeachEssentials);
    data.append('pool', editPool);
    data.append('parking', editParking);
    data.append('long_term', editLong);
    data.append('private_entrance', editPrivate);
    data.append('essentials', editEssentials);

    data.append('office_equipment', editOffice);
    data.append('oven', editOven);
    data.append('chef', editChef);
    data.append('shopping', editShopping);
    data.append('games_court', editGames);
    data.append('farm', editFarm);
    data.append('ranch', editRanch);
    data.append('children_play', editChildren);
    data.append('beach_front', editBeach);
    data.append('toilet', editToilet);
    data.append('shower', editShower);
    data.append('cinema', editCinema);

    data.append('mini_bar', editMiniBar);
    data.append('baby_cot', editBabyCot);

    data.append('userId', userId);
    data.append('house_id', paramaId);
    axios.post(url,data).then((res)=>{
        if(res.data.status === 200) {
            swal('success','house details updated','success')
            document.getElementById('updated').innerHTML = "updated";
        }
    });
  }

        const [showMenuBar, setShowMenuBar] = useState(false);

        useEffect(()=>{
            if(window.innerWidth < 1024) {
            setShowMenuBar(false)
            }
        
            if(window.innerWidth > 1024) {
            setShowMenuBar(true);
            }
        },[]);

        const handleMenuBar = () => {
            setShowMenuBar(!showMenuBar);
            
        }

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load


    const handleLogout = async () => {
        const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to logout ? if no click outside the box",
        icon: "warning",
        dangerMode: true,
    });

        if (willDelete) {
        localStorage.removeItem("user-info");
        Navigate('/');
    }
    }
    return (
      <div className='edit-third__page'>
  
          <div className='edit-third__info'>
             <div className="edit-third__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>Henry Klein</h4>
                      <p>Host</p>
                  </div>
                  <div className='editThirdMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null
                }
  
                {showMenuBar ?
              <ul className='host-navigation'>
                <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                <li style={{ backgroundColor: '#F78513' }}><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li onClick={()=> Navigate('/tenants-details')}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-profile')}>Settings</li>
                <li onClick={handleLogout}
                  className='baby'>Logout</li>
              </ul>
              :
              null
                }
             </div>
             <div className="edit-third__info-right">
              <form className="edit-third__info-right-block" encType='multipart/form-data' onSubmit={handleUpdate2}>
                <div className='edit-three-form-container'>
                    <div className='edit-three-form-container-one'>
                        <h4><strong>Bedroom</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="bathtub" checked={boxChecked} value={editBaths} onChange={handleBaths} /></div> <div className='icon-name-value-two'><span>Bathtub</span></div> <div className='icon-name-value-three'><span><FaBath /></span></div>
                        </div>

                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="toilet" checked={boxChecked37} value={editToilet} onChange={handleToilet} /></div> <div className='icon-name-value-two'><span>Toilet</span></div> <div className='icon-name-value-three'><span><FaToilet /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="shower" checked={boxChecked38} value={editShower} onChange={handleShower} /></div> <div className='icon-name-value-two'><span>Shower</span></div> <div className='icon-name-value-three'><span><Shower /></span></div>
                        </div>

                        <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                            <div className='icon-name-value-one'><input type="checkbox" name="hair_drier" checked={boxChecked2} value={editHair} onChange={handleHair} /></div> <div className='icon-name-value-two'><span>Hair Drier</span></div> <div className='icon-name-value-three'><span><img width="20px" src={Drier} alt="" /></span></div>
                        </div>
                        <h4><strong>Bedroom & Laundry</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="washer" checked={boxChecked3} value={editWasher} onChange={handleWasher} /></div> <div className='icon-name-value-two'><span>Washer</span></div> <div className='icon-name-value-three'><span><LocalLaundryServiceIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="drier" checked={boxChecked4} value={editDrier} onChange={handleDrier} /></div> <div className='icon-name-value-two'><span>Drier</span></div> <div className='icon-name-value-three'><span><DryCleaningIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="essentials" checked={boxChecked5} value={editEssentials} onChange={handleEssentials} /></div> <div className='icon-name-value-two'><span>Essentials</span></div> <div className='icon-name-value-three'><span><FaToiletPaper /></span></div>
                        </div>

                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="baby_cot" checked={boxChecked41} value={editBabyCot} onChange={handleBabyCot} /></div> <div className='icon-name-value-two'><span>Baby cot</span></div> <div className='icon-name-value-three'><span><FaBabyCarriage /></span></div>
                        </div>
                        <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                            <div className='icon-name-value-one'><input type="checkbox" name="iron" checked={boxChecked6} value={editIron} onChange={handleIron} /></div> <div className='icon-name-value-two'><span>Iron</span></div> <div className='icon-name-value-three'><span><IronIcon /></span></div>
                        </div>
                        <h4><strong>Entertainment</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="tv" checked={boxChecked7} value={editTV} onChange={handleTv} /></div> <div className='icon-name-value-two'><span>TV</span></div> <div className='icon-name-value-three'><span><FaTv /></span></div>
                        </div>

                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="mini_bar" checked={boxChecked40} value={editMiniBar} onChange={handleMiniBar} /></div> <div className='icon-name-value-two'><span>Mini bar</span></div> <div className='icon-name-value-three'><span><FaWineBottle /></span></div>
                        </div>

                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="cinema" checked={boxChecked39} value={editCinema} onChange={handleCinema} /></div> <div className='icon-name-value-two'><span>Allows photography and cinematography</span></div> <div className='icon-name-value-three'><span><Camera /></span></div>
                        </div>

                        <h4><strong>Heating & Cooling</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="air_condition" checked={boxChecked8} value={editAir} onChange={handleAir} /></div> <div className='icon-name-value-two'><span>Air condition</span></div> <div className='icon-name-value-three'><span><AcUnitIcon /></span></div>
                        </div>
                        <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                            <div className='icon-name-value-one'><input type="checkbox" name="heating" checked={boxChecked9} value={editHeating} onChange={handleHeating} /></div> <div className='icon-name-value-two'><span>Heating</span></div> <div className='icon-name-value-three'><span><FaTemperatureHigh /></span></div>
                        </div>
                        <h4><strong>Internet & Office</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="wifi" checked={boxChecked10} value={editWifi} onChange={handleWifi} /></div> <div className='icon-name-value-two'><span>wifi</span></div> <div className='icon-name-value-three'><span><FaWifi /></span></div>
                        </div>

                        <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                            <div className='icon-name-value-one'><input type="checkbox" name="office_equipment" checked={boxChecked28} value={editOffice} onChange={handleOffice} /></div> <div className='icon-name-value-two'><span>Office equipment</span></div> <div className='icon-name-value-three'><span><FaPencilRuler /></span></div>
                        </div>
                    </div>
                    <div className='edit-three-form-container-two'>
                        <h4><strong>Kitchen & Dining</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="refrigeration" checked={boxChecked11} value={editRefrigerator} onChange={handleRefrigerator} /></div> <div className='icon-name-value-two'><span>Refrigerator</span></div> <div className='icon-name-value-three'><span><KitchenIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="microwave" checked={boxChecked12} value={editMicrowave} onChange={handleMicrowave} /></div> <div className='icon-name-value-two'><span>Microwave</span></div> <div className='icon-name-value-three'><span><MicrowaveIcon /></span></div>
                        </div>

                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="oven" checked={boxChecked29} value={editOven} onChange={handleOven} /></div> <div className='icon-name-value-two'><span>Oven</span></div> <div className='icon-name-value-three'><span><HeatPump /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="dishes_silverware" checked={boxChecked13} value={editDishes} onChange={handleDishes} /></div> <div className='icon-name-value-two'><span>Dishes and Silverware</span></div> <div className='icon-name-value-three'><span><RiceBowlIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="kitchen" checked={boxChecked14} value={editKitchen} onChange={handleKitchen} /></div> <div className='icon-name-value-two'><span>Kitchen</span></div> <div className='icon-name-value-three'><span><LocalDiningIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="blender" checked={boxChecked15} value={editBlender} onChange={handleBlender} /></div> <div className='icon-name-value-two'><span>Blender</span></div> <div className='icon-name-value-three'><span><BlenderIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="coffee_maker" checked={boxChecked16} value={editCoffee} onChange={handleCoffee} /></div> <div className='icon-name-value-two'><span>Coffee maker</span></div> <div className='icon-name-value-three'><span><CoffeeMakerIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="fire_extinguisher" checked={boxChecked17} value={editFire} onChange={handleFire} /></div> <div className='icon-name-value-two'><span>Fire extinguisher</span></div> <div className='icon-name-value-three'><span><FireExtinguisherIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="bread_toaster" checked={boxChecked18} value={editBread} onChange={handleBread} /></div> <div className='icon-name-value-two'><span>Bread Toaster</span></div> <div className='icon-name-value-three'><span><FaBreadSlice /></span></div>
                        </div>

                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="chef" checked={boxChecked30} value={editChef} onChange={handleChef} /></div> <div className='icon-name-value-two'><span>Chef at a cost</span></div> <div className='icon-name-value-three'><span><FaUtensils /></span></div>
                        </div>
                        <div className='icon-name-value' style={{ borderBottom: '1px solid antiquewhite' }}>
                            <div className='icon-name-value-one'><input type="checkbox" name="shopping" checked={boxChecked31} value={editShopping} onChange={handleShopping} /></div> <div className='icon-name-value-two'><span>Shopping at an extra cost</span></div> <div className='icon-name-value-three'><span><ShoppingBag /></span></div>
                        </div>
                    </div>
                    <div className='edit-three-form-container-three'>
                        <h4><strong>Outdoor</strong></h4>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="patio_balcony" checked={boxChecked19} value={editPatio} onChange={handlePatio} /></div> <div className='icon-name-value-two'><span>Patio or balcony</span></div> <div className='icon-name-value-three'><span><BalconyIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="backyard" checked={boxChecked20} value={editBackyard} onChange={handleBackyard} /></div> <div className='icon-name-value-two'><span>Backyard</span></div> <div className='icon-name-value-three'><span><YardIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="outdoor_grill" checked={boxChecked21} value={editOutdoor} onChange={handleOutDoor} /></div> <div className='icon-name-value-two'><span>Outdoor grill</span></div> <div className='icon-name-value-three'><span><OutdoorGrillIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="beach_essential" checked={boxChecked22} value={editBeachEssentials} onChange={handleBeachEssentials} /></div> <div className='icon-name-value-two'><span>Beach essentials</span></div> <div className='icon-name-value-three'><span><BeachAccessIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="pool" checked={boxChecked23} value={editPool} onChange={handlePool} /></div> <div className='icon-name-value-two'><span>Pool</span></div> <div className='icon-name-value-three'><span><PoolIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="parking" checked={boxChecked24} value={editParking} onChange={handleParking} /></div> <div className='icon-name-value-two'><span>Parking</span></div> <div className='icon-name-value-three'><span><LocalParkingIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="long_term" checked={boxChecked25} value={editLong} onChange={handleLong} /></div> <div className='icon-name-value-two'><span>Long term stay allowed</span></div> <div className='icon-name-value-three'><span><CalendarMonthIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="private_entrance" checked={boxChecked26} value={editPrivate} onChange={handlePrivate} /></div> <div className='icon-name-value-two'><span>Private entrance</span></div> <div className='icon-name-value-three'><span><NoMeetingRoomIcon /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="games_court" checked={boxChecked32} value={editGames} onChange={handleGames} /></div> <div className='icon-name-value-two'><span>Games court</span></div> <div className='icon-name-value-three'><span><SportsSoccer /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="farm" checked={boxChecked33} value={editFarm} onChange={handleFarm} /></div> <div className='icon-name-value-two'><span>Farm</span></div> <div className='icon-name-value-three'><span><Landscape /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="ranch" checked={boxChecked34} value={editRanch} onChange={handleRanch} /></div> <div className='icon-name-value-two'><span>Ranch</span></div> <div className='icon-name-value-three'><span><Grass /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="children" checked={boxChecked35} value={editChildren} onChange={handleChildren} /></div> <div className='icon-name-value-two'><span>Children play</span></div> <div className='icon-name-value-three'><span><ChildCare /></span></div>
                        </div>
                        <div className='icon-name-value'>
                            <div className='icon-name-value-one'><input type="checkbox" name="beach" checked={boxChecked36} value={editBeach} onChange={handleBeach} /></div> <div className='icon-name-value-two'><span>Beach Front</span></div> <div className='icon-name-value-three'><span><BeachAccessOutlined /></span></div>
                        </div>
                    </div>
                </div>

                <div className="edit-third__info-right-buttonOne"><Button type="submit">Update (3/5) </Button></div>

                <div className="edit-third__info-right-buttonTwo">
                    <Button onClick={()=> {
                        Navigate(`/edit-first?name=${title}&id=${paramaId}`,{state:{
                            paramaId: paramaId,
                            title: title,
                          }
                          });
                    }} style={{ marginRight: '10px' }}>Page 1</Button>
                    <Button onClick={()=> {
                        Navigate(`/edit-second?name=${title}&id=${paramaId}`,{state:{
                            paramaId: paramaId,
                            title: title,
                          }
                          });
                    }} style={{ marginRight: '10px' }}>Page 2</Button>
                    <Button onClick={()=> {
                        Navigate(`/edit-third?name=${title}&id=${paramaId}`,{state:{
                            paramaId: paramaId,
                            title: title,
                          }
                          });
                    }} style={{ marginRight: '10px', backgroundColor: '#F78513', color: 'white' }} id="updated">Page 3</Button>
                    <Button onClick={()=> {
                        Navigate(`/edit-four?name=${title}&id=${paramaId}`,{state:{
                            paramaId: paramaId,
                            title: title,
                          }
                          });
                    }} style={{ marginRight: '10px' }}>Page 4</Button>
                    <Button onClick={()=> {
                        Navigate(`/edit-five?name=${title}&id=${paramaId}`,{state:{
                            paramaId: paramaId,
                            title: title,
                          }
                          });
                    }}>Page 5</Button>
                </div>
              </form>
             </div>
          </div>
  
      </div>
    )
  }

export default EditThird