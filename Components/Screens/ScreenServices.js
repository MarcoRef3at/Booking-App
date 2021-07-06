import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import endPoints from "../Config/endPoints";
import microsoftApi from "../Config/microsoftApi";
import AppButton from "../Shared/Button";
import defaultStyles from "./../Config/styles";
import FormPicker from "./../Shared/FormPicker";
import ActivityIndicator from "./../Shared/ActivityIndicator";
import servicesApi from "../api/servicesApi";
const ScreenServices = ({ route: { params }, navigation: { navigate } }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const businessId = params.id;
  const businessName = params.name;
  const getServices = () => {
    setLoading(true);
    servicesApi
      .loadServices(businessId)
      .then((values) => {
        setServices(values);
      })
      .catch((err) => console.log("err:", err));
    setLoading(false);
  };

  const images = {
    "e8100a5f-6613-40b0-a969-e235eca5cbc4":
      "https://static1.bigstockphoto.com/1/0/4/large1500/401519399.jpg",
    "e4f8da96-f757-488e-81fe-5ebdee2ba425":
      "https://coworker.imgix.net/photos/egypt/hurghada/g-space/6.jpg?w=1200&h=0&q=90&auto=format,compress&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle",
    "d71f4730-0e9d-4456-80ba-5458ab722d35":
      "https://www.osoulmisrmagazine.com/UserFiles/NewsInnerImages/2021/03/11/281706/Tournment-4_20210311230318.jpg",
    "1f6c8aa6-04ac-44fe-96b5-5c473fb3259b":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBQF5risTI4flnmklwnSdrNRhFOZj7ZPy6Jy0D5J2TXI5-INJcdTgbgQ94wYMpvN-gM4&usqp=CAU",
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <View>
      <FormPicker
        images={images}
        header="Select Service"
        data={services}
        navigate={(serviceId) => {
          navigate("CalendarType", { serviceId, businessId, businessName });
        }}
      />
      <ActivityIndicator visible={loading} />
    </View>
  );
};

export default ScreenServices;
