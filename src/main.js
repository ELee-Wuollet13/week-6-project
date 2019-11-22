// import { Doctor } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorAPIService } from './doctor-api-service.js'


$(document).ready(function(){
  $('form#intake').submit(function(event){
    event.preventDefault();
    let doctorName = $("#name").val();
    let illnessName = $("#illnessName").val();


    (async () => {
  let doctorApiService = new DoctorAPIService();
  const response = await doctorApiService.getDoctorByCategory(category);
  getElements(response);
  console.log(response);
})();

  });
});
