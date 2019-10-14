import React from "react";
import {w, h} from '../../constants'

import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


const OneProject = (props) => {
    return (
        <View >
            <TouchableOpacity style={styles.oneProjectBox}>
                <View style={styles.oneProjectContainer}>
                    <View style={styles.oneProjectAvatarBox}>
                        <View style={styles.oneProjectAvatar}>
                            <Text style={styles.oneProjectAvatarLetter}>A</Text>
                        </View>
                    </View>
                    <View style={styles.oneProjectContentBox}>
                        <View style={styles.oneProjectProjectNameBox}>
                            <Text style={styles.oneProjectProjectName}>CoreClass - Корпоративный сайт</Text>
                        </View>
                        <Text>Открыто задач: 36</Text>
                        <Text>Задач на мне: 9</Text>
                    </View>
                </View>


            </TouchableOpacity>
        </View >
    )
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
        height: 100,
        width: 100,
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
    },
    oneProjectProjectNameBox: {
      height: 55
    },
    oneProjectProjectName: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 7,
        lineHeight: 20,
        alignSelf: 'center',
        flexWrap: 'wrap',
    }
});

export default OneProject;