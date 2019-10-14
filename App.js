
import React from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator} from "react-navigation-tabs";
import {w, h} from './constants'

import OneTaskComponent from "./src/components/MyTaskComponent";
import OneProject from "./src/components/OneProjectComponent";
import TaskListComponent from "./src/components/TaskListComponent";
import SearchableDropdown from 'react-native-searchable-dropdown'

var items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'angellist' },
    { id: 2, name: 'codepen' },
    { id: 3, name: 'envelope' },
    { id: 4, name: 'etsy' },
    { id: 5, name: 'facebook' },
    { id: 6, name: 'foursquare' },
    { id: 7, name: 'github-alt' },
    { id: 8, name: 'github' },
    { id: 9, name: 'gitlab' },
    { id: 10, name: 'instagram' },
];

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
                <View style={styles.projectListTopBar}>
                    <Text>PROJECTS LIST TOP BAR</Text>
                </View>
                <OneProject projectName={'CoreClass - Корпоративный сайт'}
                            openedTasks={35}
                            myOpenedTasks={12}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={true}
                />
                <OneProject projectName={'Чистая линия Chistaya linia Pureline unite'}
                            openedTasks={35}
                            myOpenedTasks={12}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={true}
                />

                <OneProject projectName={'Unite / Camay - Поддержка'}
                            openedTasks={3}
                            myOpenedTasks={2}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={false}
                />
                <OneProject projectName={'ЗАДАЧИ БЕЗ ПРОЕКТА'}
                            openedTasks={61}
                            myOpenedTasks={7}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={false}
                />
                <OneProject projectName={'Общие срочные задачи'}
                            openedTasks={39}
                            myOpenedTasks={2}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={false}
                />
                <OneProject projectName={'Unite / Odeon - разработка'}
                            openedTasks={19}
                            myOpenedTasks={18}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={false}
                />
                <OneProject projectName={'Affect / Big Bon'}
                            openedTasks={0}
                            myOpenedTasks={0}
                            projectLink={()=> this.props.navigation.navigate('TaskList')}
                            favorite={false}
                />
            </View>
        </ScrollView>
    );
  };
}

class TaskListScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.taskListContainer}>
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={135}
                        taskName={'Спам на почту'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'В работе'}
                    />
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={134}
                        taskName={'Расположение блока Клиенты'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Сделан'} />
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={133}
                        taskName={'При добавлении партнера некорректно происходит разграничение рядов'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Сделан'}/>
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={130}
                        taskName={'Поставить ограничение на загружаемый файл 15 мб'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Выложен'}/>
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={128}
                        taskName={'Ссылка на хеадхантер из админки'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Выложен'}/>
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={127}
                        taskName={'Сделать, чтобы после загрузки файла исчезала полоса загрузки'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'Выложен'} />
                    <TaskListComponent
                        projectName={'CoreClass - корпоративный сайт'}
                        taskNumber={126}
                        taskName={'Форма Вакансии. Валидации'}
                        taskLink={()=> this.props.navigation.navigate('Task')}
                        taskStatus={'OK'} />

                </View>
            </ScrollView>
        );
    };
}

class OneTaskScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            serverData: [],
            //Data Source for the SearchableDropdown
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>TASK SCREEN</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} >
                    <Text>GO BACK</Text>

                </TouchableOpacity>

                <View style={{ flex: 1, marginTop: 30 }}>
                    <Text style={{ marginLeft: 10 }}>
                        Searchable Dropdown from Static Array
                    </Text>
                    <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        //On text change listner on the searchable input
                        onItemSelect={item => alert(JSON.stringify(item))}
                        //onItemSelect called after the selection from the dropdown
                        containerStyle={{ padding: 5 }}
                        //suggestion container style
                        textInputStyle={{
                            //inserted text style
                            padding: 12,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            backgroundColor: '#FAF7F6',
                        }}
                        itemStyle={{
                            //single dropdown item style
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#FAF9F8',
                            borderColor: '#bbb',
                            borderWidth: 1,
                        }}
                        itemTextStyle={{
                            //text style of a single dropdown item
                            color: '#222',
                        }}
                        itemsContainerStyle={{
                            //items container style you can pass maxHeight
                            //to restrict the items dropdown hieght
                            maxHeight: '60%',
                        }}
                        items={items}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="placeholder"
                        //place holder for the search input
                        resetValue={false}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                    />
                    <Text style={{ marginLeft: 10 }}>
                        Searchable Dropdown from Dynamic Array from Server
                    </Text>
                    <SearchableDropdown
                        onTextChange={text => console.log(text)}
                        //On text change listner on the searchable input
                        onItemSelect={item => alert(JSON.stringify(item))}
                        //onItemSelect called after the selection from the dropdown
                        containerStyle={{ padding: 5 }}
                        //suggestion container style
                        textInputStyle={{
                            //inserted text style
                            padding: 12,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            backgroundColor: '#FAF7F6',
                        }}
                        itemStyle={{
                            //single dropdown item style
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#FAF9F8',
                            borderColor: '#bbb',
                            borderWidth: 1,
                        }}
                        itemTextStyle={{
                            //text style of a single dropdown item
                            color: '#222',
                        }}
                        itemsContainerStyle={{
                            //items container style you can pass maxHeight
                            //to restrict the items dropdown hieght
                            maxHeight: '50%',
                        }}
                        items={this.state.serverData}
                        //mapping of item array
                        defaultIndex={2}
                        //default selected item index
                        placeholder="placeholder"
                        //place holder for the search input
                        resetValue={false}
                        //reset textInput Value with true and false state
                        underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                    />
                </View>


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
    },
    projectListTopBar:{
      height: 40,
        width: w,
        borderBottomColor: '#e23e34',
        borderBottomWidth: 1,
        flex: 1,
    },
    taskListContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

export default App;
