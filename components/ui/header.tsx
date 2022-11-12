import { Box, Button, Flex, Input, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { ROUTES } from "../../routes/routes";
import MenuIcon from "../icons/menu.icon";

export const Nav = () => {
  return (
    <Box as="nav" display={["none", "block"]}>
      <List display="flex" gap={5}>
        {ROUTES.map(({ name, route }) => (
          <Link href={route} key={route}>
            <ListItem>{name}</ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <Box as="header" px={8} py="4" w="full" shadow="lg">
      <Flex justifyContent="center" gap={2}>
        <Nav />
        <Button onClick={onMenuClick} display={{ sm: "none" }}>
          <MenuIcon />
        </Button>
        <Input placeholder="Buscar" />
      </Flex>
    </Box>
  );
}
