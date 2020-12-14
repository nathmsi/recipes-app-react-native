import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName
} from '../../data/MockDataAPI';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class IngredientScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    };
  };

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(192,192,192,0.3)' onPress={() => this.onPressRecipe(item)}>
      <TouchableHighlight underlayColor='rgba(192,192,192,0.3)' onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const ingredientId = navigation.getParam('ingredient');
    const ingredientUrl = getIngredientUrl(ingredientId);
    const ingredientName = navigation.getParam('name');
    return (
      <View style={styles.mainContainer}>
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey'}}>
          <Image style={styles.photoIngredient} source={{ uri: '' + ingredientUrl }} />
        </View>
        <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
        <ScrollView style={{ }}> 
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={getRecipesByIngredient(ingredientId)}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
          />
        </ScrollView>
      </View>
    );
  }
}
