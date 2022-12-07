import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        usDollars: 0,
        convertedValue: '',
        difference: '',
        message: '',
        percent: '',
        symbol:'$',
        currencyDisplay: 'none',
        tipDisplay: 'none',
        homeDisplay: 'block',
        originalBill: 'Original Bill',
        billWithTip: 'Bill with Tip Added',
    }
    homePress = () => this.setState(state => ({
        homeDisplay: 'block',
        currencyDisplay: 'none',
        tipDisplay: 'none',
    }));
    currencyPress = () => this.setState(state => ({
        homeDisplay: 'none',
        currencyDisplay: 'block',
        tipDisplay: 'none',
    }));
    tipPress = () => this.setState(state => ({
        homeDisplay: 'none',
        currencyDisplay: 'none',
        tipDisplay: 'block',
    }));
    poundPress = () => this.setState(state => ({
        convertedValue: '£ ' + (this.state.usDollars*0.89).toFixed(2),
    }));
    aussiePress = () => this.setState(state => ({
        convertedValue: 'A$ ' + (this.state.usDollars*1.58).toFixed(2),
    }));
    swissPress = () => this.setState(state => ({
        convertedValue: (this.state.usDollars*0.99).toFixed(2) + ' francs',
    }));
    japenesePress = () => this.setState(state => ({
        convertedValue: '¥ ' + (this.state.usDollars*145.55).toFixed(2),
    }));
    Sum1=()=>
    {
        var N1 = parseInt(this.state.originalBill);
        
        var R = N1+(N1*0.10);
        this.setState({ 
            billWithTip: '$' + R 
        });
    }
    Sum2=()=>
    {
        var N1 = parseInt(this.state.originalBill);
        
        var R = N1+(N1*0.15);
        this.setState({ 
            billWithTip: '$' + R 
        });
    }
    Sum3=()=>
    {
        var N1 = parseInt(this.state.originalBill);
        
        var R = N1+(N1*0.20);
        this.setState({ 
            billWithTip: '$' + R 
        });
    }
    Sum4=()=>
    {
        var N1 = parseInt(this.state.originalBill);
        
        var R = N1+(N1*0.25);
        this.setState({ 
            billWithTip: '$' + R 
        });
    }
    Sum5=()=>
    {
        var N1 = parseInt(this.state.originalBill);
        
        var R = N1+(N1*0.30);
        this.setState({ 
            billWithTip: '$' + R 
        });
    }
    Sum6=()=>
    {
        var N1 = parseInt(this.state.originalBill);
        
        var R = N1+(N1*0.35);
        this.setState({ 
            billWithTip: '$' + R 
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
            
                {/*This container holds the main information for each screen.*/}
                <View style={{ display: this.state.homeDisplay }}>
                    <View style={styles.mainContainer}>
                        <Text style = {styles.titleText1}>
                            Welcome to the Currency Converter & Tip Calculator!
                        </Text>
                        <TouchableHighlight style={styles.mainButton}
                            onPress={this.currencyPress}
                            >
                                <Text style={styles.tinyText1}>
                                    Currency Converter
                                </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.mainButton}
                            onPress={this.tipPress}
                            >
                                <Text style={styles.tinyText1}>
                                    Tip Calculator
                                </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                
                <View style={{ display: this.state.currencyDisplay }}>
                    <View style={styles.contentContainer}>
                        <Text style = {styles.titleText}>
                            Currency Converter
                         </Text>
                         <View style={styles.bar}>
                        </View>
                         
                         
                             <Text style = {styles.tinyText}>
                                Input USD value 
                             </Text>
                             <View style = {styles.output}>
                                 <TextInput style={styles.tinyText}
                                onChangeText={(usDollars) => this.setState({usDollars})}
                                value={this.state.usDollars}
                         />
                         </View>
                             
                        
                        <View style = {styles.textBar}>
                            <TouchableHighlight style={styles.navButton1}
                            onPress={this.poundPress}
                            >
                                <Text style={styles.tinyText1}>
                                    U.K. Pound
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.navButton1}
                            onPress={this.swissPress}
                            >
                                <Text style={styles.tinyText1}>
                                    Swiss Franc
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style = {styles.textBar}>
                            <TouchableHighlight style={styles.navButton1}
                            onPress={this.aussiePress}
                            >
                                <Text style={styles.tinyText1}>
                                    Austrailian Dollar
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.navButton1}
                            onPress={this.japenesePress}>
                                <Text style={styles.tinyText1}>
                                    Japenese Yen
                                </Text>
                            </TouchableHighlight>
                        </View>  
                        <View style={styles.bar}>
                        </View>
                        <Text style = {styles.titleText1}>
                            Converted Value
                        </Text>
                        <View style={styles.output}>
                                <Text style={styles.tinyText1}>
                                    {this.state.convertedValue}
                                </Text>
                        </View>
                        <View style = {styles.textBar}>
                            <TouchableHighlight style={styles.tinyButton1}
                            onPress={this.homePress}
                            >
                                <Text style={styles.tinyText1}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                            
                        </View>
                        
                    </View>
                
                </View>
                <View style={{ display: this.state.tipDisplay }}>
                    <View style={styles.contentContainer}>
                    
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Money_Cash.jpg/1024px-Money_Cash.jpg' }}
                        >
                                <View style={styles.tiptitleBox}>
                                    <Text style={styles.tiptitle}>
                                        Tip Calculator
                                    </Text>
                                </View>
                                <View style={styles.tipinput}>
                                    <TextInput style={styles.tipinputText}
                                        onChangeText={(originalBill) => this.setState({originalBill})}
                                        value={this.state.originalBill}
                                    />
                                </View>
                            
                                <View style={styles.tipbuttonContainer}>
                                    <TouchableHighlight style={styles.tipbutton}
                                        onPress={this.Sum1}
                                    >
                                        <Text style={styles.tipbuttonText}>
                                            10%
                                        </Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.tipbutton}
                                        onPress={this.Sum2}
                                    >
                                        <Text style={styles.tipbuttonText}>
                                            15%
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                                
                                <View style={styles.tipbuttonContainer}>
                                    <TouchableHighlight style={styles.tipbutton}
                                        onPress={this.Sum3}
                                    >
                                        <Text style={styles.tipbuttonText}>
                                            20%
                                        </Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.tipbutton}
                                        onPress={this.Sum4}
                                    >
                                        <Text style={styles.tipbuttonText}>
                                            25%
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={styles.tipbuttonContainer}>
                                    <TouchableHighlight style={styles.tipbutton}
                                        onPress={this.Sum5}
                                    >
                                        <Text style={styles.tipbuttonText}>
                                            30%
                                        </Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.tipbutton}
                                        onPress={this.Sum6}
                                    >
                                        <Text style={styles.tipbuttonText}>
                                            35%
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                                <Text style={styles.tipparagraph}>
                                    You do the rest...
                                </Text>
                                <View style={styles.tipinput1}>
                                    <TextInput style={styles.tipinputText}
                                        value={this.state.billWithTip}
                                    />
                                </View>
                            <TouchableHighlight style={styles.tinyButton}
                            onPress={this.homePress}
                            >
                                <Text style={styles.tinyText1}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                        
                        </ImageBackground>
                    
                    </View>
                </View>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        height: 6*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B28ADC',
        
    },
    contentContainer: {
        height: 6*(deviceHeight/6),
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: 
    {
        height: 10,
        width: deviceWidth,
        backgroundColor: '#FFA246',
    },
    bar1: 
    {
        height: 2,
        width: deviceWidth,
        backgroundColor: '#FFA246',
    },
    titleText: {
        color: '#81060C',
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    titleText1: {
        color: '#81060C',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    textBar: 
    {
        height: 80,
        width: deviceWidth,
        backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tinyText: {
        color: '#762B4F',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 5,
    },
    tinyText1: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderColor: 'white',
    },
    navButton: {
        height: 50,
        width: 250,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10,
    
    },
    navButton1: {
        height: 60,
        width: 120,
        backgroundColor: '#E87F5D',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
    
    },
    output: {
        height: 50,
        width: 250,
        backgroundColor: '#B86666',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
    
    },
    button1: {
        flex:1,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
    },
    tracker: {
        height: 50,
        width: 50,
    },
    mainButton: {
        height: 100,
        width: 250,
        backgroundColor: '#81060C',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 10,
    
    },
    tinyButton: {
        height: 50,
        width: 100,
        backgroundColor: '#9CCC65',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    
    },
    tinyButton1: {
        height: 50,
        width: 100,
        backgroundColor: '#81060C',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    
    },
    
    
    tipscoreContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    tiptitleBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
    },
    tiptextInput: {
        height: 30,
        width: 150,
        borderWidth: 1,
        color: 'white',
        fontSize: 16,
        marginRight: 30,
        fontFamily: 'Times',
    },
    tiptitle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Times',
    },
    tipparagraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Times',
    },
    tipbuttonContainer: {
        flexDirection: 'row',
    },
    tipbutton: {
        height: 50,
        width: 90,
        backgroundColor: '#9CCC65',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    tipinput: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    tipinput1: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    tipbuttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Times',
    },
    tipinputText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Times',
    },

});
