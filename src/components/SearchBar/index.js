import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import { TextInput, View, Keyboard, Text } from "react-native";
import styles from './styles'
import { Button } from "./styles";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, placeholderPhrase}) => {
    return (
      <View style={styles.container}>
          <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
              <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
              />
              <TextInput
                style={styles.input}
                placeholder={placeholderPhrase}
                value={searchPhrase}
                onChangeText={setSearchPhrase}
                onFocus={() => {
                    setClicked(true);
                }}
              />
              {clicked && (
                  <Entypo 
                    name="cross" 
                    size={20}
                    color="black"
                    style={{ padding: 1 }}
                    onPress={() => {
                        setSearchPhrase("");
                        setClicked(false);
                    }}
                  />
              )}
          </View>
          {clicked && (
              <View style={styles.buttonView}>
                  <Button 
                    onPress={() => {
                        Keyboard.dismiss();
                        setClicked(false);
                        setSearchPhrase("");
                    }}
                  >
                      <Text style={styles.cancelText}>Cancel</Text>
                  </Button>
              </View>
          )}
      </View>
    );
};

export default SearchBar;