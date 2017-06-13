import React from 'react';
import {StyleSheet, Text, View,KeyboardAvoidingView} from 'react-native';
import TodoList from  "./components/TodoList.component";
import AddTodo from  "./components/AddTodo.component";
import { Constants } from 'expo';


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			Todos : []
		}
	}
	
	todoAdded(newTodoLabel) {
		let newTodo = {
			title: newTodoLabel,
			checked: false,
			key: this.getRandomInt(0, 200000000)
		}
		
		let Todos = [...this.state.Todos, newTodo];
		this.setState({ Todos })
	}
	
	
	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	onTodoPressed(key) {
		let todo = this.state.Todos.find((x) => {
			return x.key == key;
		});
		
		todo.checked = !todo.checked;
		
		this.setState({ Todos: [...this.state.Todos]});
	}
	
	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.appContainer}>
				<View style={styles.appTitleContainer}>
					<Text style={styles.appTitle}>Seminarion</Text>
				</View>
				<View style={styles.todosListContainer}>
					<TodoList  onTodoPressed={::this.onTodoPressed} todos={this.state.Todos} />
				</View>
				<View style={styles.addTodoContainer}>
					<AddTodo todoAdded={::this.todoAdded} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: "white",
		flex: 1,
	},
	
	
	appTitleContainer: {
		marginTop: Constants.statusBarHeight,
		height: 80,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ff4646",
	},
	
	todosListContainer : {
		flex: 1,
	},
	
	addTodoContainer: {
		height: 60,
	},
	
	appTitle : {
		fontSize: 30,
		color: "white",
	}
});
