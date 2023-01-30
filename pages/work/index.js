import Layout from "../../layout/Default";
import ProjectWork from "@/components/Work";
export default function Work() {
  return (
    <Layout
      title="Soliman Al Halaby - Work"
      description="Explore my various projects in my selected works."
      noFooter
    >
      <ProjectWork page="work" />
    </Layout>
  );
}
