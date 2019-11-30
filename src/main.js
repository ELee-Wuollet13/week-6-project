// import { Doctor } from './back.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorAPIService } from './doctor-api-service.js'


$(document).ready(function(){
  $('form#intake').submit(function(event){
    event.preventDefault();
    let doctorName = $(".name").val();
    let illnessName = $(".illness").val();
    console.log(doctorName);
    console.log(illnessName);


    (async () => {
      let doctorApiService = new DoctorAPIService();
      const response = await doctorApiService.getDoctorByName();
      // getElements(response);
      console.log(response);
    })();

  });
});
