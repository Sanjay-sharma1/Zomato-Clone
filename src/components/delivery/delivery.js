import React from 'react' ;
import './delivery.css' ;
import Filters from '../common/filters/filter';
import DeliveryCollection from './deliveryCollections/deliveryCollection';
import Topbrands from './topbrands/topbrands';
import ExploreSection from '../common/exploreSection/exploreSection';
import { restaurants } from '../../data/restaurant';

const deliveryFilters = [
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
        title: "Safe and Hygienic"
    },
    {
        id: 4,
        title: "Pure Veg"
    },
    {
        id: 5,
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
        title: "Delivery Time"
    },
    {
        id: 6,
        title: "Great Offers"
    },
]

const restaurantList = restaurants;

const Delivery =() =>{
    return <div> 
        <div className='max-width'>
        <Filters filterlist = {deliveryFilters}/>
        </div>
        <DeliveryCollection/>
        <Topbrands />
        <ExploreSection list={restaurantList} collectionName = 'Delivery restaurants in Banglore'/>
    </div>
}

export default Delivery ;