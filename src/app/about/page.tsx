import PageHeader from "@/src/components/ui/PageHeader";
import AboutFooter from "./_components/AboutFooter";
import AboutMain from "./_components/AboutMain";

export default function AboutPage() {
  return (
    <div className="container">
      <PageHeader page="AboutPage" />
      <AboutMain />
      <AboutFooter />
    </div>
  );
}
