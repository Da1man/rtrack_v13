
import React from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements'
// import { createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import { createMaterialTopTabNavigator} from "react-navigation-tabs";

import OneTaskComponent from "./src/components/MyTaskComponent";
import OneProject from "./src/components/OneProjectComponent";

class App extends React.Component {
  render() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
            <StatusBar backgroundColor={'black'} />
            <ScreensApp />
        </SafeAreaView>
    );
  };
}

class MyTasksScreen extends React.Component {
    static navigationOptions = {
        gesturesEnabled: true
    };
    render() {
        return (
            <ScrollView >
                <View style={styles.myTasksContainer}>
                    <OneTaskComponent
                        projectName={'Чистая линия Chistaya linia Pureline unite'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={810}
                        taskName={'Теги адоба, вкладка digitalData'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'В работе'}

                    />
                    <OneTaskComponent
                        projectName={'Общие срочные задачи'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={611}
                        taskName={'Оценка Affect / PM приложение для мерчей маркетов'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Сделан'} />
                    <OneTaskComponent
                        projectName={'Вольтонов'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={810}
                        taskName={'Теги адоба, вкладка digitalData'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'В работе'}/>
                    <OneTaskComponent
                        projectName={'TravelAsk-Общий'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={2406}
                        taskName={'Матчинг Городов по Аренде Авто'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Выложен'}/>
                    <OneTaskComponent
                        projectName={'Unite / Odeon - разработка'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={48}
                        taskName={'Добавить телефон обратной связи с формах'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'OK'}/>
                    <OneTaskComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={133}
                        taskName={'при добавлении партнера некорректно происходит разграничение рядов'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'В работе'} />
                    <OneTaskComponent
                        projectName={'baltimore'}
                        projectLink={()=> this.props.navigation.navigate('TaskList')}
                        taskNumber={105}
                        taskName={'0.7. CrownPeak'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Выложен'} />
                </View>
            </ScrollView>
        );
    };
}

class ProjectsScreen extends React.Component {
    static navigationOptions = {
        gesturesEnabled: true
    };
  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
              <Text>PROJECTS SCREEN</Text>
                <OneProject />
                <OneProject />
                <OneProject />
                <OneProject />
                <OneProject />

            </View>
        </ScrollView>
    );
  };
}

class TaskListScreen extends React.Component {
    static navigationOptions = {
        gesturesEnabled: true
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>TASK LIST SCREEN</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Task')} >
                    <Text>GO TO TASK</Text>
                </TouchableOpacity>

            </View>
        );
    };
}

class OneTaskScreen extends React.Component {
    static navigationOptions = {
        gesturesEnabled: true
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>TASK SCREEN</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                    <Text>GO BACK</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const TabNavigator = createMaterialTopTabNavigator (
    {
  MyTasks: {
      screen: MyTasksScreen,
      navigationOptions: {
          title: 'My Tasks',
          tabBarLabel:'My Tasks',
          tabBarIcon: ({tintColor}) => (<Icon name='user' size={25} color={tintColor}/>)
      }},
  Projects: {
      screen: ProjectsScreen,
      navigationOptions: {
          title: 'Projects',
          tabBarLabel:'Projects',
          tabBarIcon: ({tintColor}) => (<Icon name='trello' size={25} color={tintColor}/>)
      }},
  TaskList: {
      screen: TaskListScreen,
          navigationOptions: {
          title: 'Task List',
              tabBarLabel:'Task List',
              tabBarIcon: ({tintColor}) => (<Icon name='tasks' size={25} color={tintColor}/>)
      }},
  Task: {
      screen: OneTaskScreen,
      navigationOptions: {
          title: 'Task',
          tabBarLabel:'Task',
          tabBarIcon: ({tintColor}) => (<Icon name='pencil' size={25} color={tintColor}/>)
      }},
},

    {
        showIcon: true,
        barStyle: {
            backgroundColor: 'black'
        },
        activeColor: '#e23e34',
        inactiveColor: 'white',
        initialRouteName: 'MyTasks',
        swipeEnabled: true,
        animationEnabled: true,
        shifting: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: '#e23e34',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: 'black'
            },
            showIcon: true,
            // showLabel: false,
            indicatorStyle: {
                height: 0,
            },
            pressColor: '#e23e34',
        }
    }
);

const ScreensApp = createAppContainer (TabNavigator);


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    myTasksContainer: {
      flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

export default App;
