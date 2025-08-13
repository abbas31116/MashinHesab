import { useNavigate } from "react-router";

export default function Header() {
  const items = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Faq", path: "/faq" },
  ];
  const nav = useNavigate();
  return (
    <div className="flex items-center gap-5 p-10">
      {items.map((item, index) => (
        <p onClick={() => nav(item.path)} key={`header-${index}`}>
          {item.name}
        </p>
      ))}
    </div>
  );
}
