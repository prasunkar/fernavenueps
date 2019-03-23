import {MDCTextField} from '@material/textfield/index';
import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCList} from "@material/list/index";
import {MDCDrawer} from "@material/drawer/index";
import {MDCTextFieldIcon} from '@material/textfield/icon';
import {MDCSelect} from '@material/select';

// Top App Bar + Modal Drawer
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');

listEl.addEventListener('click', (event) => {
  mainContentEl.querySelector('input, button').focus();
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

// Text Fields + Select + Ripples
const textFields = [].slice.call(document.querySelectorAll('.mdc-text-field'));textFields.forEach((textFieldEl)=>{new MDCTextField(textFieldEl);});
const selects = [].slice.call(document.querySelectorAll('.mdc-select'));selects.forEach((selectEl)=>{new MDCSelect(selectEl);});
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});