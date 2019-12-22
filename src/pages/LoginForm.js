import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.signInText}> 
				
				<Input
                    returnKeyType={"next"}
                    autoCapitalize="none"
                    onSubmitEditin={()=>this.passwordInput.focus()}    
					placeholder="Username"
                />


				<Input
					secureTextEntry={true}
                    placeholder="Password"
                    inputRef={input=>this.passwordInput=input}
                />
                
				<MyButton
					color={"#f1f1f1"}
					backgroundColor={"#0065e0"}
					text={"Giriş Yap"}
				/>

			</View>
    );
  }
}

const styles = StyleSheet.create({
	signInText: {
		marginVertical: 10,
		fontSize: 14,
		color: '#333'
	}
});