import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container id="about" m="0" h="100%" pb={20} pt={10}>
      <Heading textAlign="center">Sobre mim</Heading>
      <Box fontSize='lg' pt={10}>
        <Text>
          Olá! Eu sou Igor, tenho 23 anos e moro atualmente em Bauru no estado de SP
        </Text>
        <Text>
          Estou estudando programação há cerca de 1 ano e meio, focando em
          projetos com React/NextJS
        </Text>
        <Text>
          Atualmente trabalho como técnico em informática (suporte em
          infraestrutura) e estou buscando uma oportunidade para ingressar na
          carreira como desenvolvedor front-end
        </Text>
      </Box>
    </Container>
  );
};

export default About;
