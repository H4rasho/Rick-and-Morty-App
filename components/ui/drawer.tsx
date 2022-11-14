import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../routes/routes";

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
          <DrawerCloseButton />
          <DrawerHeader>
            <Box display="flex" justifyContent="center" p={4}>
              <Image
                src={"/Rick_and_Morty.png"}
                alt="Rick and Morty"
                width={200}
                height={200}
              />
            </Box>
            <Text textAlign="center" fontWeight="bold">
              Menu
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <List display="flex" flexDirection="column" gap={5}>
              {ROUTES.map(({ name, route }) => (
                <Link href={route} key={route}>
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    _hover={{
                      color: "blue.500",
                    }}
                  >
                    {name}
                  </Text>
                </Link>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
