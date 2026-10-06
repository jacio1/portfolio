import PageHeader from "@/src/components/PageHeader";
import ContactCard from "./_components/ContactCard";
import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <PageHeader page="ContactPage" />
      <ContactCard/>
      <ContactForm/>
    </div>
  );
}
