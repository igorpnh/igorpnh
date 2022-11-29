import {
  Avatar,
  Box,
  Heading,
  useColorMode,
  VStack,
  HStack,
  Text,
  Link,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "../navbar";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const Header = () => {
  const { colorMode } = useColorMode();
  const [isSmallerThan764] = useMediaQuery("(max-width: 764px)");
  return (
    <>
      <Navbar />
      {isSmallerThan764 ? (
        <Box
          backgroundSize="4px 4px"
          backgroundImage="repeating-linear-gradient(-45deg, rgba(0,0,0, 0.25), rgba(0,0,0, 0.25) 1px, transparent 1px, transparent 6px)"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          gap="1rem"
          h="100vh"
        >
          <VStack zIndex="99999" mt="3rem">
            <Avatar
              w="15rem"
              h="15rem"
              src="https://thumbs2.imgbox.com/49/b3/07eInL3D_t.jpeg"
              alt="image host"
            />
            <Heading
              bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)"
              bgClip="text"
            >
              Igor Pinheiro
            </Heading>
            <Text>FullStack Developer</Text>
          </VStack>
          <HStack>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/igor-pinheiro-4872491b6"
            >
              <IconButton bg="transparent" as={AiFillLinkedin} />
            </Link>
            <Link target="_blank" href="https://github.com/igorpnh">
              <IconButton bg="transparent" as={AiFillGithub} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/pinheiroigor1/"
            >
              <IconButton bg="transparent" as={AiFillInstagram} />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5514998094777"
            >
              <IconButton bg="transparent" as={AiOutlineWhatsApp} />
            </Link>
          </HStack>
        </Box>
      ) : (
        <Box
          backgroundSize="4px 4px"
          backgroundImage="repeating-linear-gradient(-45deg, rgba(0,0,0, 0.25), rgba(0,0,0, 0.25) 1px, transparent 1px, transparent 6px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="4rem"
          h="100vh"
        >
          <VStack zIndex="9999">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/igor-pinheiro-4872491b6"
            >
              <IconButton bg="transparent" as={AiFillLinkedin} />
            </Link>
            <Link target="_blank" href="https://github.com/igorpnh">
              <IconButton bg="transparent" as={AiFillGithub} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/pinheiroigor1/"
            >
              <IconButton bg="transparent" as={AiFillInstagram} />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5514998094777"
            >
              <IconButton bg="transparent" as={AiOutlineWhatsApp} />
            </Link>
          </VStack>
          <VStack mt="3rem">
            <Avatar
              w="15rem"
              h="15rem"
              src="https://thumbs2.imgbox.com/49/b3/07eInL3D_t.jpeg"
              alt="image host"
            />
            <Heading
              bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)"
              bgClip="text"
            >
              Igor Pinheiro
            </Heading>
            <Text>FullStack Developer</Text>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Header;
