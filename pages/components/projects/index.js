import {
  Box,
  Text,
  Tag,
  TagLabel,
  SimpleGrid,
  Heading,
  useColorModeValue,
  Flex,
  Center,
  useMediaQuery,
  IconButton,
  Link,
  Container,
  Divider,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Orbitron } from "@next/font/google";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1.3 , bounce: 0.5, delay: 0.3 },
      });
    } else {
      animation.start({
        opacity: 0,
        x: -200

      });
    }
  }, [isInView]);

  const languageColor = (value) => {
    if (value === "JavaScript") {
      return "yellow";
    }
    if (value === "HTML") {
      return "red";
    }
    return "blue";
  };

  const [isSmallerThan1000] = useMediaQuery("(max-width: 1100px)");

  return (
    <>
      <Box ref={ref} w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
        <Container pb={10} id="projetos" maxW="container.xl" textAlign="start">
          <Heading pt="2rem" ml="5%">
            Projetos
          </Heading>
          <SimpleGrid mt="2rem" px={4} columns={[1, 2, 3]} spacing={4}>
            {data ? (
              data.map((item) => (
                <motion.div animate={animation} key={item.id}>
                  <Box
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                    borderRadius="lg"
                    bg={useColorModeValue("gray.300", "gray.900")}
                    textAlign="center"
                    h="max-content"
                  >
                    <Flex
                      p="4px"
                      borderTopRadius="lg"
                      bg={useColorModeValue("gray.100", "gray.700")}
                      w="100%"
                      justify="space-between"
                    >
                      <Text
                        bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)"
                        bgClip="text"
                        fontSize={isSmallerThan1000 ? "sm" : "lg"}
                        whiteSpace="nowrap"
                        overflow="hidden"
                        className={orbitron.className}
                      >
                        {item.name[0].toUpperCase() + item.name.substring(1)}
                      </Text>
                      <Tag
                        size={"sm"}
                        variant="outline"
                        w="-webkit-max-content"
                        colorScheme={languageColor(item.language)}
                      >
                        <TagLabel>{item.language}</TagLabel>
                      </Tag>
                    </Flex>

                    <Flex flexDirection="column" justifyContent="space-between">
                      <Center maxw="8rem" h="6rem">
                        {item.description ? (
                          <Text p="4px">{item.description}</Text>
                        ) : (
                          <Text p="4px">Não foi encontrado descrição :(</Text>
                        )}
                      </Center>
                      <Flex
                        bg={useColorModeValue("gray.100", "gray.700")}
                        borderBottomRadius="lg"
                        p={2}
                        gap="1rem"
                        justify="end"
                      >
                        <Link target="_blank" href={item.html_url}>
                          <IconButton
                            bg="none"
                            _hover={{
                              background: "transparent",
                              transform: "scale(1.1)",
                            }}
                            size="xs"
                            rounded="full"
                            as={AiFillGithub}
                          />
                        </Link>
                        <Link target="_blank" href={item.homepage}>
                          <IconButton
                            bg="none"
                            _hover={{
                              background: "transparent",
                              transform: "scale(1.1)",
                            }}
                            size="xs"
                            rounded="full"
                            as={BiLinkExternal}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </Box>
                </motion.div>
              ))
            ) : (
              <Text>Não foi possível encontrar nenhum repositório</Text>
            )}
          </SimpleGrid>
        </Container>
      </Box>
      <Divider bg={useColorModeValue("black", "white")} mt="2px" w="100%" />
    </>
  );
};

export default Projects;
