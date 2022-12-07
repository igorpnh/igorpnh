import {
  Box,
  Center,
  Button,
  Flex,
  Container,
  Heading,
  Text,
  Link,
  useMediaQuery
} from "@chakra-ui/react";

const About = () => {
  const [isSmallerThan1100] = useMediaQuery("(max-width: 1100px)");
  return (
    <Container id="about" m="0" h="100%" pb={20} pt={10}>
      <Heading textAlign="center">Sobre mim</Heading>
      <Box textAlign='justify' fontSize="lg" pt={isSmallerThan1100 ? '2rem' : '10rem'}>
        <Text>
          Olá! Sou o Igor, tenho 23 anos e moro no estado de São Paulo,
        </Text>
        <Text>
          estou estudando programação há cerca de 1 ano e meio, focando em
          projetos com React/NextJS.
        </Text>
        <Text>
          Atualmente trabalho como técnico em informática (suporte em
          infraestrutura) e estou buscando uma oportunidade para ingressar na
          carreira como desenvolvedor front-end.
        </Text>
      </Box>
      <Center pt="10rem">
        <Flex gap={10}>
          <Button variant="outline" colorScheme="blue">
            <a href="/curriculo.pdf" download>
              Baixe o CV
            </a>
          </Button>
          <Link target='_blank' href='https://api.whatsapp.com/send?phone=5514998094777'>
            <Button variant="outline" colorScheme="whatsapp">
              Entre em contato
            </Button>
          </Link>
        </Flex>
      </Center>
    </Container>
  );
};

export default About;
