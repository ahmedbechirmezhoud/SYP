import BreakfastIcon from "./assets/Icons/BreakfastIcon";
import BreakIcon from "./assets/Icons/BreakIcon";
import CareerIcon from "./assets/Icons/CareerIcon";
import CheckinIcon from "./assets/Icons/CheckinIcon";
import DepartureIcon from "./assets/Icons/DepartureIcon";
import DinnerIcon from "./assets/Icons/DinnerIcon";
import GalaIcon from "./assets/Icons/GalaIcon";
import KeynotesIcon from "./assets/Icons/KeynotesIcon";
import LunchIcon from "./assets/Icons/LunchIcon";
import MulticultureIcon from "./assets/Icons/MulticultureIcon";
import OpeningIcon from "./assets/Icons/OpeningIcon";
import PartyIcon from "./assets/Icons/PartyIcon";
import PlaneIcon from "./assets/Icons/PlaneIcon";
import PlenaryIcon from "./assets/Icons/PlenaryIcon";
import PosterIcon from "./assets/Icons/PosterIcon";
import PreparationsIcon from "./assets/Icons/PreparationsIcon";
import TourIcon from "./assets/Icons/TourIcon";
import TransportIcon from "./assets/Icons/TransportIcon";
import TunisianIcon from "./assets/Icons/TunisianIcon";
import WorkshopIcon from "./assets/Icons/WorkshopIcon";

const locations = {
  "Airport": {"lat": "36.8441575", "lng": "10.2029189", "location": "Tunis-Carthage International Airport"},
  "Hotel": {"lat": "36.9205362", "lng": "10.287631", "location": "El Mouradi Gammarth, La Marsa" },
  "cite de culture": {"lat": "36.811103570443024", "lng": "10.185907383902777", "location": "City of Culture Tunis" },
  "perle du lac": {"lat" : "36.83078282701443", "lng": "10.2215252007224", "location": "la Perle du Lac"}
}

export default [
  {
      "title": "Arrivals",
      "from": [
          "07",
          "00"
      ],
      "to": [
          "12",
          "00"
      ],
      "day": 3,
      "Icon": PlaneIcon,
      ...locations["Airport"]
  },
  {
      "title": "Congress Check-In",
      "from": [
          "12",
          "00"
      ],
      "to": [
          "14",
          "00"
      ],
      "day": 3,
      "Icon": CheckinIcon,
      ...locations['Hotel']
  },
  {
      "title": "Transport",
      "from": [
          "14",
          "00"
      ],
      "to": [
          "16",
          "00"
      ],
      "day": 3,
      "Icon": TransportIcon
  },
  {
      "title": "Opening Ceremony",
      "from": [
          "16",
          "00"
      ],
      "to": [
          "18",
          "30"
      ],
      "day": 3,
      "Icon": OpeningIcon,
      ...locations["cite de culture"]
  },
  {
      "title": "Transport",
      "from": [
          "18",
          "30"
      ],
      "to": [
          "20",
          "00"
      ],
      "day": 3,
      "Icon": TransportIcon
  },
  {
      "title": "Dinner",
      "from": [
          "20",
          "00"
      ],
      "to": [
          "21",
          "00"
      ],
      "day": 3,
      "Icon": DinnerIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Free time",
      "from": [
          "21",
          "00"
      ],
      "to": [
          "00",
          "00"
      ],
      "day": 3,
      "Icon": PartyIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Breakfast",
      "from": [
          "07",
          "00"
      ],
      "to": [
          "08",
          "00"
      ],
      "day": 4,
      "Icon": BreakfastIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Preparations",
      "from": [
          "08",
          "00"
      ],
      "to": [
          "08",
          "30"
      ],
      "day": 4,
      "Icon": PreparationsIcon
  },
  {
      "title": "Keynotes",
      "from": [
          "08",
          "30"
      ],
      "to": [
          "09",
          "30"
      ],
      "day": 4,
      "Icon": KeynotesIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Break / Networking",
      "from": [
          "09",
          "30"
      ],
      "to": [
          "10",
          "00"
      ],
      "day": 4,
      "Icon": BreakIcon
  },
  {
      "title": "Workshops",
      "from": [
          "10",
          "00"
      ],
      "to": [
          "11",
          "30"
      ],
      "day": 4,
      "Icon": WorkshopIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Workshops",
      "from": [
          "11",
          "30"
      ],
      "to": [
          "13",
          "00"
      ],
      "day": 4,
      "Icon": WorkshopIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Lunch",
      "from": [
          "13",
          "00"
      ],
      "to": [
          "14",
          "00"
      ],
      "day": 4,
      "Icon": LunchIcon
  },
  {
      "title": "Transport",
      "from": [
          "14",
          "00"
      ],
      "to": [
          "15",
          "00"
      ],
      "day": 4,
      "Icon": TransportIcon
  },
  {
      "title": "Touristic Tour and Group Photo",
      "from": [
          "15",
          "00"
      ],
      "to": [
          "18",
          "00"
      ],
      "day": 4,
      "Icon": TourIcon
  },
  {
      "title": "Transport",
      "from": [
          "18",
          "00"
      ],
      "to": [
          "19",
          "00"
      ],
      "day": 4,
      "Icon": TransportIcon
      
  },
  {
      "title": "Preparations",
      "from": [
          "19",
          "00"
      ],
      "to": [
          "20",
          "00"
      ],
      "day": 4,
      "Icon": PreparationsIcon
  },
  {
      "title": "Transport",
      "from": [
          "20",
          "00"
      ],
      "to": [
          "21",
          "00"
      ],
      "day": 4,
      "Icon": TransportIcon
  },
  {
      "title": "Tunisian Dinner",
      "from": [
          "21",
          "00"
      ],
      "to": [
          "23",
          "30"
      ],
      "day": 4,
      "Icon": TunisianIcon
  },
  {
      "title": "Transport",
      "from": [
          "23",
          "30"
      ],
      "to": [
          "00",
          "00"
      ],
      "day": 4,
      "Icon": TransportIcon
  },
  {
      "title": "Breakfast",
      "from": [
          "07",
          "00"
      ],
      "to": [
          "08",
          "00"
      ],
      "day": 5,
      "Icon": BreakfastIcon
  },
  {
      "title": "Preparations",
      "from": [
          "08",
          "00"
      ],
      "to": [
          "08",
          "30"
      ],
      "day": 5,
      "Icon": PreparationsIcon
  },
  {
      "title": "Keynotes",
      "from": [
          "08",
          "30"
      ],
      "to": [
          "09",
          "30"
      ],
      "day": 5,
      "Icon": KeynotesIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Break / Networking",
      "from": [
          "09",
          "30"
      ],
      "to": [
          "10",
          "00"
      ],
      "day": 5,
      "Icon": BreakIcon
    },
  {
      "title": "Workshops",
      "from": [
          "10",
          "00"
      ],
      "to": [
          "11",
          "30"
      ],
      "day": 5,
      "Icon": WorkshopIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Workshops",
      "from": [
          "11",
          "30"
      ],
      "to": [
          "13",
          "00"
      ],
      "day": 5,
      "Icon": WorkshopIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Lunch",
      "from": [
          "13",
          "00"
      ],
      "to": [
          "14",
          "00"
      ],
      "day": 5,
      "Icon": LunchIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Break / Networking",
      "from": [
          "14",
          "00"
      ],
      "to": [
          "15",
          "00"
      ],
      "day": 5,
      "Icon": BreakIcon
  },
  {
      "title": "Keynotes",
      "from": [
          "15",
          "00"
      ],
      "to": [
          "16",
          "00"
      ],
      "day": 5,
      "Icon": KeynotesIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Break / Networking",
      "from": [
          "16",
          "00"
      ],
      "to": [
          "16",
          "30"
      ],
      "day": 5,
      "Icon": BreakIcon
  },
  {
      "title": "Career Fair",
      "from": [
          "16",
          "30"
      ],
      "to": [
          "18",
          "00"
      ],
      "day": 5,
      "Icon": CareerIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Break / Networking",
      "from": [
          "18",
          "00"
      ],
      "to": [
          "18",
          "30"
      ],
      "day": 5,
      "Icon": BreakIcon
  },
  {
      "title": "Poster Session",
      "from": [
          "18",
          "30"
      ],
      "to": [
          "20",
          "30"
      ],
      "day": 5,
      "Icon": PosterIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Preparations",
      "from": [
          "20",
          "30"
      ],
      "to": [
          "21",
          "30"
      ],
      "day": 5,
      "Icon": PreparationsIcon,
  },
  {
      "title": "Multicultural Evening",
      "from": [
          "21",
          "30"
      ],
      "to": [
          "00",
          "00"
      ],
      "day": 5,
      "Icon": MulticultureIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Breakfast",
      "from": [
          "07",
          "00"
      ],
      "to": [
          "08",
          "00"
      ],
      "day": 6,
      "Icon": BreakfastIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Preparations",
      "from": [
          "08",
          "00"
      ],
      "to": [
          "08",
          "30"
      ],
      "day": 6,
      "Icon": PreparationsIcon
  },
  {
      "title": "Plenary session",
      "from": [
          "08",
          "30"
      ],
      "to": [
          "10",
          "00"
      ],
      "day": 6,
      "Icon": PlenaryIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Break / Networking",
      "from": [
          "10",
          "00"
      ],
      "to": [
          "10",
          "30"
      ],
      "day": 6,
      "Icon": BreakIcon
  },
  {
      "title": "Plenary session",
      "from": [
          "10",
          "30"
      ],
      "to": [
          "12",
          "00"
      ],
      "day": 6,
      "Icon": PlenaryIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Lunch",
      "from": [
          "12",
          "00"
      ],
      "to": [
          "13",
          "30"
      ],
      "day": 6,
      "Icon": LunchIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Plenary session",
      "from": [
          "13",
          "30"
      ],
      "to": [
          "15",
          "00"
      ],
      "day": 6,
      "Icon": PlenaryIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Free Time",
      "from": [
          "15",
          "00"
      ],
      "to": [
          "19",
          "30"
      ],
      "day": 6,
      "Icon": PartyIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Preparations",
      "from": [
          "19",
          "30"
      ],
      "to": [
          "20",
          "00"
      ],
      "day": 6,
      "Icon": PreparationsIcon
  },
  {
      "title": "Gala Dinner",
      "from": [
          "20",
          "00"
      ],
      "to": [
          "00",
          "00"
      ],
      "day": 6,
      "Icon": GalaIcon
  },
  {
      "title": "Breakfast",
      "from": [
          "07",
          "00"
      ],
      "to": [
          "08",
          "00"
      ],
      "day": 7,
      "Icon": BreakfastIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Preparations",
      "from": [
          "08",
          "00"
      ],
      "to": [
          "08",
          "30"
      ],
      "day": 7,
      "Icon": PreparationsIcon
  },
  {
      "title": "Closing Ceremony",
      "from": [
          "08",
          "30"
      ],
      "to": [
          "10",
          "00"
      ],
      "day": 7,
      "Icon": OpeningIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Congress Checkout",
      "from": [
          "10",
          "00"
      ],
      "to": [
          "13",
          "30"
      ],
      "day": 7,
      "Icon": CheckinIcon,
      ...locations["Hotel"]
  },
  {
      "title": "Departure",
      "from": [
          "13",
          "30"
      ],
      "to": [
          "",
          ""
      ],
      "day": 7,
      "Icon": DepartureIcon
  }
]

/*
export default [
  { "title": "Arrivals", "from": ["07", "00"], "to": ["13", "00"], "day": 3, "Icon": PlaneIcon, ...locations["Airport"] },
  {
    "title": "Congress Check-In",
    "from": ["13", "00"],
    "to": ["15", "00"],
    "day": 3,
    "Icon": CheckinIcon,
    ...locations["Hotel"]
  },
  { "title": "Transport", "from": ["15", "00"], "to": ["16", "00"], "day": 3, "Icon": TransportIcon },
  {
    "title": "Opening Ceremony",
    "from": ["16", "00"],
    "to": ["18", "30"],
    "day": 3,
    "Icon" : OpeningIcon,
    ...locations["cite de culture"]
  },
  { "title": "Transport", "from": ["18", "30"], "to": ["19", "30"], "day": 3, "Icon": TransportIcon },
  { "title": "Dinner", "from": ["19", "30"], "to": ["21", "00"], "day": 3, "Icon": DinnerIcon, ...locations["Hotel"] },
  {
    "title": "Preparations",
    "from": ["21", "00"],
    "to": ["22", "00"],
    "day": 3,
    "Icon": PreparationsIcon
  },
  { "title": "Party", "from": ["22", "00"], "to": ["00", "00"], "day": 3, "Icon": PartyIcon },
  { "title": "Breakfast", "from": ["07", "00"], "to": ["08", "00"], "day": 4, "Icon": BreakfastIcon, ...locations["Hotel"] },
  {
    "title": "Preparations",
    "from": ["08", "00"],
    "to": ["08", "30"],
    "day": 4,
    "Icon": PreparationsIcon
  },
  { "title": "Keynotes", "from": ["08", "30"], "to": ["09", "30"], "day": 4, "Icon": KeynotesIcon, ...locations["Hotel"] },
  {
    "title": "Break / Networking",
    "from": ["09", "30"],
    "to": ["10", "00"],
    "day": 4,
    "Icon": BreakIcon
  },
  { "title": "Workshops", "from": ["10", "00"], "to": ["11", "30"], "day": 4, "Icon": WorkshopIcon, ...locations["Hotel"] },
  {
    "title": "Break / Networking",
    "from": ["11", "30"],
    "to": ["12", "00"],
    "day": 4,
    "Icon": BreakIcon
  },
  { "title": "Workshops", "from": ["12", "00"], "to": ["13", "30"], "day": 4, "Icon" :WorkshopIcon, ...locations["Hotel"] },
  { "title": "Lunch", "from": ["13", "30"], "to": ["14", "30"], "day": 4, "Icon": LunchIcon,...locations["Hotel"] },
  { "title": "Transport", "from": ["14", "30"], "to": ["15", "30"], "day": 4, "Icon": TransportIcon },
  {
    "title": "Touristic Tour and Group Photo",
    "from": ["15", "30"],
    "to": ["18", "30"],
    "day": 4,
    "Icon": TourIcon
  },
  { "title": "Transport", "from": ["18", "30"], "to": ["19", "00"], "day": 4,"Icon": TransportIcon },
  {
    "title": "Preparations",
    "from": ["19", "00"],
    "to": ["20", "00"],
    "day": 4,
    "Icon": PreparationsIcon
  },
  { "title": "Transport", "from": ["20", "00"], "to": ["20", "30"], "day": 4, "Icon": TransportIcon },
  {
    "title": "Tunisian Dinner",
    "from": ["20", "30"],
    "to": ["23", "30"],
    "day": 4,
    "Icon": TunisianIcon,
    ...locations["perle du lac"]
  },
  { "title": "Transport", "from": ["23", "30"], "to": ["00", "00"], "day": 4, "Icon": TransportIcon },
  { "title": "Breakfast", "from": ["07", "00"], "to": ["08", "00"], "day": 5, "Icon": BreakfastIcon,...locations["Hotel"] },
  {
    "title": "Preparations",
    "from": ["08", "00"],
    "to": ["08", "30"],
    "day": 5,
    "Icon": PreparationsIcon
  },
  { "title": "Keynotes", "from": ["08", "30"], "to": ["09", "30"], "day": 5, "Icon": KeynotesIcon,...locations["Hotel"] },
  {
    "title": "Break / Networking",
    "from": ["09", "30"],
    "to": ["10", "00"],
    "day": 5,
    "Icon": BreakIcon
  },
  { "title": "Workshops", "from": ["10", "00"], "to": ["11", "30"], "day": 5, "Icon": WorkshopIcon,...locations["Hotel"] },
  {
    "title": "Break / Networking",
    "from": ["11", "30"],
    "to": ["12", "00"],
    "day": 5,
    "Icon": BreakIcon
  },
  { "title": "Workshops", "from": ["12", "00"], "to": ["13", "30"], "day": 5, "Icon": WorkshopIcon,...locations["Hotel"] },
  { "title": "Lunch", "from": ["13", "30"], "to": ["14", "30"], "day": 5, "Icon": LunchIcon,...locations["Hotel"] },
  {
    "title": "Break / Networking",
    "from": ["14", "30"],
    "to": ["15", "00"],
    "day": 5,
    "Icon": BreakIcon
  },
  { "title": "Keynotes", "from": ["15", "00"], "to": ["16", "00"], "day": 5, "Icon": KeynotesIcon,...locations["Hotel"] },
  {
    "title": "Career Fair",
    "from": ["16", "00"],
    "to": ["17", "30"],
    "day": 5,
    "Icon": CareerIcon,...locations["Hotel"]
  },
  {
    "title": "Break / Networking",
    "from": ["17", "30"],
    "to": ["18", "00"],
    "day": 5,
    "Icon": BreakIcon
  },
  {
    "title": "Poster Session",
    "from": ["18", "00"],
    "to": ["20", "00"],
    "day": 5,
    "Icon": PosterIcon,...locations["Hotel"]
  },
  {
    "title": "Preparations",
    "from": ["20", "00"],
    "to": ["21", "00"],
    "day": 5,
    "Icon": PreparationsIcon
  },
  {
    "title": "Multicultural Evening",
    "from": ["21", "00"],
    "to": ["00", "00"],
    "day": 5,
    "Icon": MulticultureIcon,...locations["Hotel"]
  },
  { "title": "Breakfast", "from": ["07", "00"], "to": ["08", "00"], "day": 6, "Icon": BreakfastIcon },
  {
    "title": "Preparations",
    "from": ["08", "00"],
    "to": ["08", "30"],
    "day": 6,
    "Icon": PreparationsIcon
  },
  { "title": "Transport", "from": ["08", "30"], "to": ["09", "30"], "day": 6, "Icon": TransportIcon },
  {
    "title": "Plenary session",
    "from": ["09", "30"],
    "to": ["10", "30"],
    "day": 6,
    "Icon": PlenaryIcon,...locations["Hotel"]
  },
  {
    "title": "Break / Networking",
    "from": ["10", "30"],
    "to": ["11", "00"],
    "day": 6,
    "Icon": BreakIcon
  },
  {
    "title": "Plenary session",
    "from": ["11", "00"],
    "to": ["12", "30"],
    "day": 6,
    "Icon": PlenaryIcon,...locations["Hotel"]
  },
  { "title": "Lunch", "from": ["12", "30"], "to": ["14", "30"], "day": 6, "Icon": LunchIcon },
  {
    "title": "Break / Networking",
    "from": ["14", "30"],
    "to": ["15", "00"],
    "day": 6,
    "Icon": BreakIcon
  },
  {
    "title": "Plenary session",
    "from": ["15", "00"],
    "to": ["17", "00"],
    "day": 6,
    "Icon": PlenaryIcon,...locations["Hotel"]
  },
  { "title": "Transport", "from": ["17", "00"], "to": ["18", "00"], "day": 6, "Icon": TransportIcon },
  {
    "title": "Preparations",
    "from": ["18", "00"],
    "to": ["19", "30"],
    "day": 6,
    "Icon": PreparationsIcon
  },
  {
    "title": "Gala Dinner",
    "from": ["19", "30"],
    "to": ["00", "00"],
    "day": 6,
    "Icon": GalaIcon,...locations["Hotel"]
  },
  { "title": "Breakfast", "from": ["07", "00"], "to": ["08", "00"], "day": 7, "Icon": BreakfastIcon },
  {
    "title": "Preparations",
    "from": ["08", "00"],
    "to": ["08", "30"],
    "day": 7,
    "Icon": PreparationsIcon
  },
  {
    "title": "Closing Ceremony",
    "from": ["08", "30"],
    "to": ["10", "00"],
    "day": 7,
    "Icon": OpeningIcon,...locations["Hotel"]
  },
  {
    "title": "Congress Checkout",
    "from": ["10", "00"],
    "to": ["13", "30"],
    "day": 7,
    "Icon": CheckinIcon,...locations["Hotel"]
  },
  { "title": "Departure", "from": ["13", "30"], "to": ["", ""], "day": 7, "Icon": DepartureIcon }
]*/
