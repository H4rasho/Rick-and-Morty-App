import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import Link from "next/link";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomDrawer({
  isOpen,
  onClose,
}: DrawerComponentProps) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
      <DrawerOverlay>
        <DrawerContent>
          <Link href="/#">Home</Link>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
