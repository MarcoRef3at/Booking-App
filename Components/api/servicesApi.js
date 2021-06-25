import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";

const loadServices = (businessId) => {
  return new Promise((resolve, reject) => {
    microsoftApi
      .get(`${endPoints.ListBusinesses}/${businessId}${endPoints.ListServices}`)

      .then((response) => {
        console.log("response:", response.data);
        resolve(response.data.value);
      })

      .catch((error) => {
        let Error = error.response.data.error.message;
        console.log("Error:", Error);
        Alert.alert("Error", Error);
        reject(Error);
      });
  });
};
export default {
  loadServices,
};
