export default function Button({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
    >
      {text}
    </a>
  );
}
