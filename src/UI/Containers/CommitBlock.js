import React, { Component } from 'react';
import {
    Platform,
    FlatList,
    View,
    Text,
    TextInput,
    Switch,
    Keyboard,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import Styles from "../../Assets/Styles";
import TaskObject from "../../Domain/TaskObject";
import IonIcon from 'react-native-vector-icons/Ionicons';

const isAndroid = Platform.OS === "android";
const viewPadding = 10;
const maxTextLength = 40;

export default class CommitBlock extends Component<{},{}>{
    constructor(){
        super();
        this.state = {
            text: "",
            tasks: [],
            completedCount: 0,
            toDoCount: 0,
        };

        this.loadTaskData();

        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.loadTaskData = this.loadTaskData.bind(this);

    }

    changeTextHandler(text){
        if(text.length <= maxTextLength){
            this.setState({ text: text });
        }
    };

    addNewTask(){
        let textNotEmpty = this.state.text.trim().length > 0;
        if (textNotEmpty) {
            let newTask = new TaskObject(this.state.text.trim());
            let tasks = this.state.tasks;
            tasks.push(newTask);

            this.setState({
                tasks: tasks,
                text: ""
            });
            this.saveTaskData(this.state.tasks);
        }
    };

    toggleTaskStatus(index){
        let tasks = this.state.tasks;
        tasks[index].isDone = !tasks[index].isDone;
        this.setState({
            tasks: tasks
        });
        this.saveTaskData(this.state.tasks);
    }

    deleteTask(index){
        let tasks = this.state.tasks;
        tasks.splice(index,1);
        this.setState({
            tasks: tasks
        });
        this.saveTaskData(this.state.tasks);
    };

    saveTaskData(tasks){
        let tasksString = this.convertTaskArrayToString(tasks);
        AsyncStorage.setItem('tasks', tasksString);
        this.loadTaskData();
    }

    loadTaskData(){
        AsyncStorage.getItem('tasks')
            .then((response) => {
                let tasks = this.convertTaskStringToArray(response);
                this.setState({
                    tasks: tasks
                });
            })
            .done();
    }

    convertTaskArrayToString(tasks){
        return tasks.map((task) => {
            return task.body+'|'+task.isDone;
        }).join('||');
    }

    convertTaskStringToArray(taskString){
        if(taskString!== null){
            let taskStringArray = taskString.split('||');
            let taskArray = taskStringArray.map((taskString) => {
                let stringArray = taskString.split('|');
                let status = stringArray[1] === 'true';
                return new TaskObject(stringArray[0],status)
            });
            return taskArray;
        }
        return [];
    }

    componentDidMount(){
        Keyboard.addListener(
            isAndroid ? "keyboardDidShow" : "keyboardWillShow",
            e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
        );

        Keyboard.addListener(
            isAndroid ? "keyboardDidHide" : "keyboardWillHide",
            () => this.setState({ viewPadding: viewPadding })
        );
    }

    render() {
        let completedTasksCount = 0;
        this.state.tasks.map((task) => {
            if(task.isDone){
                completedTasksCount++;
            }
        });
        return (
            <View style={Styles.row}>
                <View style={Styles.column}>
                    <Text style={Styles.largeText}>Commitments:</Text>
                    <FlatList
                        style={Styles.list}
                        data={this.state.tasks}
                        extraData={this.state}
                        renderItem={({ item, index }) => (
                            <View key={index}>
                                <View style={Styles.hr} />
                                <View style={Styles.listItemCont}>
                                    <Switch onValueChange={() => this.toggleTaskStatus(index)} value={item.isDone}/>
                                    <Text style={Styles.listItem} >
                                        {item.body}
                                    </Text>
                                    {
                                        (item.isDone
                                            ?
                                                <TouchableOpacity onPress={() => this.deleteTask(index)}>
                                                    <IonIcon name='ios-trash-outline' size={40} color='red'/>
                                                </TouchableOpacity>
                                            :
                                                <IonIcon name='ios-trash-outline' size={40} color='grey'/>
                                        )
                                    }
                                </View>
                                <View style={Styles.hr} />
                            </View>
                        )}
                    />
                    <TextInput
                        style={Styles.textInput}
                        value={this.state.text}
                        onChangeText={this.changeTextHandler}
                        onSubmitEditing={this.addNewTask}
                        placeholder="Add Commitments Here..."
                        returnKeyType="done"
                        returnKeyLabel="done"
                        multiline={false}
                        maxLength = {maxTextLength}
                    >
                    </TextInput>
                    <Text
                        style={{
                            fontSize:10,
                            color:'lightgrey',
                            textAlign: 'right'}}

                    >{this.state.text.length}/{maxTextLength}</Text>
                </View>
            </View>
        );
    }
}