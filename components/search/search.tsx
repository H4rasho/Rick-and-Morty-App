import { Box, Button, HStack, Input, Select, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [search, setSeach] = useState({
    character: "",
    state: "all",
    gender: "all",
  });
  const router = useRouter();

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let query = "";
    const { character, gender, state } = search;

    if (character) query += `name=${search.character}`;
    if (gender) query += `&status=${search.state}`;
    if (state) query += `&gender=${search.gender}`;

    router.push(`characters?${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <Box w={[250, 380, 500]} bg="white" px={4} py={2} rounded="xl">
        <HStack>
          <Input
            placeholder="Buscar"
            w="full"
            variant="filled"
            rounded="3xl"
            colorScheme="whiteAlpha"
            value={search.character}
            onChange={(e) =>
              setSeach({
                ...search,
                character: e.target.value,
              })
            }
          />
          <Button rounded="full" px={6} type="submit">
            Enviar
          </Button>
        </HStack>
        <Stack spacing={5} direction="row" mt="2">
          <Select
            placeholder="State"
            value={search.state}
            size="sm"
            rounded="full"
            onChange={(e) => setSeach({ ...search, state: e.target.value })}
          >
            <option value="Alive">Alive</option>
            <option value="Death">Death</option>
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
      </Box>
    </form>
  );
}
