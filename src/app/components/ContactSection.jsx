import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const ContactSection = () => {
  return (
    <section className="text-white py-5 md:py-20" id="contact">
      <div className="flex">
        <ContactPageIcon fontSize="large" />
        <h2 className="uppercase text-xl font-bold md:text-3xl mb-4 ml-2">
          Contact Me
        </h2>
      </div>

      <div className="grid md:grid-cols-3 md:gap-12">
        <div class="group flex flex-col mt-6 shadow-md bg-clip-border rounded-xl w-full justify-center justify-items-center">
          <div class="p-6 grid justify-center justify-items-center w-full">
            <ContactMailIcon sx={{ fontSize: 130 }} />
            <p className="text-sm font-light text-center pt-3">
              I&apos;m available for new opportunities. Please feel
              free to contact me to discuss further
            </p>
          </div>
        </div>

        <div class="flex flex-col col-span-2 mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
          <div class="p-6">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-gray-900 truncate dark:text-white">
                    Hire me!
                  </p>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      <a
                        href="mailto:kornkanok.dev@gmail.com"
                        className="hover:underline"
                      >
                        kornkanok.dev@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <a
                      href="mailto:kornkanok.dev@gmail.com"
                      className="hover:text-blue-500"
                    >
                      <ArrowCircleRightIcon />
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <GitHubIcon />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      <a
                        href="https://github.com/Kornkanokdevweb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/Kornkanokdevweb
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <a
                      href="https://github.com/Kornkanokdevweb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                    >
                      <LinkIcon />
                    </a>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <EditIcon />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      <a
                        href="https://medium.com/@kornkanokr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        medium.com/@kornkanokr
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <a
                      href="https://medium.com/@kornkanokr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                    >
                      <LinkIcon />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
