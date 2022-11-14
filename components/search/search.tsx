import { Box, Button, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [search, setSeach] = useState({
    name: "",
    status: "All",
    gender: "All",
  });
  const router = useRouter();

  const route = router.pathname;

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, gender, status } = search;

    router.push({
      pathname: route,
      query: {
        name,
        gender,
        status,
      },
    });
  };

  if (route !== "/characters") {
    return null;
  }
  return (
    <Box w="full" bg="white" px={4} py={2} rounded="xl">
      <form onSubmit={handleSearch}>
        <HStack>
          <Input
            placeholder="Buscar"
            w="full"
            variant="filled"
            rounded="3xl"
            colorScheme="whiteAlpha"
            value={search.name}
            onChange={(e) =>
              setSeach({
                ...search,
                name: e.target.value,
              })
            }
          />
          <Button rounded="full" px={6} type="submit">
            Enviar
          </Button>
        </HStack>
        <Stack spacing={5} direction="row" mt="2">
          <Select
            placeholder="status"
            value={search.status}
            size="sm"
            rounded="full"
            onChange={(e) => setSeach({ ...search, status: e.target.value })}
          >
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
            <option value="All">All</option>
          </Select>
          <Select
            size="sm"
            rounded="full"
            value={search.gender}
            onChange={(e) => setSeach({ ...search, gender: e.target.value })}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="All">All</option>
          </Select>
        </Stack>
      </form>
    </Box>
  );
}
