import * as React from "react";
import { Flex, Text, Box, Grid, Circle } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProjects } from "../store/projects/actions";
import dayjs from "dayjs";

export default function Projects() {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state: any) => state.projects || []);
  React.useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <Flex
      mt="4rem"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      w="100%"
      p={{ base: "1rem", lg: "2rem" }}
    >
      <Text m="2rem 0" fontWeight={700} fontSize="4em">
        Projects
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="2rem"
      >
        {projects?.map((project: any) => (
          <Box
            key={project?.id}
            h="250-rem"
            boxShadow="0px 2px 20px rgba(0, 0, 0, 0.1)"
            bg="#E5E5E5"
            p="1rem"
          >
            <a href={project?.html_url}>
              <Text color="pink.700" fontSize="14px" fontWeight={700}>
                {project?.name}
              </Text>
            </a>
            <Text>{project?.description}</Text>
            <Flex flexDirection="row">
              <Circle
                size="10px"
                bg={project?.language ? "pink.500" : ""}
                mt="0.5rem"
              />
              <Text fontSize="12px"> {project?.language}</Text>
            </Flex>

            <Text fontSize="12px">
              Last updated{" "}
              <strong>{dayjs(project?.updated_at).format("DD/MM/YYYY")}</strong>
            </Text>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}
