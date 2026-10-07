import PageHeader from "@/src/components/PageHeader";
import EducationMain from "./_components/EducationMain";

export default function EducationPage() {
  return (
    <div className="sm:px-6 md:px-4 mx-auto w-full">
      <PageHeader page="EducationPage" />
      <EducationMain />
    </div>
  );
}