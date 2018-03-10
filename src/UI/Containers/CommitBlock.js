import React, { Component } from 'react';
import {
    Platform,
    FlatList,
    View,
    Text,
    Button,
    TextInput,
    Switch,
    Keyboard
} from 'react-native';
import Styles from "../../Assets/Styles";
import TaskObject from "../../Domain/TaskObject";

const isAndroid = Platform.OS === "android";
const viewPadding = 10;

export default class CommitBlock extends Component<{},{}>{
    constructor(){
        super();
        this.state = {
            text: "",
            tasks: [
                new TaskObject("Task 1"),
                new TaskObject("Task 2", true),
                new TaskObject("Task 3")
            ],
            completedCount: 0,
            toDoCount: 0,
        };
        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    changeTextHandler(text){
        this.setState({ text: text });
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
        }
    };

    toggleStatus(index){
        let tasks = this.state.tasks;
        tasks[index].isDone = !tasks[index].isDone;
        this.setState({
            tasks: tasks
        });
    }

    deleteTask(index){
        let tasks = this.state.tasks;
        tasks.splice(index,1);
        this.setState({
            tasks: tasks
        });
    };

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
                                <View style={Styles.listItemCont}>
                                    <Switch onValueChange={() => this.toggleStatus(index)} value={item.isDone}/>
                                    <Text style={Styles.listItem} >
                                        {item.body}
                                    </Text>
                                    <Button onPress={() => this.deleteTask(index)} title='X'/>
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
                        placeholder="Add Commitments"
                        returnKeyType="done"
                        returnKeyLabel="done"
                    />
                </View>
            </View>
        );
    }
}