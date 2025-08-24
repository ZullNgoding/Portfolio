export default function Footer() {
    return (
      <footer className="text-center py-6 glass mt-10">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Muhammad Zulfan — Built with ❤️ and Next.js + Tailwind
        </p>
      </footer>
    );
  }
  