import { Alert } from "react-native";
import microsoftApi from "../Config/microsoftApi";

const bookAppointment = (
  businessId,
  customerEmailAddress,
  customerName,
  customerNotes,
  customerPhone,
  serviceId,
  startTime,
  endTime
) => {
  let host = `bookingBusinesses/${businessId}/appointments`;
  return new Promise((resolve, reject) => {
    microsoftApi
      .post(
        host,

        {
          "@odata.type": "#microsoft.graph.bookingAppointment",
          customerEmailAddress: customerEmailAddress,
          customerName: customerName,
          customerNotes: customerNotes,
          customerPhone: customerPhone,
          serviceId: serviceId,
          start: {
            "@odata.type": "#microsoft.graph.dateTimeTimeZone",
            dateTime: startTime,
            timeZone: "UTC",
          },
          end: {
            "@odata.type": "#microsoft.graph.dateTimeTimeZone",
            dateTime: startTime,
            timeZone: "UTC",
          },
        },
        {
          onUploadProgress: (progress) =>
            console.log((progress.loaded / progress.total) * 100, `%`),
        }
      )

      .then((response) => {
        //   console.log("response:", response);
        resolve(response);
      })

      .catch((error) => {
        reject(error);
        let Error = error.response.data.error.message;
        console.log("Error:", error.response);
        Alert.alert("Error", Error);
      });
  });
};
export default {
  bookAppointment,
};
