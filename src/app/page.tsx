import Input from "@/components/Input/Input";
import Toast from "@/components/Toast/Toast";
import { AnimatePresence } from "motion/react";

export default function Home() {
  return (
    <div>
      <Input type="password" clearable></Input>
      <Toast duration={5} animation="fade" message="hello" />
    </div>
  );
}
