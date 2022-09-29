import { Avatar } from "@rneui/base";
import { makeStyles } from "@rneui/themed";
import { View, Text } from "react-native";

const FoodBody = (props) => {
  const { item } = props;
  const { image_uri, title, description, id } = item;
  const styles = useStyles();
  return (
    <View key={id} style={styles.container}>
      <Avatar size={40} rounded source={image_uri ? { uri: image_uri } : {}} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text} numberOfLines={2}>{description}</Text>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: theme.colors.primary,
    marginTop: 16,
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "600",
    fontSize: 18,
  },
  descriptionContainer: {
    marginLeft: 24,
    maxWidth: 280
  },
}));

export default FoodBody;
