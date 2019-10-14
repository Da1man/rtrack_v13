import React from "react";
import {w, h} from '../../constants'

import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


const OneProject = (props) => {
    if (props.favorite) {
        return (
            <View>
                <TouchableOpacity style={styles.oneProjectBox} onPress={props.projectLink}>
                    <View style={styles.oneProjectContainer}>
                        <View style={styles.oneProjectAvatarBox}>
                            <View style={styles.oneProjectAvatar}>
                                <Text
                                    style={styles.oneProjectAvatarLetter}>{props.projectName.charAt(0).toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={styles.oneProjectContentBox}>
                            <View style={styles.oneProjectProjectNameBox}>
                                <Text style={styles.oneProjectProjectName}>{props.projectName}</Text>
                            </View>
                            <View style={styles.oneProjectContentBoxInner}>
                                <View style={styles.oneProjectContentBoxInnerJobs}>
                                    <Text>Открыто задач: {props.openedTasks}</Text>
                                    <Text>Задач на мне: {props.myOpenedTasks}</Text>
                                </View>
                                <TouchableOpacity style={styles.oneProjectContentBoxInnerAddToFav}>
                                    <View>
                                        <Icon style={styles.addToFavIcon} name={'star'} size={25} solid/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View>
                <TouchableOpacity style={styles.oneProjectBox} onPress={props.projectLink}>
                    <View style={styles.oneProjectContainer}>
                        <View style={styles.oneProjectAvatarBox}>
                            <View style={styles.oneProjectAvatar}>
                                <Text
                                    style={styles.oneProjectAvatarLetter}>{props.projectName.charAt(0).toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={styles.oneProjectContentBox}>
                            <View style={styles.oneProjectProjectNameBox}>
                                <Text style={styles.oneProjectProjectName}>{props.projectName}</Text>
                            </View>
                            <View style={styles.oneProjectContentBoxInner}>
                                <View style={styles.oneProjectContentBoxInnerJobs}>
                                    <Text>Открыто задач: {props.openedTasks}</Text>
                                    <Text>Задач на мне: {props.myOpenedTasks}</Text>
                                </View>
                                <TouchableOpacity style={styles.oneProjectContentBoxInnerAddToFav}>
                                    <View>
                                        <Icon style={styles.addToFavIcon} name={'star'} size={25} regular/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    oneProjectBox: {
        width: w,
        height: 120,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: '#e23e34',
        borderBottomWidth: 1,
    },
    oneProjectContainer: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row'
    },
    oneProjectAvatarBox: {
        backgroundColor: '#efefef',
        height: h / 8.55,
        width: w / 4,
    },
    oneProjectAvatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    oneProjectAvatarLetter: {
        fontSize: 70,
    },
    oneProjectContentBox: {
        padding: 10,
        width: w / 1.37,
        flex: 1,
        alignItems: 'flex-start'
    },
    oneProjectProjectNameBox: {
      height: 50
    },
    oneProjectProjectName: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 7,
        lineHeight: 20,
        alignSelf: 'center',
        flexWrap: 'wrap',
    },
    oneProjectContentBoxInner: {
        flex: 1,
        flexDirection: 'row',
    },
    oneProjectContentBoxInnerJobs: {
        width: 120,
    },
    oneProjectContentBoxInnerAddToFav: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    addToFavIcon: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#efefef',
}
});

export default OneProject;