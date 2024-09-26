import "./home.scss"
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widgets from "../../components/widgets/Widgets"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/charts/Chart"
import Table from "../../components/table/Table"
const Home = () => {
  return (
    <div className="home">
   <Sidebar/>
   <div className="homeContainer">
    <Navbar/>
    <div className="widgets">
      <Widgets type="user"/>
      <Widgets type="order"/>
      <Widgets type="earning"/>
      <Widgets type="balance"/>
    </div>
    <div className="charts">
      <Featured/>
      <Chart  title="User Spending ( Last 6 Months)"  aspect={2/1}/>
    </div>
    <div className="listContainer">
        <div className="listTitle"> Latest Transaction</div>
        <Table/>
    </div>
   </div>
    </div>
  )
}

export default Home