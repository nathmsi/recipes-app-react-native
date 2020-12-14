import { StyleSheet } from 'react-native';
import { RecipeCard, width } from '../../AppStyles';


const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14
  },
  searchView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: width * ( 3 / 5 )
  }
});

export default styles;
