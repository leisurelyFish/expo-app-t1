import { StyleSheet, Image, View } from "react-native";

const PlaceholderImage = require("../assets/images/background-image.png");

export default function ImageViewer({ selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage;

  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    // flex: 1,
    paddingTop: 70,
  },
});
