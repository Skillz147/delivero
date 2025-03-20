import { StyleSheet, Platform, Dimensions } from "react-native";
import colors from "./colors";

const { width, height: windowHeight } = Dimensions.get("window");

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    width: "100%",
    height: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: `${colors.textLight}20`,
  },
  modalStoreName: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.flagship,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  backButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.surface,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  productsContainer: {
    paddingVertical: 15,
    flexGrow: 1,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  productDescription: {
    fontSize: 13,
    color: colors.textLight,
    marginVertical: 4,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },

  // Cart Sheet Styles
  cartSheetContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: `${colors.textLight}20`,
    backgroundColor: colors.background,
  },
  cartProductName: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.flagship,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  closeButton: {
    padding: 8,
  },
  cartSheetContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  cartProductImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginVertical: 12,
    backgroundColor: colors.surface,
  },
  addOnContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  addOnHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  addOnIcon: {
    marginRight: 6,
  },
  addOnLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.flagship,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  addOnOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  addOnText: {
    fontSize: 14,
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: colors.surface,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
    width: 30,
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  quantityAndFavoriteContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 8,
    marginTop: -5,
  },
  favoriteButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  favoriteText: {
    fontSize: 14,
    color: colors.textDark,
    marginLeft: 6,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: `${colors.textLight}20`,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalPriceText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: colors.textLight,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.surface,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  imageModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenImage: {
    width: width * 0.9,
    height: "80%",
  },
});