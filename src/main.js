import { Doctor } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $('form#intake').submit(function(event){
    event.preventDefault();

    (async () => {
  let doctorApiService = new DoctorAPIService();
  const response = await doctorApiService.getDoctorByCategory(category);
  getElements(response);
  console.log(response);
})();

  });
});
