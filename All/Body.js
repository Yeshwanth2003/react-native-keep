import { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Todo from "./Todo";
import HomeBody from "./HomeBody";
import DB from "./db";

let width;

export default function Body({ navWidth, off_toogle }) {
  let [toDo, setNext] = useState({ pass: false, from: "" });
  let [homeBody, setHomeBody] = useState(true);
  const dbAccess = DB();
  width = navWidth;

  function set_to_next(obj) {
    setNext(obj);
    setHomeBody(false);
  }
  function set_to_home() {
    setNext({ pass: false, from: "" });
    setHomeBody(true);
    off_toogle()
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => off_toogle()}>
        <View style={BodyStyle.body}>
          {homeBody ? (
            <HomeBody
              set_to_next={set_to_next}
              DB={dbAccess.db}
              addTask={dbAccess.addTask}
              deleteTask={dbAccess.deleteTask}
            ></HomeBody>
          ) : (
            <Todo
              from={toDo.from}
              getTasksList={dbAccess.getTasksList}
              updateTaskList={dbAccess.updateTaskList}
              deleteTaskList={dbAccess.deleteTaskList}
            ></Todo>
          )}
          <View style={[BodyStyle.sideNav, { width: width }]}>
            <View style={BodyStyle.sideNavInner}>
              <TouchableOpacity
                onPress={() => set_to_home()}
                style={BodyStyle.navCard}
              >
                <Text style={BodyStyle.navText}>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const BodyStyle = StyleSheet.create({
  body: {
    backgroundColor: "aliceblue",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  sideNav: {
    position: "absolute",
    backgroundColor: "#949494",
    height: "100%",
    borderTopColor: "black",
    borderTopWidth: 1.5,
  },
  sideNavInner: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
  },
  navCard: {
    marginHorizontal: 4,
    marginVertical: 5,
    borderBottomColor: "#99abcdef",
  },
  navText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
});
