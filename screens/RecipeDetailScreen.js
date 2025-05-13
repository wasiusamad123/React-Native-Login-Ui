import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/Restaurant/colors";

const { height } = Dimensions.get("window");

const RecipeDetailScreen = ({ navigation, route }) => {
  const { recipe } = route.params || {}; // Safely access route.params
  const [isFavorite, setIsFavorite] = useState(false); // State for favorite

  if (!recipe) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: 'red' }}>Recipe not found!</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleShare = () => {
    Alert.alert("Share", `Share ${recipe.name} with your friends!`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Alert.alert(
      "Favorite",
      isFavorite
        ? `${recipe.name} removed from favorites.`
        : `${recipe.name} added to favorites.`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View>
          {/* Recipe Image Section */}
          <ImageBackground
            style={styles.imageBackground}
            source={recipe.image}
          >
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()} // Navigate back
            >
              <Ionicons
                name="arrow-back"
                size={SPACING * 2.5}
                color={colors.gray}
              />
            </TouchableOpacity>
            <View style={styles.iconRow}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={toggleFavorite} // Toggle favorite
              >
                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={SPACING * 2.5}
                  color={isFavorite ? colors.red : colors.gray}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleShare} // Share functionality
              >
                <Ionicons name="share" size={SPACING * 2.5} color={colors.gray} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* Recipe Details Section */}
          <View style={styles.detailsContainer}>
            <View style={styles.headerRow}>
              <View style={{ width: "70%" }}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" color={colors.black} size={SPACING * 1.7} />
                <Text style={styles.ratingText}>{recipe.rating}</Text>
              </View>
            </View>

            {/* Recipe Info Section */}
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <Ionicons name="time" color={colors.gray} size={SPACING * 1.7} />
                <Text style={styles.infoText}>{recipe.time}</Text>
              </View>
              <View style={styles.infoBox}>
                <Ionicons
                  name="bicycle"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text style={styles.infoText}>{recipe.del_time}</Text>
              </View>
              <View style={styles.infoBox}>
                <Ionicons
                  name="restaurant"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text style={styles.infoText}>{recipe.cooking_time}</Text>
              </View>
            </View>

            {/* Ingredients Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ingredients</Text>
              {recipe.ingredients.map((ingredient) => (
                <View style={styles.ingredientRow} key={ingredient.id}>
                  <View style={styles.ingredientBullet} />
                  <Text style={styles.ingredientText}>{ingredient.title}</Text>
                </View>
              ))}
            </View>

            {/* Description Section */}
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{recipe.description}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Choose Button */}
      <View style={styles.chooseButtonContainer}>
        <TouchableOpacity style={styles.chooseButton}>
          <Text style={styles.chooseButtonText}>Choose this for</Text>
          <Text style={styles.chooseButtonPrice}>$ {recipe.price}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageBackground: {
    padding: SPACING * 2,
    height: height / 2.5,
    paddingTop: SPACING * 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    height: SPACING * 4.5,
    width: SPACING * 4.5,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SPACING * 2.5,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
  detailsContainer: {
    padding: SPACING * 2,
    paddingTop: SPACING * 3,
    marginTop: -SPACING * 3,
    borderTopLeftRadius: SPACING * 3,
    borderTopRightRadius: SPACING * 3,
    backgroundColor: colors.white,
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: SPACING * 3,
    alignItems: "center",
  },
  recipeName: {
    fontSize: SPACING * 3,
    color: colors.black,
    fontWeight: "700",
  },
  ratingContainer: {
    padding: SPACING,
    paddingHorizontal: SPACING * 3,
    backgroundColor: colors.yellow,
    flexDirection: "row",
    borderRadius: SPACING,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    fontSize: SPACING * 1.6,
    fontWeight: "600",
    marginLeft: SPACING / 2,
    color: colors.black,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    padding: SPACING,
    paddingHorizontal: SPACING * 2,
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: SPACING,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: SPACING * 1.6,
    fontWeight: "600",
    marginLeft: SPACING / 2,
    color: colors.gray,
  },
  section: {
    marginVertical: SPACING * 3,
  },
  sectionTitle: {
    fontSize: SPACING * 2,
    fontWeight: "700",
    color: colors.dark,
  },
  ingredientRow: {
    marginVertical: SPACING,
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientBullet: {
    width: SPACING,
    height: SPACING,
    backgroundColor: colors.light,
    borderRadius: SPACING,
  },
  ingredientText: {
    fontSize: SPACING * 1.7,
    fontWeight: "600",
    color: colors.gray,
    marginLeft: SPACING,
  },
  descriptionText: {
    fontSize: SPACING * 1.7,
    fontWeight: "500",
    color: colors.gray,
  },
  chooseButtonContainer: {
    padding: SPACING * 2,
  },
  chooseButton: {
    width: "100%",
    padding: SPACING * 2,
    backgroundColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SPACING * 2,
  },
  chooseButtonText: {
    fontSize: SPACING * 2,
    color: colors.white,
    fontWeight: "700",
  },
  chooseButtonPrice: {
    fontSize: SPACING * 2,
    color: colors.yellow,
    fontWeight: "700",
    marginLeft: SPACING / 2,
  },
});
