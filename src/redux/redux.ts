// redux.js
import { combineReducers, createStore } from "redux";

// actions.js
// actionはreduxの機能でなく、オブジェクトを作るための純粋なjsの関数です。
// 下のcloseKabayaの3行をchromeを開き、command + option + iでコンソールを開き貼り付けましょう。
// その後、console.log(deleteName())で、{type: "DELETE_NAME", name: ''}というオブジェクトが生成されるのを確かめましょう。
export const deleteName = () => ({
  type: "DELETE_NAME",
  name: "",
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setName = (name: string) => ({
  type: "ADD_NAME",
  name: name,
});

const INITIAL_STATE = {
  name: "Nanasi",
};

// reducers.js
// reduxではglobal stateを巨大なjson(store)として管理します。stateの変更はjsonの書き換えによってのみ管理します。
// actionは純粋なjsのオブジェクトを作る関数であることを思い出してください。
// reducerはactionで生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
const reducer = (
  state = INITIAL_STATE,
  action: { name: string; type?: string }
) => {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.name };
    case "DELETE_NAME":
      return { ...state, name: "" };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  user: reducer,
});

// store.js
export const store = createStore(reducers);

// storeは巨大なjsonです。storeの中身を取り出すにはgetStateメソッドを使います。
// エミュレータでcommand + dを押し、enable remote debugをクリックしましょう。
// debuggerが現れるので、consoleタブをクリックし、エミュレータ上でアプリをcommandd + rで再起動しましょう。
console.log(store.getState());

// arrayやobjectを綺麗に表示したい時はconsole.tableが便利です。
console.table(store.getState());

// storeはjsonです。つまりjsのオブジェクトです。 jsの関数のtypeofでstoreのstateがオブジェクトであることを確かめましょう。
console.log(typeof store.getState);

// storeもまたjsのオブジェクトであり、４つしかメソッドを持たないことを確認しておきましょう。
console.log(store);
