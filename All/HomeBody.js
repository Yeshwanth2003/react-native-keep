import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Card, { Empty } from "./Card";

export default function HomeBody({ set_to_next, DB, addTask, deleteTask }) {
  let [stackDisplay, setStackWidth] = useState("none");
  let [warningDisplay, setWarningDisplay] = useState("none");
  let title = "";

  function setNext(from) {
    set_to_next({ pass: true, from: from });
  }

  function stackToch() {
    if (stackDisplay !== "none") setStackWidth("none");
    else setStackWidth("flex");
  }
  function addStack() {
    if (title !== "") addTask(title);
    setStackWidth("none");
  }
  function buildTitle(value) {
    if (value.length === 20 && warningDisplay === "none")
      setWarningDisplay("flex");
    else if (warningDisplay !== "none") {
      title = value;
      setWarningDisplay("none");
    } else title = value;
  }
  function renderTitles() {
    if (DB.length != 0) {
      return DB.map((elem) => {
        return (
          <TouchableOpacity
            onPress={() => setNext(elem.title)}
            key={elem.key.toString()}
          >
            <Card>
              <View>
                <Text style={HomeBodyStyle.stackText}>{elem.title}</Text>
              </View>
              <TouchableOpacity onPress={() => deleteTask(elem.title)}>
                <View>
                  <Text style={HomeBodyStyle.stackDeletebutton}>{"🗑"}</Text>
                </View>
              </TouchableOpacity>
            </Card>
          </TouchableOpacity>
        );
      });
    }
    return (
      <>
        <Empty></Empty>
      </>
    );
  }

  return (
    <>
      <View style={HomeBodyStyle.Body}>
        <ScrollView style={HomeBodyStyle.scrollableView}>
          {renderTitles()}
        </ScrollView>
        <View style={HomeBodyStyle.addButton}>
          <TouchableOpacity
            style={HomeBodyStyle.addButtonInner}
            onPress={() => stackToch()}
          >
            <Text style={HomeBodyStyle.addButtonText}>{"\u2795"}</Text>
          </TouchableOpacity>
        </View>
        <View style={[HomeBodyStyle.addStack, { display: stackDisplay }]}>
          <TouchableWithoutFeedback onPress={() => stackToch()}>
            <View style={HomeBodyStyle.addStackInner}>
              <View style={HomeBodyStyle.stackAdder}>
                <View style={HomeBodyStyle.stackAdderHeading}>
                  <Text style={HomeBodyStyle.stackAdderHeadingText}>
                    Add Notes........
                  </Text>
                </View>
                <TextInput
                  style={HomeBodyStyle.adderInput}
                  maxLength={20}
                  onChangeText={(value) => buildTitle(value)}
                ></TextInput>
                <Text
                  style={[
                    HomeBodyStyle.warningText,
                    { display: warningDisplay },
                  ]}
                >
                  Maximum text limit is exceeded!
                </Text>
                <TouchableOpacity onPress={() => addStack()}>
                  <View style={HomeBodyStyle.stackAddButton}>
                    <View style={HomeBodyStyle.stackAddButtonInner}>
                      <Text style={HomeBodyStyle.stackAddButtonText}>Add</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
}
const HomeBodyStyle = StyleSheet.create({
  Body: {
    backgroundColor: "aliceblue",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  scrollableView: {
    width: "100%",
    height: "100%",
  },
  stackText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  addButton: {
    position: "absolute",
    backgroundColor: "#cbf7d0",
    height: 60,
    width: 60,
    borderRadius: 100,
    bottom: 0,
    right: 0,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  addButtonInner: {
    backgroundColor: "#949494",
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  addStack: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.9)",
  },
  addStackInner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  stackAdder: {
    backgroundColor: "aliceblue",
    width: "80%",
    height: 180,
    justifyContent: "space-evenly",
    borderRadius: 10,
    alignItems: "center",
  },
  adderInput: {
    paddingHorizontal: 10,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    color: "white",
    fontWeight: "bold",
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  stackAddButton: {
    backgroundColor: "#cbf7d0",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  stackAddButtonInner: {
    backgroundColor: "#949494",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
  },
  stackAddButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  stackAdderHeading: {
    margin: 0,
    width: "100%",
    paddingHorizontal: 10,
  },
  stackAdderHeadingText: {
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  warningText: {
    color: "red",
    marginLeft: "25%",
  },
  stackDeletebutton: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
