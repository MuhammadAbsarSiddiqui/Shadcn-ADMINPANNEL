import { useSidebar } from "./components/ui/sidebar"

function CustomTrigger() {
  const { toggleSidebar } = useSidebar()
  return <button onClick={toggleSidebar}>Toggle Menu</button>
}