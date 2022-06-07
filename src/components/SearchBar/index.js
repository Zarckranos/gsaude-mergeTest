import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import {Container, SearchBarView, SearchInput } from "./styles";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, placeholderPhrase}) => {
    return (
      <Container>
          <SearchBarView>
              <SearchInput
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
                    size={30}
                    color="#929090"
                    style={{ padding: 1 }}
                    onPress={() => {
                        setSearchPhrase("");
                        setClicked(false);
                    }}
                  />
              )}
              {!clicked && (
                  <FontAwesome
                    name="search"
                    size={25}
                    color="#929090"
                    style={{ marginRight: 3 }}
                  />
              )}
          </SearchBarView>
      </Container>
    );
};

export default SearchBar;