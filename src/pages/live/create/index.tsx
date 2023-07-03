import type { NextPage } from "next";
import Button from "../../../libs/components/Button";
import Input from "../../../libs/components/Input";
import TextArea from "../../../libs/components/TextArea";
import Layout from "../../../libs/components/Layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className="px-4 py-10 space-y-4 ">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
