import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../thems";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
export default function Home() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  function handleLocation(loc) {
    console.log(loc);
  }

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/Weather.png")}
        className="
        absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 flex-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <SimpleLineIcons name="magnifier" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index + 1 != locations.length;
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    className={`
                    py-3 px-3 flex-row justify-between border-0
                    ${showBorder ? "border-b-2 border-b-gray-400" : ""}
                  `}
                  >
                    <Text className="text-bold text-lg ">
                      London, United kingdom
                    </Text>
                    <Fontisto name="map-marker-alt" size={24} color="gray" />
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* forecast section */}
        <View className="mx-4 justify-around flex-1 mb-2">
          <Text className="text-white font-bold text-center text-2xl">
            London,
            <Text className="text-gray-300 text-lg font-semibold">
              United kingdom
            </Text>
          </Text>
          {/* weather image */}
          <View className="flex-row justify-between">
            {/* <Image source={require("../../assets/foggy.jpg")} /> */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
