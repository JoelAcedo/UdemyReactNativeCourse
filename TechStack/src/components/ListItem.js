/**
 * Created by joelacedo on 25/06/2017.
 */
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { item, expanded } = this.props;
        const { descriptionStyle } = styles;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>
                        {item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.item;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectedLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
    descriptionStyle: {
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        flex: 1
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.item.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);