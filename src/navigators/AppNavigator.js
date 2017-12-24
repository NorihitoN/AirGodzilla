
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, BackHandler } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';

import ExploreTab from '../components/MainScreen/ExploreTab';
import ProfileTab from '../components/MainScreen/ProfileTab';
import RoomScreen from '../components/RoomScreen';
import AuthenticationScreen from '../components/AuthenticationScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const tabConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#FF5A60',
    inactiveTintColor: '#3A3A3A',
    labelStyle: {
      fontSize: 10,
      fontWeight: 'bold'
    },
    tabStyle: {
      paddingBottom: 0,
      borderTopWidth: 1,
      borderTopColor: 'lightgray',
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: 'white',
    },
  },
}

export const MainScreen = TabNavigator({
  Explore: {
    screen: ExploreTab,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({focused, tintColor}) => <Icon name={'ios-search-outline'} size={30} color={tintColor}/>
    }
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused, tintColor}) => <Icon name={'ios-person-outline'} size={30} color={tintColor}/>
    }
  },
}, tabConfig);

export const AppNavigator = StackNavigator({
  Authentication: {
    screen: AuthenticationScreen,
    navigationOptions: {
      header: null,
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  Room: {
    screen: RoomScreen,
    navigationOptions: (props) => ({
      title: props.navigation.state.params.item.title,
    })
  },
});

class AppWithNavigationState extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#007B7F"/>
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
