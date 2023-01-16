import React, { useState } from "react";
import { View, TextInput } from "react-native";

const SearchBar = ({ onSearch, searchInput, setSearchInput }) => {
  return (
    <View className="border p-2 border-slate-900 rounded-sm">
      <TextInput
        style={{
          color: "white",
          fontSize: 20,
        }}
        placeholderTextColor="#2a374e"
        placeholder="Search..."
        value={searchInput}
        onChangeText={(text) => {
          setSearchInput(text);
          onSearch(text);
        }}
      />
    </View>
  );
};

export default SearchBar;
