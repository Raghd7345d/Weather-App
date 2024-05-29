import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-700">Test</Text>
    </View>
    // <View style={globalStyles.container}>
    //   <Text style={globalStyles.heading}>Homepage</Text>
    //   <Text style={globalStyles.heading}>Test</Text>
    //   <Text className="text-red-700">Test</Text>
    // </View>
  );
}
