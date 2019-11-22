export class DoctorAPIService {
  async getDoctorByCategory(category) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.docktorKey}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error(`There was an error handling your request: ${error.message}`);
    }
  }
}
