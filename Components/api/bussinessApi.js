import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";

const loadBusinesses = () => {
  return new Promise((resolve, reject) => {
    microsoftApi
      .get(endPoints.ListBusinesses)

      .then((response) => {
        // console.log("response:", response);
        let res = response.data.value;
        let values = [];
        res.map(
          (v) =>
            v.displayName != "dfef" &&
            v.displayName != "El Gouna Squash" &&
            values.push(v)
        );
        resolve(values);
        // setBusinesses(values);
      })

      .catch((error) => {
        reject(error);
        console.log("error:", error.response.data.error.message);
        Alert.alert("Error", error.response.data.error.message);
      });
  });
};
export default {
  loadBusinesses,
};
