import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiChakraui,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  Container,
  Heading,
  SimpleGrid,
  Center,
  Text,
  Box,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion} from "framer-motion";
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron({ weight: '400', subsets: ["latin"] });

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 />, progress: 80 },
    { name: "CSS", icon: <SiCss3 />, progress: 90 },
    { name: "Javascript", icon: <SiJavascript />, progress: 70 },
    { name: "React", icon: <SiReact />, progress: 60 },
    { name: "Next.js", icon: <TbBrandNextjs />, progress: 60 },
    { name: "Chakra UI", icon: <SiChakraui />, progress: 90 },
  ];

  return (
    <Container id="skills" h="100vh" pt={10} maxW="container.xl">
      <Heading ml="5%">Habilidades</Heading>
      <SimpleGrid
        columns={{ base: 3, md: 5, lg: 7, xl: skills.length }}
        spacing={5}
        whiteSpace="nowrap"
        pt={10}
      >
        {skills.map((item, i) => (
          <motion.div whileHover={{ scale: 1.2 }} key={i}>
            <Center
              flexDirection="column"
              rounded={"lg"}
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              bg={useColorModeValue("gray.300", "gray.900")}
              p={4}
            >
              <Box p={3} fontSize="30px">
                {item.icon}
              </Box>
              <Text
                bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)"
                bgClip="text"
                className={orbitron.className}
              >
                {item.name}
              </Text>
              <Progress
              hasStripe
                w="100%"
                mt={3}
                colorScheme='gray'
                size="sm"
                value={item.progress}
              />
            </Center>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Skills;
