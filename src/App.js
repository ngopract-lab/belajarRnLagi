import React from 'react';
import { Navigator, Text } from 'react-native';

import NewsList from './NewsList';
import NewsDetails from './NewsDetails';
import NewsComments from './NewsComments';

const App = () => (
  <Navigator
    initialRoute={{ title: 'home', newsObj: {} }}
    renderScene={(route, navigator) => {
      switch(route.title) {
        case 'home': return <NewsList navigator={navigator} />
        case 'detail': return <NewsDetails navigator={navigator} route={route} />
        case 'comment': return <NewsComments navigator={navigator} />
        default: return <NewsList />
      }
    }}
  />
)

export default App;
