import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ViewIngredientsButton extends React.Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(192,192,192,0.3)' onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
