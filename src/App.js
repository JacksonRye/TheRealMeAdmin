import React from "react";

import { Admin, Resource } from "react-admin";
import { FirebaseAuthProvider, FirebaseDataProvider } from "react-admin-firebase";
import { BlogCreate, BlogEdit, BlogList } from "./Blogs";
import { firebaseConfig, options } from "./firebase_config";
import MyLoginPage from "./LoginPage";

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options)

function App() {
  return (
    <Admin loginPage={MyLoginPage} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="blogs"
        list={BlogList}
        create={BlogCreate}
        edit={BlogEdit}
      />
    </Admin>
  );
}

export default App;
