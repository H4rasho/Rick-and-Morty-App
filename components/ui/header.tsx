import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

import { ROUTES } from "../../routes/routes";
import MenuIcon from "../icons/menu.icon";
import Search from "../search/search";

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
      <Flex justifyContent="space-around" gap={2}>
        <Search />
        <Nav />
        <Button onClick={onMenuClick} display={{ sm: "none" }}>
          <MenuIcon />
        </Button>

        {/* <Menu>
            <MenuButton as={Button}>Actions</MenuButton>
            <MenuList>
              <MenuItem>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Enable email alerts?
                  </FormLabel>
                  <Switch id="email-alerts" />
                </FormControl>
              </MenuItem>
            </MenuList>
          </Menu> */}
      </Flex>
    </Box>
  );
}
