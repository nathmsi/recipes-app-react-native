import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'

import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
  getCategoryName,
} from '../../data/MockDataAPI';

import InputSearch from './InputSearch'

class SearchScreen extends React.Component {
  

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => <InputSearch />
    };
  };


  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(192,192,192,0.3)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.props.data}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  data: state.search.data
})

export default connect(mapStateToProps, {})(SearchScreen)
