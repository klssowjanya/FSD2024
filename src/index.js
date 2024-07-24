import ReactDOM from "react-dom/client";
import Page from "./Page";
import Twelve from "./twelve";
import Form from "./Login_Page";
import Thirteen from "./Toggle";
import Register from "./Register";
import Navbar from "./Navbar";
// import Bool, { Ans } from "./bool";
// import Reviews from "./Review_image";
// import { Profiler } from "react";

 

const rootE = document.getElementById('name');
const rootR = ReactDOM.createRoot(rootE);
// rootR.render(<App/>)
// rootR.render(<Bool />)
rootR.render(<Navbar />)