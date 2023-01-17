import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Deck from "./src/Deck";
import { DATA as catData } from "./mockdata/catData";

class App extends Component {
  renderCard(item) {
    return <Text>{item.text}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>CaTinder!</Text>
        <Deck renderCard={this.renderCard} data={catData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
  },
});

export default App;
