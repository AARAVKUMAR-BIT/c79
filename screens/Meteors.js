import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import axios from axios;

export default class MeteorScreen extends Component {

    constructor(props){
        super(props);
        this.state ={
           meteor:{},
        };
    }

    ComponentDidMount(){
        this.getmeteors()
    }

 
    getMeteors = () =>{
axios
    }
  render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                    
                }}>
                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}