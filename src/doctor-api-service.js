
export class DoctorAPIService {
  async getDoctorByName(doctorName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      console.log(process.env.API_KEY);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error(`I'm sorry, there was a problem: ${error.message}`);
    }
  }
}
