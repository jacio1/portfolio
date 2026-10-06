import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function ContactForm() {
  return (
    <div>
      <h1 className="uppercase text-[50px] text-center pt-15">Get in touch</h1>
      <div>
        <form action="" className="grid ">
          <Input placeholder="Name" type="text" />
          <Input type="email" placeholder="email" />
          <Input type="text" placeholder="subject" />
          <Input type="text" placeholder="message"></Input>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
