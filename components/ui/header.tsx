import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";
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
    <header>
      <Flex justifyContent="space-between">
        <Nav />
        <Button onClick={onMenuClick} display={{ sm: "none" }}>
          <MenuIcon />
        </Button>
      </Flex>
    </header>
  );
}
