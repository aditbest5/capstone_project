import "./script/component/header.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import main from "./script/view/main.js";

const header = document.createElement("header-item");
document.body.appendChild(header);

const mainTag = document.createElement('main');

document.body.appendChild(mainTag);

main();