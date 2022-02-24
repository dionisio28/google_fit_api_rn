import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit'

export default function App() {
  
  const [statusAPI, setStatusAPI] = React.useState("---")
 
  const handleCheckPermission = () => {
    // The list of available scopes inside of src/scopes.js file
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_BODY_READ,
        Scopes.FITNESS_BODY_WRITE,
      ],
    }
    GoogleFit.authorize(options)
      .then((authResult : any)=> {
        console.log("AUTH RESULT", authResult)
        if (authResult.success) {
          setStatusAPI("Sucesso!");
        } else {
          setStatusAPI("Acesso negado '-'");
        }
      })
      .catch(() => {
        setStatusAPI("Erro");
      })
  }

  const colorText = React.useMemo(() => {
    if(statusAPI ===  "Sucesso!") return "#09e022";

    if(statusAPI === "Acesso negado '-'") return "#e09109";
    
    if(statusAPI === "Erro") return "#ff0000";

    return "#b3b3b3"
  }, [statusAPI])

  React.useEffect(() => {
    handleCheckPermission()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='#00aeff'  />
      <View style={styles.card}>
        <Text style={styles.title}>CHECK FIT API STATUS</Text>
      
        <Text style={[styles.statusAPI, {color: colorText}]} > {statusAPI} </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleButton}>Conectar com o Google Fit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  }
});
