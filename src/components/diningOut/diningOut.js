import React from 'react' ;
import './diningOut.css' ;
import Collection from '../common/collection/collection';

const collectionList = [
    {
        id:1,
        Title:"10 Navratri Special Reataurants",
        cover: "https://b.zmtcdn.com/data/collections/ac342b09cba9ce4c73503625f12514f5_1697020581.png",
        places:"11 places"
    },
    {
        id:2,
        Title:"20 Live Cricket Screenings",
        cover: "https://b.zmtcdn.com/data/collections/45a211c821e9c527d258a05aebfaf62d_1696920963.png",
        places:"25 places"
    },
    {
        id:3,
        Title:"10 Newly Opened Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923143.png",
        places:"8 places"
    },
    {
        id:4,
        Title:"11 Must-Visit Legendaary Places",
        cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg",
        places:"11 places"
    },
    {
        id:5,
        Title:"25 Rooftop Places",
        cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
        places:"26 places"
    },
    {
        id:6,
        Title:"10 Trending Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
        places:"11 places"
    },
    {
        id:7,
        Title:"14 Romactic Dining Places",
        cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
        places:"15 places"
    },
    {
        id:8,
        Title:"17 Blissful Breakfast Places",
        cover: "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054220.jpg",
        places:"15 places"
    },
]

const DiningOut =() => {
    return <div> 
       <Collection list={collectionList}/>
    </div>
}

export default DiningOut;