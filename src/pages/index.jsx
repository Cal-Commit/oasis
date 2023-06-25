import React from "react";
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
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import "@fontsource-variable/grandstander";
import "@fontsource/chelsea-market";
import theme from "../styles/theme";
import { Global, css } from "@emotion/react";
import Link from "next/link";

const customScrollBar = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      #2db88e,
      #f78154,
      #f5da8a,
      #fbf9ee,
      #90c2e7
    );
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      to bottom,
      #2db88e,
      #f78154,
      #f5da8a,
      #fbf9ee,
      #90c2e7
    );
  }
`;

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);
const MotionAvatar = motion(Avatar);
const MotionTr = motion(Tr);
const Marker = () => <img src="/palm.png" alt='marker' style={{ width: '40px', height: '40px' }} />;

const defaultProps = {
  center: {
    lat: 37.74065,
    lng: -122.20119,
  },
  zoom: 11,
};

const teamMembers = [
  { name: "Arnav Pandey", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Rohan Ramakrishnan", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Aditya Sahasranam", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Swayam Shah", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Srinikesh Kanneluru", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Tiffany Zhang", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Caitelyn Huang ", image: "https://arnavpandey.xyz/picture.png" },
];
const faqData = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
  },
  // Add more questions and answers as needed
];
const App = () => (
  <ChakraProvider theme={theme}>
    <Global styles={customScrollBar} />
    <Box
      bgImage="url('/upoasis.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
    >
      {/* Splash Screen */}
      <Flex
        align="center"
        justify="center"
        direction="column"
        minHeight="100vh"
      >
                          <Image src="/oasislogo.png" alt="Logo" boxSize="100px" mb="4" />

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <Heading textAlign="center" as="h1" size="2xl">
            Welcome to Oasis Hacks!
          </Heading>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontSize="xl" mt="4">
            A hackathon event by Cal Commit
          </Text>
        </motion.div>
      </Flex>

      <Box p="6">
  <Heading as="h2" size="2xl" textAlign="center" mb="6">
    How to Join
  </Heading>
  <Center>
    <Box maxWidth="800px" textAlign="center">
      <Flex alignItems="center" mb="4" justifyContent="space-between">
        <Text fontSize="30px">
          <b>Date:</b>
        </Text>
        <Badge fontSize='2em' colorScheme="yellow">August 6, 2023</Badge>
      </Flex>
      <Flex alignItems="center" mb="4" justifyContent="space-between">
        <Text fontSize="30px">
          <b>Time:</b>
        </Text>
        <Badge fontSize='2em' colorScheme="yellow">8 A.M. - 8 P.M.</Badge>
      </Flex>
      <Text mb="4">
        <b>Address:</b> Circuit Launch, Oakland
      </Text>
      <Button colorScheme="teal" mt="6">
        <a href="https://calcommit.org">Join Here!</a>
      </Button>
    </Box>
  </Center>
</Box>

      {/* About Us Section */}
      <MotionBox
        p="6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        overflow="hidden"
      >
        <Heading as="h3" size="lg" textAlign="center" py="4">
          About Cal Commit
        </Heading>
        <MotionText fontSize="md" px="4" mt="4">
          Our mission is to equip computer science students with the skills and
          tools for successful collaboration and software development through
          participation in open-source projects, training in version control
          software, and competitions.
        </MotionText>
        <MotionText fontSize="md" px="4" mt="4">
          As a non-profit organization, we award volunteer hours to those who
          contribute to open source projects. We also retain the ability to
          distribute the President's Volunteer Service Award. Which is a highly
          recognized award that is given to those who volunteer a certain amount
          of hours. This looks great on college applications and resumes.
        </MotionText>
        <MotionText fontSize="md" px="4" mt="4" mb="4">
          Visit our website at{" "}
          <Link href="https://calcommit.org" color="yellow.200">
            calcommit.org
          </Link>
        </MotionText>

      </MotionBox>

      {/* Our Team Section */}
      <Box p="6">
        <Heading as="h3" size="lg" textAlign="center">
          Our Team
        </Heading>
        <Flex mt="4" justify="center" wrap="wrap">
          {teamMembers.slice(0, 3).map((member, i) => (
            <MotionBox
              padding="4"
              justifyContent="center"
              textAlign="center"
              key={i}
              mx="3"
              my="2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              width="200px" // Set a fixed width
            >
              <MotionAvatar size="xl" name={member.name} src={member.image} />
              <Flex width="100%" justifyContent="center">
                {" "}
                {/* Add this */}
                <MotionText mt="2" isTruncated>
                  {member.name}
                </MotionText>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
        <Flex justify="center" wrap="wrap">
          {teamMembers.slice(3).map((member, i) => (
            <MotionBox
              padding="4"
              justifyContent="center"
              textAlign="center"
              key={i}
              mx="3"
              my="2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              width="200px" // Set a fixed width
            >
              <MotionAvatar size="xl" name={member.name} src={member.image} />
              <Flex width="100%" justifyContent="center">
                {" "}
                {/* Add this */}
                <MotionText mt="2" isTruncated>
                  {member.name}
                </MotionText>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </Box>

      {/* Schedule */}
      <Box p="6">
        <Heading as="h3" size="lg" textAlign="center">
          Schedule
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Time</Th>
              <Th>Event</Th>
            </Tr>
          </Thead>
          <Tbody>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Td>8:00 - 9:00</Td>
              <Td>Welcome / Opening Ceremony</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Td>9:00 - 11:00</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Td>11:00 - 12:00</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Td>12:00 - 1:00</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Td>1:00 - 2:00</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Td>2:00 - 5:00</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Td>5:00 - 5:30</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Td>5:30 - 7:30</Td>
              <Td>Event Description</Td>
            </MotionTr>
            <MotionTr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Td>7:30 - 8:00</Td>
              <Td>Closing Ceremony</Td>
            </MotionTr>
          </Tbody>
        </Table>
      </Box>
{/* FAQ Section */}
<Box p="6">
        <Heading as="h3" size="lg" textAlign="center">
          FAQ
        </Heading>
        <Accordion allowMultiple mt="4">
          {faqData.map((faq, i) => (
            <AccordionItem key={i}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <Divider />

      {/* Footer */}
      <Flex as="footer" p="6" align="center" justify="center">
        <Text>
          &copy; {new Date().getFullYear()} Oasis Hacks by Cal Commit. All
          Rights Reserved.
        </Text>
      </Flex>
    </Box>
  </ChakraProvider>
);



export default App;
