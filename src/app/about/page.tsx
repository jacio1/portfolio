import PageHeader from "@/src/components/PageHeader";
import AboutFooter from "./_components/AboutFooter";
import AboutMain from "./_components/AboutMain";

export default function AboutPage() {
  return (
    <div >
      <PageHeader page="AboutPage" />
      <AboutMain />
      <AboutFooter />
    </div>
  );
}
