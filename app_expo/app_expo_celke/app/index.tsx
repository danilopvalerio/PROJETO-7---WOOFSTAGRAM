import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Button
} from "react-native";
import CustomEntryComp from './CustomEntryComp';
import { Formik } from 'formik';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.background2}>
          <View style={styles.logoContainer}>
            <Image
              source={require("./assets/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.imageText}>Woofstagram</Text>
          </View>

          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              petName: '',
              petBirthday: '',
              petBreed: '',
              petFavoriteToy: ''
            }}
            onSubmit={values => {
              if (values.password !== values.confirmPassword) {
                alert("As senhas não correspondem!");
              } else {
                console.log(
                  "\nNome do Pet: " + values.petName +
                  "\nE-mail: " + values.email +
                  "\nData de Aniversário do Pet: " + values.petBirthday +
                  "\nRaça do Pet: " + values.petBreed +
                  "\nBrinquedo Favorito do Pet: " + values.petFavoriteToy
                );
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
              <View style={styles.container}>
                <CustomEntryComp
                  label="E-mail"
                  placeholder="Digite seu E-mail"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <CustomEntryComp
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                />
                <CustomEntryComp
                  label="Confirme a Senha"
                  placeholder="Confirme sua senha"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry={true}
                />
                <CustomEntryComp
                  label="Nome do Pet"
                  placeholder="Digite o nome do seu pet"
                  value={values.petName}
                  onChangeText={handleChange('petName')}
                />
                <CustomEntryComp
                  label="Data de Aniversário do Pet"
                  placeholder="DD/MM/YYYY"
                  value={values.petBirthday}
                  onChangeText={(text) => {
                    let formattedText = text.replace(/[^0-9]/g, '');
                    if (formattedText.length >= 5) {
                      formattedText = formattedText.slice(0, 2) + '/' + formattedText.slice(2, 4) + '/' + formattedText.slice(4, 8);
                    } else if (formattedText.length >= 3) {
                      formattedText = formattedText.slice(0, 2) + '/' + formattedText.slice(2, 4);
                    }
                    setFieldValue('petBirthday', formattedText);
                  }}
                />
                <CustomEntryComp
                  label="Raça do Pet"
                  placeholder="Digite a raça do seu pet"
                  value={values.petBreed}
                  onChangeText={handleChange('petBreed')}
                />
                <CustomEntryComp
                  label="Brinquedo Favorito do Pet"
                  placeholder="Digite o brinquedo favorito do seu pet"
                  value={values.petFavoriteToy}
                  onChangeText={handleChange('petFavoriteToy')}
                />
                <Button onPress={handleSubmit} title="Enviar" />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imageText: {
    color: 'white',
    marginTop: 30,
    fontSize: 25
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  background2: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
  }
});
