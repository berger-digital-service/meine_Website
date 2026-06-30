export default function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="w-[90%] max-w-[1180px] mx-auto flex justify-between items-center flex-wrap gap-4">
        <div className="text-slate text-[0.85rem]">
          © 2026 Berger Digital Service. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-[22px]">
          <a
            href="#"
            className="text-slate text-[0.85rem] hover:text-off-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-slate text-[0.85rem] hover:text-off-white transition-colors"
          >
            X
          </a>
          <a
            href="#"
            className="text-slate text-[0.85rem] hover:text-off-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
