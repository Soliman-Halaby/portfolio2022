import Layout from "../../layout/Default";
import FourOhFour from "@/components/404";

export default function FourOhFourPage() {
  return (
    <Layout
      title="404 - Not found"
      description="It turns out that you got lost... don't look too far anyway!"
      noFooter={true}
    >
      <FourOhFour />
    </Layout>
  );
}
