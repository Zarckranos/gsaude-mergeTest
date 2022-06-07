import React from "react";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import {Container, SearchBarView, SearchInput } from "./styles";
import { Keyboard, TouchableWithoutFeedback } from "react-native";




const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, placeholderPhrase}) => {
    return (
      <Container>
          <SearchBarView>
              <SearchInput
                placeholder={placeholderPhrase}
                placeholderTextColor="#929090"
                value={searchPhrase}
                onChangeText={setSearchPhrase}
                onFocus={() => {
                    setClicked(true);
                }}
              />
              {clicked && (
                  <Entypo 
                    name="cross" 
                    size={30}
                    color="#929090"
                    style={{ padding: 1}}
                    onPress={() => {
                        setSearchPhrase("");
                        setClicked(false);
                    }}
                  />
              )}
              {!clicked && (
                  <FontAwesome
                    name="search"
                    size={24}
                    color="#929090"
                    style={{ marginRight: 1}}
                  />
              )}
          </SearchBarView>
      </Container>
    );
};

export default SearchBar;