"use client";

import { useState } from "react";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    if (!form) return;

    setStatus("sending");
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnpjjbog", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="">
      <h2 className="uppercase text-[32px] sm:text-[40px] md:text-[50px] text-center pt-10 md:pt-15">
        Get in touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mx-auto sm:px-6 mt-6 md:mt-8"
      >
        <Input placeholder="Name" type="text" name="name" required />
        <Input placeholder="Email" type="email" name="email" required />

        <Input
          placeholder="Subject"
          type="text"
          name="subject"
          className="sm:col-span-2"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="border-accent border rounded-lg placeholder:text-white text-[16px] p-4 bg-transparent outline-none resize-none sm:col-span-2 h-37"
        />

        <div className="sm:col-span-2 flex flex-col items-center gap-3 mt-2">
          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </Button>

          {status === "success" && (
            <p className="text-green-500 text-center">
              Message sent. Thank you!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center">
              Something went wrong. Try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}