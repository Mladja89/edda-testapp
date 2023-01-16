import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CstmText from "../common/CstmText";
import { AntDesign } from "@expo/vector-icons";

const UserItem = ({ usersLength, user, onPress, index }) => {
  const Label = ({ lbl }) => {
    return (
      <CstmText className=" text-slate-400/30" bold>
        {lbl.toUpperCase()}
      </CstmText>
    );
  };

  return (
    <View
      className={`flex-1 flex-row  justify-between border bg-slate-800/20 border-slate-800 m-4 p-4 rounded-xl shadow ${
        index === usersLength - 1 ? "mb-28" : ""
      }`}
    >
      <View>
        <CstmText className="text-sm">
          <AntDesign name="user" size={17} color="#394257" />
          <Label lbl={" Name:"} /> {user.name}
        </CstmText>
        <CstmText className="text-sm">
          <AntDesign name="idcard" size={17} color="#394257" />
          <Label lbl={" Username:"} /> {user.username}
        </CstmText>
        <CstmText className="text-sm">
          <AntDesign name="mail" size={17} color="#394257" />
          <Label lbl={" Email:"} /> {user.email}
        </CstmText>
      </View>
      <TouchableOpacity
        className="absolute top-0 right-0 bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-t-md rounded-tl-none rounded-br-none"
        onPress={() => onPress(user)}
      >
        <CstmText bold className="p-1">
          VIEW
        </CstmText>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
