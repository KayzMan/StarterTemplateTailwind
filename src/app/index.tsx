import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-medium">
          100 Days of ReactNative 🥳🚀🚀
        </Text>
      </View>
    </SafeAreaView>
  );
}
