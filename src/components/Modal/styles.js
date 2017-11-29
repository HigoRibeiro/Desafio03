import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blackOpacity,
  },
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
  },
  title: {
    fontSize: fonts.big,
    color: colors.darker,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  containerButton: {
    flexDirection: 'row',
    flexGrow: 1,
    flexBasis: 0,
  },
});

export default styles;