import React from "react";
import {w, h} from '../../constants'

import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const taskColors = {
    inwork: '#4db6acb3',
    done: '#4ca197',
    deployed: '#4caf50b3',
    ok: '#9ccc65b3'
};

const TaskListComponent = (props) => {
    var color
    switch (props.taskStatus) {
        case 'В работе': {
            color = taskColors.inwork
            break
        }
        case 'Сделан': {
            color = taskColors.done
            break
        }
        case 'Выложен': {
            color = taskColors.deployed
            break
        }
        case 'OK': {
            color = taskColors.ok
            break
        }
    }
    return (
    <View >
        <View style={styles.oneTaskBox}>
            <View>
                <Text style={styles.projectName} >{props.projectName}</Text>
            </View>
            <TouchableOpacity style={styles.taskNumberAndTaskNameBox} onPress={props.taskLink}>
                <Text style={styles.taskNumber}>#{props.taskNumber}</Text>
                <Text style={styles.taskName}>{props.taskName}</Text>
            </TouchableOpacity>
            <View style={styles.statusBox}>
                <View style={styles.statusBoxTimestampBox}>
                    <Text style={styles.modifiedDate}>Created: 30.08.2019</Text>
                </View>
                <TouchableOpacity style={styles.statusBoxStatus}>
                    <Text style={{
                        fontSize: 20,
                        width: w / 2.4,
                        fontWeight: '700',
                        marginLeft: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        backgroundColor: color,
                    }}>{props.taskStatus}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View >
    )
}

const styles = StyleSheet.create({
    oneTaskBox: {
        width: w,
        height: 120,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: '#e23e34',
        borderBottomWidth: 1,
    },
    projectName: {
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    taskNumberAndTaskNameBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    taskNumber: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 7,
        lineHeight: 20,
    },
    taskName: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 7,
        lineHeight: 20,
        alignSelf: 'center',
        flexWrap: 'wrap',
    },
    statusBox:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusBoxTimestampBox: {
        width: w / 2,
    },
    modifiedDate: {
      fontStyle: 'italic',
    },
    statusBoxStatus: {
        width: 200,
        flex: 1,
        flexDirection: 'row',
    },
    statusLabel: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',

    },
    statusName: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: this.color,
    },
});

export default TaskListComponent;