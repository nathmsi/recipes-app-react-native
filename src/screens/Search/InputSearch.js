import React, { Component } from 'react'
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles';



import { connect } from 'react-redux'
import {
    handleInputChaged
} from '../../store/Action'

export class InputSearch extends Component {

    handleInputChaged = (value) => {
        this.props.handleInputChaged(value)
    }

    render() {
        return (
            <View style={styles.searchView}>
            <SearchBar
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                }}
                inputContainerStyle={{
                    backgroundColor: '#EDEDED'
                }}
                inputStyle={{
                    backgroundColor: '#EDEDED',
                    borderRadius: 10,
                    color: 'black'
                }}
                searchIcond
                clearIcon
                round
                showCancel
                onChangeText={text => this.handleInputChaged(text)}
                placeholder="Search"
                value={this.props.value}
            />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.search.value,
})

const mapDispatchToProps = {
    handleInputChaged
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch)
