/**
 * Created by talgvili on 11/06/2017.
 */

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';



export default class AddTodo extends React.Component {
	
	static propTypes = {
		todoAdded: PropTypes.func.isRequired,
	}
	
	constructor(props) {
		super(props);
		
		this.state = {
			label: "",
		}
	}
	
	labelChanged(label) {
		this.setState({ label })
	}
	
	onAddClicked() {
		if (this.state.label != "") {
			this.props.todoAdded(this.state.label);
			this.setState({label: ""})
		}
	}
	
	render() {
		return (
			<View style={styles.addTodoContainer}>
				<TextInput style={styles.todoInput}
				           value={this.state.label}
				           onChangeText={::this.labelChanged}
				           underlineColorAndroid="transparent"  />
				<TouchableOpacity style={styles.addIconContainer}  onPress={::this.onAddClicked}>
					<Text  style={styles.addIcon} >+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	addTodoContainer: {
		height: 60,
		width: "100%",
		backgroundColor: "#ff4646",
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingLeft: "3%",
		flexDirection: "row"
	},
	
	todoInput: {
		width: "80%",
		height: "80%",
		backgroundColor: "#FF898C",
		borderRadius: 10,
		fontSize: 20,
		paddingRight: "3%",
		paddingLeft: "3%",
		color: "white",
		alignSelf: "center"
	},
	
	addIconContainer: {
		marginLeft: "3%",
		width: 40,
		height: 40,
		paddingBottom: 5,
		backgroundColor: "#FF898C",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: 'center',
	},
	
	addIcon: {
		color: "white",
		fontSize: 30
	}
});
