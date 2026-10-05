import PageHeader from "@/src/components/PageHeader";
import AboutFooter from "./_components/AboutFooter";
import AboutMain from "./_components/AboutMain";

export default function AboutPage() {
  return (
    <div className="pt-8 px-4 mx-auto w-full ">
      <PageHeader page="AboutPage" />
      <AboutMain />
      <AboutFooter />
    </div>
  );
}
