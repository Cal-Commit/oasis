import {
  Center,
  Grid,
  GridItem,
  Badge,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Divider,
  ChakraProvider,
  CSSReset,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
export const Sponsor = ({ name, image, tier }) => {
  let size;
  switch (tier) {
    case "gold":
      size = "150px";
      break;
    case "silver":
      size = "120px";
      break;
    case "bronze":
      size = "90px";
      break;
    default:
      size = "60px";
      break;
  }

  return (
    <Box
      textAlign="center"
      m="4"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image boxSize="115px" objectFit="contain" src={image} alt={name} />
    </Box>
  );
};
