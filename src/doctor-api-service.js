export class DoctorAPIService {
  async getDoctorByCategory(category) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&${process.env.API_KEY}`);
      return response;
    } catch(error) {
      console.error(`I'm sorry, there was a problem: ${error.message}`);
    }
  }
}
