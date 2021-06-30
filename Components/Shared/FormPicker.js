import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppButton from "./Button";
import defaultStyles from "./../Config/styles";
import Card from "./Card";

const FormPicker = ({ header, data, navigate, title = null, images }) => {
  return (
    <View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={defaultStyles.modalHeader}>{header}</Text>
        )}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppButton
            title={
              item.defaultPrice
                ? `${item.displayName} -- ${item.defaultPrice} / ${item.defaultPriceType}`
                : item.displayName
            }
            onPress={() => {
              // console.log("item:", item);
              navigate({ id: item.id });
            }}
          />
        )}
      /> */}

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={defaultStyles.modalHeader}>{header}</Text>
        )}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          images ? (
            <Card
              title={item.displayName}
              subTitle={
                item.defaultPrice ? ` ${item.defaultPrice}$ / hour` : null
              }
              imageUrl={images[item.id]}
              thumbnailUrl={images[item.id]}
              onPress={() => {
                console.log("item:", item);
                navigate({ id: item.id });
              }}
            />
          ) : (
            <AppButton
              title={
                item.defaultPrice
                  ? `${item.displayName} -- ${item.defaultPrice} / ${item.defaultPriceType}`
                  : item.displayName
              }
              onPress={() => {
                // console.log("item:", item);
                navigate({ id: item.id });
              }}
            />
          )
        }
      />
    </View>
  );
};

export default FormPicker;

const styles = StyleSheet.create({});
