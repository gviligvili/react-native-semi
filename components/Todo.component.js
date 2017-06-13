/**
 * Created by talgvili on 11/06/2017.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-checkbox';
import PropTypes from 'prop-types';



export default class Todo extends React.Component {
	
	static propTypes = {
		id: PropTypes.any.isRequired,
		checked: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired,
		onTodoPressed: PropTypes.func.isRequired,
	}
	
	render() {
		return (
			<View style={styles.todoRow}>
				<CheckBox
					label={this.props.title}
					checked={this.props.checked}
					onChange={() => {
						this.props.onTodoPressed(this.props.id)
					}}
				/>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	todoRow: {
		height: 60,
		width: "100%",
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingLeft: "10%",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#ABABAB",
	},
});
