import React from 'react';
import './topbrands.css';
import NextArrow from '../../common/crousel/nextArrow';
import PrevArrow from '../../common/crousel/prevArrow';
import Slider from 'react-slick';

const brandlist = [
    {
        id:1,
        time:"35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp"
    },
    {
        id:2,
        time:"31 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp"
    },
    {
        id:3,
        time:"41 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
    },
    {
        id:4,
        time:"23 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp"
    },
    {
        id:5,
        time:"21 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    },
    {
        id:6,
        time:"30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id:7,
        time:"38 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp"
    },
    {
        id:8,
        time:"40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp"
    },
    {
        id:9,
        time:"20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp"
    },
    {
        id:10,
        time:"45 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png?output-format=webp"
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const Topbrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'> 
        Top brands for you 
      </div>
      <Slider {...settings}>
        {brandlist.map((brand) =>{
            return <div>
                <div className='top-brand-cover'>
                    <img src={brand.cover} 
                    className= "top-brand-image"
                    alt={brand.time} />
                </div>
                <div className='top-brand-time '>{brand.time}</div>
            </div>
        })}
      </Slider>
    </div>
  )
}

export default Topbrands;
