import React from "react";
import {
  Center,
  Grid,
  GridItem,
  Badge,
  ChakraProvider,
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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import "@fontsource-variable/grandstander";
import "@fontsource/chelsea-market";
import theme from "../styles/theme";

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);
const MotionAvatar = motion(Avatar);
const MotionTr = motion(Tr);

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
  { name: "Swayam Shah", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Srinikesh Kanneluru", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Aditya Sahasranam", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Tiffany Zhang", image: "https://arnavpandey.xyz/picture.png" },
  { name: "Caitelyn Huang ", image: "https://arnavpandey.xyz/picture.png" },
];

const App = () => (
  <ChakraProvider theme={theme}>
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
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl">
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

      <Divider />

      {/* How to Join Section */}
      <Box p="6">
        <Heading as="h2" size="xl">
          How to Join
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <MotionGridItem
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <MotionText mb="4">
              Our hackathon will be held at Circuit Launch in Oakland. Here is
              the location:
            </MotionText>
            <Box height="300px" width="100%">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyC8LARehk_tCeU6Vtf4_paWej9tKPnrl6U",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <Marker
                  lat={defaultProps.center.lat}
                  lng={defaultProps.center.lng}
                />
              </GoogleMapReact>
            </Box>
          </MotionGridItem>
          <MotionGridItem
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <MotionText mb="2">
              <b>Date:</b>
            </MotionText>{" "}
            <Badge colorScheme="teal">July 30, 2023</Badge>
            <MotionText mb="2">
              <b>Time:</b>
            </MotionText>{" "}
            <Badge colorScheme="teal">8 A.M. - 8 P.M.</Badge>
            <MotionText mb="2">
              <b>Address:</b> Circuit Launch, Oakland
            </MotionText>
            <Button colorScheme="teal" mt="4">
              <a href="https://calcommit.org">Join Here!</a>
            </Button>
          </MotionGridItem>
        </Grid>
      </Box>

      <Divider />

      {/* About Us Section */}
      <MotionBox
        p="6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h3" size="lg">
          About Cal Commit
        </Heading>
        <MotionText>
          Our mission is to equip computer science students with the skills and
          tools for successful collaboration and software development through
          participation in open-source projects, training in version control
          software, and competitions. To get started, simply Sign Up
        </MotionText>
      </MotionBox>

      <Divider />

      {/* Our Team Section */}
      <Box p="6">
        <Heading as="h3" size="md" textAlign="center">
          Our Team
        </Heading>
        <Flex mt="4" justify="center" wrap="wrap">
          {teamMembers.map((member, i) => (
            <MotionBox
              justifyContent="center"
              textAlign="center"
              key={i}
              mx="3"
              my="2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MotionAvatar size="xl" name={member.name} src={member.image} />
              <MotionText mt="2">{member.name}</MotionText>
            </MotionBox>
          ))}
        </Flex>
      </Box>

      <Divider />

      {/* Schedule */}
      <Box p="6">
        <Heading as="h3" size="md" textAlign="center">
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

// Create a marker component for Google Maps
const Marker = () => (
  <div
    style={{
      backgroundColor: "red",
      height: "50px",
      width: "50px",
      borderRadius: "50%",
    }}
  />
);

export default App;
