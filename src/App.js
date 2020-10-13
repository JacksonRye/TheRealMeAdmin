import React from "react";

import { Admin, Resource } from "react-admin";
import { FirebaseDataProvider } from "react-admin-firebase";
import { BlogCreate, BlogEdit, BlogList } from "./Blogs";
import { firebaseConfig, options } from "./firebase_config";

const dataProvider = FirebaseDataProvider(firebaseConfig, options);

function App() {
  return (
    <Admin dataProvider={dataProvider}>
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
