import React from "react";
import { Text } from "react-native";

const CstmText = ({ style, bold = false, children }) => {
  const fontWeight = bold ? "OpenSans_600SemiBold" : "OpenSans_400Regular";

  return (
    <Text
      className="text-base"
      style={[{ fontFamily: fontWeight, color: "white" }, style]}
    >
      {children}
    </Text>
  );
};

export default CstmText;
