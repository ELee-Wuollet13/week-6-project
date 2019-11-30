export class DoctorAPIService {
  async getDoctorByName(doctorName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${doctorName}&location=or-portland&user_key= 0d5411396d89c97aac569d8df021a9fc`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error(`I'm sorry, there was a problem: ${error.message}`);
    }
  }
}
