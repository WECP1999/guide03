import { StatusBar } from "expo-status-bar";
import theme from "./styles/theme";
import { ThemeProvider } from "@rneui/themed";
import { FlatList, View } from "react-native";
import typicalFood from "./mock/food";
import { Card } from "@rneui/base";
import FoodBody from "./components/foodBody/FoodBody";

export default function App() {
  return (
    <View style={{
      paddingTop: 32,
    }}>
      <ThemeProvider theme={theme}>
        <StatusBar style='auto' />
        <FlatList
          data={typicalFood}
          renderItem={({ item }) => (
            <Card key={item.id}>
              <FoodBody item={item} />
            </Card>
          )}
          ItemSeparatorComponent={() => <Card.Divider />}
        />
      </ThemeProvider>
    </View>
  );
}
