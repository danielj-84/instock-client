import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import Footer from './components/Footer/footer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <WarehouseInventoryList/>
      <Switch>
        {/* <Route
          path="/"
          exact
          render={(routerProps) => <WarehouseList {...routerProps} />}
        />
        <Route
          path="/warehouses"
          exact
          render={(routerProps) => <WarehouseList {...routerProps} />}
        /> */}
        {/* <Route
                exact
                path="/warehouses/add"
                render={(routerProps) => <AddWarehouse {...routerProps} />}
              /> */}
        {/* <Route
                exact
                path="/warehouses/:id"
                render={(routerProps) => <WarehouseDetails {...routerProps} />}
              /> */}
        {/* <Route
                path="/warehouses/:id/edit"
                render={(routerProps) => <EditWarehouse {...routerProps} />}
              /> */}
        {/* <Route
          path="/inventory"
          exact
          render={(routerProps) => <InventoryTable {...routerProps} />}
        />
        <Route
          path="/inventory/add"
          exact
          render={(routerProps) => <AddInventoryItem {...routerProps} />}
        /> */}
        {/* <Route
                path="/inventory/:id"
                exact
                render={(routerProps) => <InventoryItemDetails {...routerProps} />}
              /> */}
        {/* <Route
          path="/inventory/:id/edit"
          render={(routerProps) => <EditInventoryItem {...routerProps} />}
        /> */}
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
