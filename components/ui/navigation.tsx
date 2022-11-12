import { useDisclosure } from "@chakra-ui/react";

import CustomDrawer from "./drawer";
import Header from "./header";

export default function Navigation() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Header onMenuClick={onOpen} />
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}
