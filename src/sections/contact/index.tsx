"use client";

import LineGradient from "@/components/lineGradient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactImage from "@/assets/contact-image.webp";
import { SelectedPage } from "@/enums/selectedPage";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const fieldClassName =
  "min-w-0 w-full break-words bg-blue p-3 text-base font-semibold text-deep-blue placeholder-deep-blue/70";

const Contact = ({ setSelectedPage }: Props) => {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const {
    register,
    trigger,
    setFocus,
    getFieldState,
    formState: { errors },
  } = useForm<ContactFormValues>();

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("sent", "1");
    url.hash = "contact";
    setNextUrl(url.toString());

    const landed = new URLSearchParams(window.location.search).get("sent");
    if (landed === "1") {
      setSent(true);
      url.searchParams.delete("sent");
      window.history.replaceState(
        {},
        "",
        `${url.pathname}${url.search}${url.hash}`
      );
    }

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) setIsSending(false);
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setAttempted(true);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      const order: (keyof ContactFormValues)[] = ["name", "email", "message"];
      for (const field of order) {
        if (getFieldState(field).error) {
          setFocus(field);
          break;
        }
      }
      return;
    }
    setIsSending(true);
  };

  const statusMessage = sent
    ? "Message sent. I will reply by email."
    : attempted && Object.keys(errors).length > 0
      ? "The form has errors. Fix the highlighted fields and send again."
      : "";

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-48">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        <motion.div
          className="flex w-full justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <h2 className="font-playfair text-4xl font-semibold">
              <span className="text-yellow">CONTACT ME</span>
            </h2>
            <div className="my-5 flex md:justify-end">
              <LineGradient width="w-1/2" />
            </div>
          </div>
        </motion.div>

        <div className="mt-5 gap-16 md:flex md:justify-between">
          <motion.div
            className="flex basis-1/2 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={ContactImage}
              alt="Moataz Osman at a workstation"
              className="h-auto w-full"
              sizes="(min-width: 1060px) 40vw, 83vw"
            />
          </motion.div>

          <motion.div
            className="mt-10 min-w-0 basis-1/2 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div role="status" aria-live="polite" className="min-h-[1.5rem]">
              {statusMessage ? (
                <p className="mb-5 font-semibold text-yellow">{statusMessage}</p>
              ) : null}
            </div>

            <form
              onSubmit={onSubmit}
              action="https://formsubmit.co/343b4f8fb0224f81f7a71a6f4d7cd366"
              method="post"
              noValidate
            >
              {nextUrl ? (
                <input type="hidden" name="_next" value={nextUrl} />
              ) : null}
              <input
                type="hidden"
                name="_subject"
                value="Portfolio contact from Moataz Osman"
              />

              <label htmlFor="name" className="sr-only">
                Name (required)
              </label>
              <input
                id="name"
                className={fieldClassName}
                type="text"
                placeholder="NAME"
                autoComplete="name"
                maxLength={100}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name", { required: true, maxLength: 100 })}
              />

              {errors.name && (
                <p id="name-error" className="mt-1 text-red">
                  {errors.name.type === "required" && "Enter your name."}
                  {errors.name.type === "maxLength" &&
                    "Name must be 100 characters or fewer."}
                </p>
              )}

              <label htmlFor="email" className="sr-only">
                Email (required)
              </label>
              <input
                id="email"
                className={`${fieldClassName} mt-5`}
                type="email"
                placeholder="EMAIL"
                autoComplete="email"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.email && (
                <p id="email-error" className="mt-1 text-red">
                  {errors.email.type === "required" &&
                    "Enter your email address."}
                  {errors.email.type === "pattern" &&
                    "Enter a valid email address."}
                </p>
              )}

              <label htmlFor="message" className="sr-only">
                Message (required)
              </label>
              <textarea
                id="message"
                className={`${fieldClassName} mt-5`}
                placeholder="MESSAGE"
                rows={4}
                maxLength={2000}
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                {...register("message", { required: true, maxLength: 2000 })}
              />

              {errors.message && (
                <p id="message-error" className="mt-1 text-red">
                  {errors.message.type === "required" && "Enter a message."}
                  {errors.message.type === "maxLength" &&
                    "Message must be 2,000 characters or fewer."}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="mt-5 min-h-11 bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-red-surface hover:text-white active:bg-red-surface active:text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "SENDING…" : "SEND ME A MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
