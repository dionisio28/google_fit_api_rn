import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import GoogleFit, { Scopes } from 'react-native-google-fit'
import styles from './styles'

interface AuthGoogleFit { 
  success: boolean
}

const urlImage = "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

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
      .then(({success} : AuthGoogleFit)=> {
        if (success) {
          setStatusAPI("Sucesso!")
        } else {
          setStatusAPI("Acesso negado '-'")
        }
      })
      .catch(() => {
        setStatusAPI("Erro")
      })
  }

  const colorText = React.useMemo(() => {
    if(statusAPI ===  "Sucesso!") return "#09e022"

    if(statusAPI === "Acesso negado '-'") return "#e09109"
    
    if(statusAPI === "Erro") return "#ff0000"

    return "#b3b3b3"
  }, [statusAPI])

  return (
    <View style={styles.container}>
      <Image source={{uri: urlImage}} style={styles.imageBackground}/>
      <View style={styles.blur}/>
      <StatusBar style="light" backgroundColor='#00aeff'  />
      <View style={styles.card}>
        <Text style={styles.title}>CHECK FIT API STATUS</Text>
      
        <Text style={[styles.statusAPI, {color: colorText}]} > {statusAPI} </Text>

        <TouchableOpacity style={styles.button} onPress={handleCheckPermission}>
          <Text style={styles.titleButton}>Conectar com o Google Fit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

