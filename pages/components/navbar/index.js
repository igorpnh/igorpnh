import {
  Text,
  useMediaQuery,
  useColorModeValue,
  Link,
  Box,
  Button,
  useColorMode,
  HStack,
  SimpleGrid,
  useDisclosure,
  IconButton,
  Flex,
  Collapse,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isSmallerThan764] = useMediaQuery("(max-width: 764px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      {isSmallerThan764 ? (
        <>
          <Box
            bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)"
            height="3rem"
            width="100%"
          >
            <Flex h="100%" justifyContent="space-around" alignItems="center">
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
              </Button>
            </Flex>
          </Box>
          <Collapse in={isOpen}>
            <Stack bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)">
              <NavLinks />
            </Stack>
          </Collapse>
        </>
      ) : (
        <Box
          bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.7) 77%, rgba(252,176,69,1) 100%)"
          height="3rem"
          width="100%"
        >
          <Flex h="100%" justifyContent="space-around" alignItems="center">
            <HStack width="max-content">
              <NavLinks />
            </HStack>
            <Button borderRadius='full' bg='none' onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <>
      {NAV_ITEMS.map((link) => (
        <Link
          key={link.label}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: "rgba(255,255,255,0.3)",
          }}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

const NAV_ITEMS = [
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Habilidades",
    href: "#skills",
  },
];
