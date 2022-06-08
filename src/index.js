import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const companies = [
  { name: "Samsung", category: "Electronics", start: 1981, end: 2004 },
  { name: "Nokia", category: "Mobile", start: 1992, end: 2008 },
  { name: "Apple", category: "Mobile", start: 1999, end: 2007 },
  { name: "One Plus", category: "Electronics", start: 1989, end: 2010 },
  { name: "Oppo", category: "Mobile", start: 2009, end: 2014 },
  { name: "Vivo", category: "Mobile", start: 1987, end: 2010 },
  { name: "Motorola", category: "Electronics", start: 1986, end: 1996 },
  { name: "Panasonic", category: "Electronics", start: 2011, end: 2016 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* {companies.map((el) => (
      // console.log(el.name);
      <h3>{el.name}</h3>
    ))} */}
    <div>
  {companies.filter(name => name.start > 1987).map(filteredname => (
    <li>
      {filteredname.name}
    </li>
  ))}
</div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
