// src/styles/OrdersScreenStyles.js
import { StyleSheet, Platform } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.flagship,
    marginBottom: 20,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  orderContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    transitionProperty: "transform",
  },
  orderText: {
    fontSize: 14,
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    marginBottom: 5,
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  detailsContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    margin: 20,
    maxHeight: "85%",
    overflow: "hidden",
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.textLight,
    backgroundColor: colors.surface,
    position: "relative", // Ensure proper positioning context
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    padding: 10, // Increase touch area
    zIndex: 10, // Ensure it's above other elements
    backgroundColor: colors.surface,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.flagship,
    marginBottom: 10,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    textAlign: "center",
  },
  headerInfo: {
    marginTop: 10,
  },
  headerText: {
    fontSize: 14,
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    marginBottom: 5,
    textAlign: "center",
  },
  scrollableContent: {
    padding: 20,
    paddingTop: 0,
  },
  detailText: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 12,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  itemContainer: {
    marginLeft: 15,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "500",
  },
  subItemText: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: 15,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: colors.textDark,
    marginRight: 10,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    flex: 1,
  },
  editButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  editButtonText: {
    fontSize: 12,
    color: colors.surface,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  addInstructionPrompt: {
    marginBottom: 10,
  },
  instructionPromptText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    textDecorationLine: "underline",
  },
  instructionsContainer: {
    marginTop: 10,
  },
  instructionsInput: {
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    marginBottom: 10,
    minHeight: 60,
  },
  addInstructionsButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addInstructionsText: {
    fontSize: 14,
    color: colors.surface,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: colors.textLight,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: colors.textDark,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    marginBottom: 15,
    minHeight: 80,
  },
  rateButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  rateButtonDisabled: {
    opacity: 0.5,
  },
  rateButtonText: {
    fontSize: 14,
    color: colors.surface,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: colors.error,
    textAlign: "center",
    marginBottom: 15,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  retryButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  retryButtonText: {
    fontSize: 14,
    color: colors.surface,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: "center",
    marginBottom: 15,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  refreshButton: {
    backgroundColor: colors.flagship,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  refreshButtonText: {
    fontSize: 14,
    color: colors.surface,
    fontWeight: "600",
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
});