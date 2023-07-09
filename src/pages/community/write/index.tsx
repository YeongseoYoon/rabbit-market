import type { NextPage } from "next";
import Button from "@/libs/components/Button";
import Layout from "@/libs/components/Layout";
import TextArea from "@/libs/components/TextArea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
