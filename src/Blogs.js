import React from "react";
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  DateTimeInput,
  DeleteButton,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  RichTextField,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

import { db } from "./firebase_config";
import firebase from "firebase/app";

const statsRef = db.collection("misc").doc("--stats--");

function createSuccess() {
  const increment = firebase.firestore.FieldValue.increment(1);

  statsRef.set({ blogCount: increment }, { merge: true });
}

function deleteSuccess() {
  const decrement = firebase.firestore.FieldValue.increment(-1);
  statsRef.set({ blogCount: decrement }, { merge: true });
}

export const BlogCreate = (props) => (
  <Create {...props} onSuccess={createSuccess}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="subtitle" />
      <RichTextInput source="body" />
      <TextInput source="author" />
    </SimpleForm>
  </Create>
);

export const BlogList = (props) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="title" />
      {/* <RichTextField source="body" /> */}
      <TextField source="author" />
      <DateField source="createdate" />
      <EditButton label="" />
      <DeleteButton onClick={deleteSuccess} label="" redirect={false} />
    </Datagrid>
  </List>
);

export const BlogEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="subtitle" />
      <RichTextInput source="body" />
      <TextInput source="author" />
    </SimpleForm>
  </Edit>
);
