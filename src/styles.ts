import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      fontWeight: "600",
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      color: "#1a1a1a",
      padding: 8,
      fontWeight: "bold"
    },
    statusAPI: {
      fontSize: 24,
      color: "#73a9ff",
      padding: 24,
      fontWeight: "bold"
    },
    button: {
      margin: 24,
      padding: 12,
      backgroundColor: "#00aeff",
      borderRadius: 30
    },
    titleButton: {
      fontSize: 16,
      color: "#FFF",
      fontWeight: "bold",
      paddingHorizontal: 6
    },
    card: {
      padding: 8,
      backgroundColor: "#FFF",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8
    },
    imageBackground: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 1,
      zIndex: 0,
    },
    blur: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.10)",
      zIndex: 0,
    }
  });

export default styles;