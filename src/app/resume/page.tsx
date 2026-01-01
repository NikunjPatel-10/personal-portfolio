"use client";

import Link from "next/link";

const PDF_URL = "/Nikunj-Patel-Frontend_Developer-Resume.pdf";

const Invoice = () => {
  return (
    <div className="max-w-4xl mx-auto pt-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-page-heading font-bold text-gray-900 dark:text-white">
          My Curriculum Vitae
        </h1>

        <p className="mt-2 text-sm lg:text-base font-bold text-gray-600 dark:text-gray-400">
          A summary of my professional journey, skills, and achievements.
        </p>
      </header>

      {/* Download Button */}
      <div className="my-10 flex justify-center">
        <a
          href={PDF_URL}
          download="Nikunj_Patel_Resume.pdf"
          className="text-white px-8 py-3 rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all"
        >
          Download Resume
        </a>
      </div>

      {/* PDF Preview */}
      <div className="w-full h-[80vh] rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={PDF_URL}
          className="w-full h-full"
          title="Resume Preview"
        />
      </div>

      {/* Footer */}
      <footer className="text-center flex flex-col gap-5 mt-6 mb-10">
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-bold">
          I’ve updated my resume with my latest skills, education, and project
          experience. I’m currently open to new opportunities 🙂
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
          Interested in working together?{" "}
          <Link
            href="/contact"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Get in touch
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Invoice;
