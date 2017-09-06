import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    LayoutAnimation
} from 'react-native';

export default class App extends Component {

    state = {
        selectedBar: null
    }

    onPressHandler = (index) => {
        // Thực hiện animation cho lần render tiếp theo
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({
            selectedBar: index
        });
    }

    render() {
        const {
            container,
            buttonWrapper,
            button,
            text,
            barWrapper,
            bar
        } = styles;

        const { selectedBar } = this.state;

        return (
            <View style={container}>
                <View style={buttonWrapper}>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.onPressHandler(1)}
                    >
                        <Text style={text}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.onPressHandler(2)}
                    >
                        <Text style={text}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.onPressHandler(3)}
                    >
                        <Text style={text}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={barWrapper}>
                    <View
                        style={[
                            bar,
                            {
                                width: selectedBar === 1 ? '100%' : `${Math.floor((Math.random() * 50) + 1)}%`,
                                backgroundColor: '#68CAFB'
                            }
                        ]}
                    />
                    <View
                        style={[
                            bar,
                            {
                                width: selectedBar === 2 ? '100%' : `${Math.floor((Math.random() * 50) + 1)}%`,
                                backgroundColor: '#C791E8'
                            }
                        ]}
                    />
                    <View
                        style={[
                            bar,
                            {
                                width: selectedBar === 3 ? '100%' : `${Math.floor((Math.random() * 50) + 1)}%`,
                                backgroundColor: '#28A264'
                            }
                        ]}
                    />
                    {selectedBar === 3 &&
                        <View
                            style={[
                                bar,
                                {
                                    width: '50%',
                                    backgroundColor: '#97D283'
                                }
                            ]}
                        />
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },

    buttonWrapper: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#1F1F1F'
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    barWrapper: {
        marginTop: 20
    },

    bar: {
        height: 35,
        marginBottom: 5,
        backgroundColor: 'red',
    }
})