import React, { useState }  from "react";
import Header from "../../components/common/header/header";
import TabOptions from "../../components/common/tabOptions/tabOptions";
import Footer from "../../components/common/footer/footer";
import Delivery from "../../components/delivery/delivery";
import DiningOut from "../../components/diningOut/diningOut";
import Nightlife from "../../components/nightLife/nightLife";

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

    return (
    <div>
        <Header/>
        <TabOptions activeTab = {activeTab} setActiveTab = {setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
    )
}

const getCorrectScreen =(tab) =>{
    switch (tab) {
        case "Delivery" :
            return <Delivery/>
        case "Dining Out" :
            return <DiningOut/>
        case "Nightlife" :
            return <Nightlife/>
        default :
            return <Delivery/>;
    }
};
export default HomePage;
