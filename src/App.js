import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
    const store = createStore(reducers);
    return (
        <Provider store={store}>
            <View>
            <Text> tech stack </Text>
            </View>
        </Provider>
    );
};

export default App;
