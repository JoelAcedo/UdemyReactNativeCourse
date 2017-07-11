/**
 * Created by joelacedo on 11/07/2017.
 */
import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection, Button } from './';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button text="Yes" onPress={onAccept} />
                    <Button text="No" onPress={onDecline}/>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };