import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { TextField } from "@mui/material";
import ProductsTable from "./components/ProductsTable";

function App() {
  return (
    <div className="App">
      <TextField type="number" label="ID Filter" />
      <ProductsTable />
    </div>
  );
}

export default App;
