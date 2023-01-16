import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CstmText from "../common/CstmText";
import UserItem from "./UserItem";

const UsersList = ({ users, onUserPress, refreshControl }) => {
  return (
    <FlatList
      data={users}
      renderItem={({ item, index }) => (
        <UserItem
          index={index}
          usersLength={users.length}
          user={item}
          onPress={onUserPress}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={refreshControl}
    />
  );
};

export default UsersList;
