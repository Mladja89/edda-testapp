import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CstmText from "../common/CstmText";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();
  console.log("❤❤❤", user);

  // This app's API only returns coordinates from the middle of the ocean, which is kinda boring, so I hardcoded it to always show Belgrade
  const lat = "44.7857911";
  const lng = "20.4268989";

  useEffect(() => {
    navigation.setOptions({
      title: user.name,
      headerStyle: {
        backgroundColor: "#080d18",
      },
      headerTintColor: "#fff",
    });
  }, [user]);

  const Label = ({ lbl }) => {
    return (
      <CstmText className=" text-slate-400/30" bold>
        {lbl.toUpperCase()}
      </CstmText>
    );
  };

  return (
    <View className="m-5 border-2 border-black/50 rounded-lg">
      <View className="bg-black/50 p-5">
        <CstmText>
          <Entypo name="location" size={20} color="#394257" />
          <Label lbl={" Address:"} />
        </CstmText>
        <View className="ml-2 pl-2 mt-1 mb-2 border-l-2 border-l-[#394257]">
          <CstmText>
            <FontAwesome5 name="city" size={16} color="#394257" />
            <Label lbl={" City: "} />
            {user.address.city}
          </CstmText>
          <CstmText>
            <FontAwesome5 name="road" size={18} color="#394257" />
            <Label lbl={" Street: "} />
            {user.address.street}
          </CstmText>
          <CstmText>
            <FontAwesome5 name="building" size={18} color="#394257" />
            <Label lbl={" Suit: "} />
            {user.address.suite}
          </CstmText>
          <CstmText>
            <FontAwesome5 name="location-arrow" size={18} color="#394257" />
            <Label lbl={" Zip Code: "} />
            {user.address.zipcode}
          </CstmText>
        </View>
        <CstmText>
          <Entypo name="phone" size={20} color="#394257" />
          <Label lbl={" Phone:"} /> {user.phone}
        </CstmText>
      </View>
      <Image
        style={{ width: "100%", height: 300 }}
        source={{
          uri: `https://static-maps.yandex.ru/1.x/?ll=${lng},${lat}&size=300,300&z=11&l=skl`,
        }}
      />
    </View>
  );
};

export default UserDetailScreen;
