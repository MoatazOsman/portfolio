"use client";

import LineGradient from "@/components/lineGradient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactImage from "@/assets/contact-image.jpeg";
import { SelectedPage } from "@/enums/selectedPage";
import Image from "next/image";
import { FormEvent, useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const fieldClassName =
  "w-full bg-blue p-3 font-semibold text-deep-blue placeholder-deep-blue/70";

const Contact = ({ setSelectedPage }: Props) => {
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      return;
    }
    setIsSending(true);
  };

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
              <span className="text-yellow">CONTACT ME</span> TO GET STARTED
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
            <Image src={ContactImage} alt="Moataz Osman at a workstation" />
          </motion.div>

          <motion.div
            className="mt-10 basis-1/2 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/343b4f8fb0224f81f7a71a6f4d7cd366"
              method="post"
              noValidate
            >
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                className={fieldClassName}
                type="text"
                placeholder="NAME"
                autoComplete="name"
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
                Email
              </label>
              <input
                id="email"
                className={`${fieldClassName} mt-5`}
                type="email"
                placeholder="EMAIL"
                autoComplete="email"
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
                Message
              </label>
              <textarea
                id="message"
                className={`${fieldClassName} mt-5`}
                placeholder="MESSAGE"
                rows={4}
                cols={5}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
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
                className="mt-5 bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-red hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
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
