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
  Center,
  Text,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  useColorModeValue,
  VStack,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 />, progress: 80 },
    { name: "CSS", icon: <SiCss3 />, progress: 90 },
    { name: "Javascript", icon: <SiJavascript />, progress: 60 },
    { name: "React", icon: <SiReact />, progress: 50 },
    { name: "Next.js", icon: <TbBrandNextjs />, progress: 50 },
    { name: "Chakra UI", icon: <SiChakraui />, progress: 70 },
  ];

  return (
    <>
      <Container id="skills" align="center" m="0" h="100%" pb={20} pt={10}>
        <Heading textAlign="center">Habilidades</Heading>
        <VStack spacing={5} w="max-content" pt={10} align="left">
          {skills.map((item, i) => (
            <motion.div whileHover={{ scale: 1.1 }} key={i}>
              <Box>
                <Flex align="center" gap="3rem" justify="space-between">
                  <Flex align="center">
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
                  </Flex>
                  <CircularProgress
                    size="4rem"
                    value={item.progress}
                    color={useColorModeValue("gray.300", "gray.500")}
                    thickness="0.5rem"
                    outline="none"
                  >
                    <CircularProgressLabel>
                      {item.progress}%
                    </CircularProgressLabel>
                  </CircularProgress>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default Skills;
