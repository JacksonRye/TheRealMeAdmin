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
  ReferenceInput,
  RichTextField,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const BlogCreate = (props) => (
  <Create {...props}>
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
      <TextField source="title" />
      <RichTextField source="body" />
      <TextField source="author" />
      <DateField source="createdate" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
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
