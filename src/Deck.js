import React, { Component } from "react";
import { View, Animated, Text } from "react-native";

class Deck extends Component {
  renderCards() {
    console.log(this.props);
    return this.props.data.map((item) => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
