// import { Doctor } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorAPIService } from './doctor-api-service.js'


$(document).ready(function() {
  $('form#intake').submit(function(event) {
    event.preventDefault();
    let doctorName = $(".name").val();
    let illnessName = $(".illness").val();
    let practice = $(".practice").val();

    (async () => {
      let doctorApiService = new DoctorAPIService();
      const response = await doctorApiService.getDoctorByName(doctorName, illnessName, practice);
      getElements(response);
      console.log(response);
    })();

    // (async () => {
    //   let doctorApiService = new DoctorAPIService();
    //   const response = await doctorApiService.getDoctorByName(doctorName);
    //   getElements(response);
    //   console.log(response);
    // })();

    function getElements(response) {
    $('.output').show();
  }
  });

});
