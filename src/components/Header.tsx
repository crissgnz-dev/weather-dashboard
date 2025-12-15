import Logo from "../assets/Logo.tsx";
import MenuIcon from "../assets/Menu.tsx";

export default function Header() {
  return (
    <div className="bg-[var(--color-principal)] flex items-center justify-between p-4">
      <Logo color={"#070707"} />
      <button className="p-2">
        <MenuIcon color={"#070707"} />
      </button>
    </div>
  );
}
