import Icon from '@react-native-vector-icons/material-icons';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fontFamily} from '../../global/theme';

type SearchBarProps = {
  onChange: (t: string) => void;
};
const SearchBar = ({onChange}: SearchBarProps) => {
  return (
    <View style={style.container}>
      <Icon name="search" size={22} color={colors.black} />
      <TextInput
        style={style.textInput}
        placeholder="Pesquisar"
        placeholderTextColor={colors.black}
        onChangeText={onChange}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textInput: {
    paddingLeft: 8,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    width: '100%',
    shadowOpacity: 0,
    elevation: 0,
    fontFamily: fontFamily.thin,
    fontSize: 16,
  },
});
export default SearchBar;
