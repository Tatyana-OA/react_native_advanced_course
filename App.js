import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Deck from "./src/Deck";
import { DATA as catData } from "./mockdata/catData";
import { Card, Button, Image } from "react-native-elements";
class App extends Component {
  renderCard(item) {
    return (
      <Card title={item.text} key={item.id}>
        <Image
          source={{ uri: item.uri }}
          style={{ width: "100%", height: 250 }}
        />
        <Text style={{ marginBottom: 10 }}>Some text in card</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now"
        />
      </Card>
    );
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
