import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/getProducts.module.css";
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

export default function getProduct() {
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {field: 'id', filter: true},
    {field: 'title', filter: true},
    {field: 'description'}
 ]);



  useEffect(() => {
    console.log(window.localStorage.getItem("token"));

    axios
      .get("https://dummyjson.com/auth/products", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.products);

        setData(response.data.products);
        console.log(data);
      });

    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div>
      <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
      <AgGridReact
        rowData={data} // Row Data for Rows
        columnDefs={columnDefs} // Column Defs for Columns
        
      />
      </div>
    </div>
  );
}
