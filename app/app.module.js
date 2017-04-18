import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';

require('./assets/main.scss');

angular.module('app', [
  uirouter,  
  'example',
  'moment-picker',
  ngAnimate,
  toastr
]);
