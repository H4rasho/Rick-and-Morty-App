import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import Link from "next/link";

export default function CustomDrawer({ isOpen, onClose }: any) {
  console.log({ isOpen, onClose });

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
