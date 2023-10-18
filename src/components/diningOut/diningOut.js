import React from 'react' ;
import './diningOut.css' ;
import Collection from '../common/collection/collection';
import Filters from '../common/filters/filter';
import ExploreSection from '../common/exploreSection/exploreSection';
import { diningOut } from '../../data/diningOut';

const collectionList = [
    {
        id:1,
        title:"10 Navratri Special Reataurants",
        cover: "https://b.zmtcdn.com/data/collections/ac342b09cba9ce4c73503625f12514f5_1697020581.png",
        places:"11 places"
    },
    {
        id:2,
        title:"20 Live Cricket Screenings",
        cover: "https://b.zmtcdn.com/data/collections/45a211c821e9c527d258a05aebfaf62d_1696920963.png",
        places:"25 places"
    },
    {
        id:3,
        title:"10 Newly Opened Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
        places:"8 places"
    },
    {
        id:4,
        title:"11 Must-Visit Legendary Places",
        cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg",
        places:"11 places"
    },
    {
        id:5,
        title:"25 Rooftop Places",
        cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
        places:"26 places"
    },
    {
        id:6,
        title:"10 Trending Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
        places:"11 places"
    },
    {
        id:7,
        title:"14 Romactic Dining Places",
        cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
        places:"15 places"
    },
    {
        id:8,
        title:"17 Blissful Breakfast Places",
        cover: "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054220.jpg",
        places:"15 places"
    },
]

const diningFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        title: "Rating: 4.0+"
    },
    {
        id: 3,
        icon: <i className="fi fi-rr-crown absolute-center"></i>,
        title: "Gold"
    },
    {
        id: 4,
        title: "Outdoor Seating"
    },
    {
        id: 5,
        title: "Serves Alcohol"
    },
    {
        id: 6,
        title: "Open Now"
    },
]

const dininglist = diningOut;

const DiningOut =() => {
    return <div> 
       <Collection list={collectionList}/>
       <div className='max-width'>
        <Filters filterlist={diningFilters} />
       </div>
       <ExploreSection list={dininglist} collectionName="Trending dining restaurants in Pathankot"/>
    </div>
}

export default DiningOut;