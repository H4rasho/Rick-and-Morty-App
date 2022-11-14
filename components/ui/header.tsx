import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

import { ROUTES } from "../../routes/routes";
import MenuIcon from "../icons/menu.icon";
import Search from "../search/search";

export const Nav = () => {
  return (
    <Box as="nav" display={["none", "block"]} mb={2}>
      <List display="flex" gap={5} justifyContent="center">
        {ROUTES.map(({ name, route }) => (
          <Link href={route} key={route}>
            <ListItem fontSize="xl" fontWeight="semibold">
              {name}
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <Box as="header" px={8} py="4" w="full" bg="white" shadow="lg" rounded="md">
      <Nav />
      <Flex gap={2}>
        <Search />
        <Button onClick={onMenuClick} display={{ sm: "none" }}>
          <MenuIcon />
        </Button>
      </Flex>
    </Box>
  );
}
