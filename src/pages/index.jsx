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
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;


const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);
const MotionAvatar = motion(Avatar);
const MotionTr = motion(Tr);
const Marker = () => (
  <img src="/palm.png" alt="marker" style={{ width: "40px", height: "40px" }} />
);

const defaultProps = {
  center: {
    lat: 37.74065,
    lng: -122.20119,
  },
  zoom: 11,
};

const teamMembers = [
  { name: "Arnav Pandey", image: "https://splitxorpio.github.io/portfolio/picture.png" },
  { name: "Rohan Ramakrishnan", image: "https://static.wixstatic.com/media/8a7384_4f4eb4ece187481980253a014e735023~mv2.png/v1/crop/x_28,y_16,w_475,h_474/fill/w_253,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rohan%201.png" },
  { name: "Aditya Sahasranam", image: "https://cdn.discordapp.com/attachments/997774498973626418/1122391117296570449/IMG_4747.jpg" },
  { name: "Swayam Shah", image: "https://static.wixstatic.com/media/8a7384_b4cbb075bfbc4be99c44f656834059d5~mv2.jpg/v1/crop/x_0,y_6,w_233,h_233/fill/w_253,h_253,al_c,lg_1,q_80,enc_auto/IMG_B460E9285B46-1.jpg" },
  { name: "Srinikesh Kanneluru", image: "https://cdn.discordapp.com/attachments/1050157259134611476/1122609138292228156/Professinoal_Profile_Pic.png" },
  { name: "Tiffany Zhang", image: "https://roborally.calcommit.org/tiff.jpg" },
  { name: "Caitelyn Huang ", image: "https://cdn.discordapp.com/attachments/997774498973626418/1123118877983899690/IMG_3724.png" },
  {name : "Vivaan Vora", image:"https://cdn.discordapp.com/attachments/1065021922447999036/1079588343773413486/vivaan-vora.04d0429.png"},
];
const faqData = [
  {
    question: "Who can participate at OasisHacks?",
    answer: "OskiHacks is open to all students, under the age of 18, who are interested in technology, engineering, and innovation, but we aim to be a high school student driven hackathon.",
  },
  {
    question: "What resources will be provided to participants at OasisHacks?",
    answer: "Participants will have access to a range of resources, including expert mentorship, cutting-edge technologies and platforms, and networking opportunities with peers and industry partners.",
  },
  {
    question: "Can I participate as an individual, or do I need to form a team?",
    answer: "You can participate as an individual or as part of a team. We encourage participants to form teams of up to 4 members to promote collaboration and diversity of skills.",
  },
  {
    question: "What are the prizes for the OasisHacks?",
    answer: "The prize details will be announced closer to the event date. However, previous years have offered cash prizes, sponsor prizes, and other valuable rewards.",
  },
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
      {/* How to Join */}

      <Box p="6">
        <Heading as="h2" size="2xl" textAlign="center" mb="6">
          How to Join
        </Heading>
        <Center>
          <Box maxWidth="800px" textAlign="center">
            <Flex alignItems="center" mb="4" justifyContent="space-between">
              <Text fontSize="30px">
                <b>Date: &nbsp;  </b>
              </Text>
              <Badge fontSize="2em" colorScheme="yellow">
                August 6, 2023
              </Badge>
            </Flex>
            <Flex alignItems="center" mb="4" justifyContent="space-between">
              <Text fontSize="30px">
                <b>Time:</b>
              </Text>
              <Badge fontSize="2em" colorScheme="yellow">
                8 A.M. - 8 P.M.
              </Badge>
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
          {teamMembers.slice(0, 4).map((member, i) => (
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
              width="230px" // Set a fixed width
            >
              <MotionAvatar size="2xl" name={member.name} src={member.image} />
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
          {teamMembers.slice(4).map((member, i) => (
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
              width="230px" // Set a fixed width
            >
              <MotionAvatar size="2xl" name={member.name} src={member.image} />
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
      <Td>9:00 - 10:00</Td>
      <Td>Workshop 1: Introduction to Python</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Td>10:00 - 11:00</Td>
      <Td>Activity 1: Icebreaker Challenges</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Td>11:00 - 12:00</Td>
      <Td>Workshop 2: Introduction to Web Development</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Td>12:00 - 1:00</Td>
      <Td>Lunch Break</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Td>1:00 - 2:00</Td>
      <Td>Workshop 3: MARGIN VS PADDING</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <Td>2:00 - 3:00</Td>
      <Td>Activity 2: Team Brainstorming Session</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Td>3:00 - 4:00</Td>
      <Td>Workshop 4: Advanced JavaScript Techniques</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <Td>4:00 - 5:00</Td>
      <Td>Activity 3: Code Challenge</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Td>5:00 - 6:00</Td>
      <Td>Activity 4: Break & Networking</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <Td>6:00 - 7:30</Td>
      <Td>Judging Period</Td>
    </MotionTr>
    <MotionTr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <Td>7:30 - 8:00</Td>
      <Td>Closing Ceremony & Award Announcement</Td>
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
