import { FaBath, FaToiletPaper, FaTv, FaTemperatureHigh, FaWifi, FaBreadSlice } from "react-icons/fa";
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
import Drier from './Images/drier.jpg'
import KitchenIcon from '@mui/icons-material/Kitchen';
const Offers = [
    {
        id: 1,
        facility: <FaBath />,
        name: 'bath tub',
        status: 'yes',
        location: 'bedroom',
    },

    {
        id: 2,
        facility: <img src={Drier} alt="" style={{ width: '20px' }} />,
        name: 'hair drier',
        status: 'yes',
        location: 'bedroom',
    },

    {
        id: 3,
        facility: <LocalLaundryServiceIcon />,
        name: 'washer',
        status: 'yes',
        location: 'Bedroom and laundry',
    },

    {
        id: 4,
        facility: <DryCleaningIcon />,
        name: 'Drier',
        status: 'yes',
        location: 'Bedroom and laundry',
    },

    {
        id: 5,
        facility: <FaToiletPaper />,
        name: 'Essentials',
        details: 'toilet-paper, Towels, Bedsheets, soap',
        status: 'yes',
        location: 'Bedroom and laundry',
    },

    {
        id: 6,
        facility: <IronIcon />,
        name: 'Iron',
        status: 'yes',
        location: 'Bedroom and laundry',
    },

    {
        id: 7,
        facility: <FaTv />,
        name: 'TV',
        status: 'yes',
        location: 'entertainment',
    },

    {
        id: 8,
        facility: <AcUnitIcon />,
        name: 'Air Conditioner',
        status: 'yes',
        location: 'heating and cooling',
    },

    {
        id: 9,
        facility: <FaTemperatureHigh />,
        name: 'Heating',
        status: 'yes',
        location: 'heating and cooling',
    },

    {
        id: 10,
        facility: <FaWifi />,
        name: 'wifi',
        status: 'yes',
        location: 'internet and office',
    },

    {
        id: 11,
        facility: <KitchenIcon />,
        name: 'refrigerator',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 12,
        facility: <MicrowaveIcon />,
        name: 'microwave',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 13,
        facility: <RiceBowlIcon />,
        name: 'dishes and silverware',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 14,
        facility: <LocalDiningIcon />,
        name: 'kitchen',
        details: 'space where guests can cook their own meals',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 15,
        facility: <BlenderIcon />,
        name: 'blender',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 16,
        facility: <CoffeeMakerIcon />,
        name: 'coffee maker',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 17,
        facility: <FireExtinguisherIcon />,
        name: 'fire extinguisher',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 18,
        facility: <FaBreadSlice />,
        name: 'bread toaster',
        status: 'yes',
        location: 'Kitchen and dining',
    },

    {
        id: 19,
        facility: <BalconyIcon />,
        name: 'patio or balcony',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 20,
        facility: <YardIcon />,
        name: 'backyard',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 21,
        facility: <OutdoorGrillIcon />,
        name: 'out-door grill',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 22,
        facility: <BeachAccessIcon />,
        name: 'beach essential',
        details: 'beach towels, umbrella, beach blanket, snorkeling gear',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 23,
        facility: <PoolIcon />,
        name: 'pool',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 24,
        facility: <LocalParkingIcon />,
        name: 'parking',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 25,
        facility: <CalendarMonthIcon />,
        name: 'Long term stays allowed',
        details: 'Allow stay for 28 days or more',
        status: 'yes',
        location: 'Outdoor',
    },

    {
        id: 26,
        facility: <NoMeetingRoomIcon />,
        name: 'private entrance',
        status: 'yes',
        location: 'Outdoor',
    },
];

export default Offers