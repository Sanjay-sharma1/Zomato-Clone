import React from 'react' ;
import "./nightLife.css" ;
import Collection from '../common/collection/collection';
import Filters from '../common/filters/filter';
import { nightlife } from '../../data/nightOutData';
import ExploreSection from '../common/exploreSection/exploreSection';

const collectionList = [
    {
        id:1,
        title:"24 Finest Microbeweries",
        cover: "https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623276.png",
        places:"23 places"
    },
    {
        id:2,
        title:"19 Best Bars & Pubs",
        cover: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
        places:"18 places"
    }
]

const nightLifeFilters = [
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
        icon: <i className="fi fi-sr-sort-alt absolute-center"></i>,
        title: "Distance"
    },
    {
        id: 5,
        title: "Pubs & Bars"
    }
]

const nightlifelist = nightlife;

const Nightlife =() => {
    return <div>
        <Collection list={collectionList}/>
        <div className='max-width'>
        <Filters filterlist={nightLifeFilters} />
        </div>
        <ExploreSection list={nightlifelist} collectionName="Nightlife Restaurants in Pathankot" />
    </div>
}

export default Nightlife ;