/**
 * Created by joelacedo on 25/06/2017.
 */
import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';

class LibraryList extends Component {

    renderItem({ item }) {
        return <ListItem item={item}/>
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={({ id }) => id}/>
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);