import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Button,
  SafeAreaView, // Import SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../config/SPACING";
import colors from "../config/Restaurant/colors";
import DATA from "../config/Restaurant/DATA";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - SPACING * 3;

const Dashboard = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const filteredRecipes = DATA[activeCategory]?.recipes?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Filter recipes based on search query

  return (
    <SafeAreaView style={styles.safeArea}> {/* Ensure SafeAreaView wraps the entire content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ padding: SPACING * 2 }}>
          {/* Header Section */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  width: SPACING * 4.5,
                  height: SPACING * 4.5,
                  borderRadius: SPACING * 3,
                  marginRight: SPACING,
                }}
                source={require("../assets/restaurant/avatar.jpg")}
              />
              <Text style={styles.username}>Hay White</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginRight: SPACING }}>
                <Ionicons
                  name="notifications-outline"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="menu"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Title Section */}
          <View style={{ width: "60%", marginTop: SPACING * 1.5 }}>
            <Text style={styles.title}>What would you like to order?</Text>
          </View>

          {/* Search Bar */}
          <View style={[styles.searchBar, { marginVertical: SPACING * 2 }]}>
            <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
            <TextInput
              placeholder="Search for dishes or categories..."
              placeholderTextColor={colors.gray}
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery} // Update search query state
            />
          </View>

          {/* Categories Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: SPACING * 3 }}
                key={index}
                onPress={() => setActiveCategory(index)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === index && styles.activeCategoryText,
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Recipes Section */}
          <View style={styles.recipesContainer}>
            {filteredRecipes?.length > 0 ? (
              filteredRecipes.map((item) => (
                <TouchableOpacity
                  style={styles.recipeCard}
                  key={item.id}
                  onPress={() => navigation.navigate("RecipeDetail", { recipe: item })} // Pass recipe data
                >
                  <Image style={styles.recipeImage} source={item.image} />
                  <Text style={styles.recipeName}>{item.name}</Text>
                  <Text style={styles.recipeDiscount}>
                    Today discount {item.discount}
                  </Text>
                  <Text style={styles.recipePrice}>$ {item.price}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noRecipesText}>
                No recipes match your search.
              </Text>
            )}
          </View>

          {/* Logout Button */}
          <View style={styles.logoutContainer}>
            <Button
              title="Logout"
              color="#FF6347"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  username: {
    fontSize: SPACING * 1.7,
    fontWeight: "800",
    color: colors.dark,
  },
  title: {
    fontSize: SPACING * 2.6,
    fontWeight: "700",
    color: colors.dark,
    paddingVertical: 0,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: colors.light,
    marginVertical: SPACING * 3,
    padding: SPACING * 0.5,
    borderRadius: SPACING,
    alignItems: "center",
  },
  searchInput: {
    color: colors.gray,
    fontSize: SPACING * 1.8,
    marginLeft: SPACING,
    flex: 1,
  },
  categoryText: {
    fontSize: SPACING * 1.7,
    fontWeight: "600",
    color: colors.gray,
  },
  activeCategoryText: {
    color: colors.black,
    fontWeight: "700",
    fontSize: SPACING * 1.8,
  },
  recipesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: SPACING * 2,
  },
  recipeCard: {
    width: ITEM_WIDTH,
    marginBottom: SPACING * 2,
  },
  recipeImage: {
    width: "100%",
    height: ITEM_WIDTH + SPACING * 3,
    borderRadius: SPACING * 2,
  },
  recipeName: {
    fontSize: SPACING * 2,
    fontWeight: "700",
    marginTop: SPACING,
  },
  recipeDiscount: {
    fontSize: SPACING * 1.5,
    color: colors.gray,
    marginVertical: SPACING / 2,
  },
  recipePrice: {
    fontSize: SPACING * 2,
    fontWeight: "700",
  },
  noRecipesText: {
    fontSize: SPACING * 2,
    color: colors.gray,
    textAlign: "center",
    marginTop: SPACING * 2,
  },
  logoutContainer: {
    marginTop: SPACING * 3,
    alignItems: "center",
  },
});
