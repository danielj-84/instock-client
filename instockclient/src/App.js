import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
// import InventoryItemDetails from "./components/DisplayingItem/DisplayingItem";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route
                path="/"
                exact
                render={(routerProps) => <WarehousesPage {...routerProps} />}
              /> */}
        <Route
          path="/warehouses"
          exact
          render={(routerProps) => <WarehouseList {...routerProps} />}
        />
        {/* <Route
                exact
                path="/warehouses/add"
                render={(routerProps) => <AddWarehouse {...routerProps} />}
              /> */}
        <Route
                exact
                path="/warehouses/:id"
                render={(routerProps) => <WarehouseDetails {...routerProps} />}
              />
        <Route
                path="/warehouses/:id/edit"
                render={(routerProps) => <EditWarehouse {...routerProps} />}
              />
        <Route
          path="/inventory"
          exact
          render={(routerProps) => <InventoryTable {...routerProps} />}
        />
        <Route
          path="/inventory/add"
          exact
          render={(routerProps) => <AddInventoryItem {...routerProps} />}
        />
        {/* <Route
          path="/inventory/:id"
          render={(routerProps) => <InventoryItemDetails {...routerProps} />}
      A22-P/warehouse-details
        /> */}

        <Route
                path="/inventories/:id/edit"
                render={(routerProps) => <EditInventoryItem {...routerProps} />}
              />
      </Switch>

      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
