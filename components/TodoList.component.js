/**
 * Created by talgvili on 12/06/2017.
 */
import React from 'react';
import {FlatList, StyleSheet} from "react-native"
import PropTypes from 'prop-types'
import Todo from '../components/Todo.component'

export default class TodoList extends React.Component {
	
	static propTypes = {
		todos: PropTypes.array.isRequired,
		onTodoPressed: PropTypes.func.isRequired
	}
	
	render() {
		return (
			<FlatList
				style={styles.todosList}
				data={this.props.todos}
				renderItem={({item}) => {
					return <Todo onTodoPressed={this.props.onTodoPressed} id={item.key} title={item.title} checked={item.checked}></Todo>
				}}
			/>
		);
	}
}

const styles = StyleSheet.create({
	todosList: {
		flex: 1,
	},
});