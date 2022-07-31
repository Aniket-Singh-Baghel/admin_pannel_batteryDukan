import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navbar/Navbar";
import Panel from "./Components/Panel/Panel";

import AddBatteryBrand from "./Components/BatteryDukaan/Brand/BrandComponents/AddBatteryBrand";
import AddBatteryModel from "./Components/BatteryDukaan/Brand/BrandComponents/AddBatteryModel";
import AddSecondaryName from "./Components/BatteryDukaan/Brand/BrandComponents/AddSecondaryName";

import AddOEMBrand from "./Components/BatteryDukaan/Brand/BrandComponents/AddOEMBrand";
import AddOemModel from "./Components/BatteryDukaan/Brand/BrandComponents/AddOemModel";

import AddScheme from "./Components/BatteryDukaan/Brand/BrandComponents/AddScheme";
import AddSegment from "./Components/BatteryDukaan/Brand/BrandComponents/AddSegment";

import AddGroup from "./Components/BatteryDukaan/Brand/BrandComponents/AddGroup";
import AddCategory from "./Components/BatteryDukaan/Brand/BrandComponents/AddCategory";
import AddSubCategory from "./Components/BatteryDukaan/Brand/BrandComponents/AddSubCategory";

import AddProductType from "./Components/BatteryDukaan/Brand/BrandComponents/AddProductType";
import AddProductPricing from "./Components/BatteryDukaan/Brand/BrandComponents/AddProductPricing";
import AddProductMedia from "./Components/BatteryDukaan/Brand/BrandComponents/AddProductMedia";
import AddProductDimension from "./Components/BatteryDukaan/Brand/BrandComponents/AddProductDimensions";
import AddBatteryDetails from "./Components/BatteryDukaan/Brand/BrandComponents/AddBatteryDetails";

// view imports starts here
import ViewBatteryBrand from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewBatteryBrand";
import ViewOemModel from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewOemModel";
import ViewOemBrand from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewOemBrand";
import ViewCategory from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewCategory";
import ViewSubCategory from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewSubCategory";
import ViewScheme from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewScheme";
import ViewGroup from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewGroup";
import ViewSegment from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewSegment";
import ViewBatteryModel from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewBatteryModel";
import ViewSecondaryName from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewSecondaryName";

import ViewProductDimension from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewProductDimension";
import ViewProductType from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewProductType";
import ViewProductMedia from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewProductMedia";
import ViewProductPricing from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewProductPricing";
import ViewBatteryDetails from "./Components/BatteryDukaan/ViewBrands/ViewComponents/ViewBatteryDetails";

import "./App.scss";
import AlertBox from "./Components/BatteryDukaan/AlertBox/AlertBox";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <main className="main">
          <Panel />
          <Switch>
            {/* Edit files here */}
            <Route path="/EditBatteryBrand/:id" component={AddBatteryBrand} />
            <Route path="/EditBatteryModel/:id" component={AddBatteryModel} />
            <Route path="/EditCategory/:id" component={AddCategory} />
            <Route path="/EditGroup/:id" component={AddGroup} />
            <Route path="/EditOEMBrand/:id" component={AddOEMBrand} />
            <Route path="/EditOemModel/:id" component={AddOemModel} />
            <Route path="/EditScheme/:id" component={AddScheme} />
            <Route path="/EditSegment/:id" component={AddSegment} />
            <Route path="/EditSubCategory/:id" component={AddSubCategory} />

            <Route path="/EditProductType/:id" component={AddProductType} />
            <Route
              path="/EditProductPricing/:id"
              component={AddProductPricing}
            />
            <Route
              path="/EditProductDimension/:id"
              component={AddProductDimension}
            />
            <Route
              path="/EditBatteryDetails/:id"
              component={AddProductDimension}
            />
            {/* <Route path="/EditSecondaryName/:id" component={AddSecondaryName} /> */}

            <Route path="/ViewBatteryBrand" component={ViewBatteryBrand} />
            <Route path="/ViewOemModel" component={ViewOemModel} />
            <Route path="/ViewOemBrand" component={ViewOemBrand} />
            <Route path="/ViewCategory" component={ViewCategory} />
            <Route path="/ViewSubCategory" component={ViewSubCategory} />
            <Route path="/ViewScheme" component={ViewScheme} />
            <Route path="/ViewGroup" component={ViewGroup} />
            <Route path="/ViewSegment" component={ViewSegment} />
            <Route path="/ViewBatteryModel" component={ViewBatteryModel} />
            <Route path="/ViewProductType" component={ViewProductType} />
            <Route path="/ViewProductPricing" component={ViewProductPricing} />
            <Route path="/ViewProductMedia" component={ViewProductMedia} />
            <Route
              path="/ViewProductDimension"
              component={ViewProductDimension}
            />
            <Route
              path="/ViewBatteryDetails"
              component={ViewBatteryDetails}
            ></Route>
            {/* <Route path="/ViewSecondaryName" component={ViewSecondaryName} /> */}

            {/* Add files here */}
            <Route path="/category" component={AddCategory} />
            <Route path="/SubCategory" component={AddSubCategory} />
            <Route path="/group" component={AddGroup} />
            <Route path="/scheme" component={AddScheme} />
            <Route path="/segment" component={AddSegment} />
            <Route path="/oem" component={AddOEMBrand} />
            <Route path="/Oem_model" component={AddOemModel} />
            {/* <Route path="/secondaryName" component={AddSecondaryName} /> */}
            <Route path="/brand" component={AddBatteryBrand} />
            {/* <Route path="/check" component={check} /> */}

            <Route path="/productType" component={AddProductType} />
            <Route path="/productPricing" component={AddProductPricing} />
            <Route path="/productMedia" component={AddProductMedia} />
            <Route path="/productDimension" component={AddProductDimension} />
            <Route path="/batteryDetails" component={AddBatteryDetails}></Route>
            <Route path="/alertBox" component={AlertBox}></Route>
            <Route path="/" component={AddBatteryModel} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
