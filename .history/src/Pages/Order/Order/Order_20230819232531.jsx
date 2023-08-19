import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ordercover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
const Order = () => {
   
    return (
        <div>
            <Cover img={ordercover} title={"Order Food"}></Cover>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
        
        </div>
    );
};

export default Order;