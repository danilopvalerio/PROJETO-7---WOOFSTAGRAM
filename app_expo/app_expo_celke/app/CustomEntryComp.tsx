// CustomEntryComp.js
import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const CustomEntryComp = (props) => {
  const { label, placeholder, value, onChangeText, secureTextEntry } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#5c5c5c"
          secureTextEntry={secureTextEntry}
          keyboardType={placeholder === 'DD/MM/YYYY' ? 'numeric' : 'default'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%'
  },
  textLabel: {
    color: "white",
    fontSize: 17,
    marginBottom: 6,
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 7,
    height: 50,
    paddingHorizontal: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    color: "#222",
    fontSize: 17,
  },
});

export default CustomEntryComp;
