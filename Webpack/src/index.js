import {run} from "./app/app";
import {AlertService} from './app/alert.service';
import {ComponentService} from './app/component.service';
import "./main.css";

const alertService = new AlertService();
const componentService = new ComponentService();

// alert("By default webpack look for index.js");
run(alertService, componentService);