import React, { useState, useEffect } from "react";
import { View, RefreshControl, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import UsersList from "../components/UsersList";
import { getUsers } from "../services/api";

const HomeScreen = (props) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    getUsersData();
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#080d18",
      },
      headerTintColor: "#fff",
    });
  }, []);

  const getUsersData = async () => {
    setIsLoading(true);
    try {
      const response = await getUsers();
      setUsers(response);
      setFilteredUsers(response);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleRefresh = async () => {
    setSearchInput(""); // reset search input
    getUsersData();
  };

  const handleSearch = (text) => {
    const lowerCaseText = text.toLowerCase();
    setFilteredUsers(
      users.filter((user) => {
        return (
          user.name.toLowerCase().includes(lowerCaseText) ||
          user.username.toLowerCase().includes(lowerCaseText) ||
          user.email.toLowerCase().includes(lowerCaseText)
        );
      })
    );
  };

  const handleUserPress = (user) => {
    navigation.navigate("UserDetail", { user });
  };

  return (
    <View className="bg-slate-900">
      <View className="p-4 bg-[#080d18]/50 ">
        <SearchBar
          onSearch={handleSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </View>
      <UsersList
        users={filteredUsers}
        onUserPress={handleUserPress}
        refreshControl={
          <RefreshControl
            tintColor={"white"}
            refreshing={isLoading}
            onRefresh={handleRefresh}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
