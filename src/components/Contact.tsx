export default function Contact() {
    return (
      <div className="max-w-3xl mx-auto glass p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Have a project in mind or just want to say hi? Reach out below 👇
        </p>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent h-32"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  