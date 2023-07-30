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
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import "@fontsource-variable/grandstander";
import "@fontsource/chelsea-market";
import theme from "../styles/theme";
import { Global, css } from "@emotion/react";
import Link from "next/link";
import { Sponsor } from "@/components/sponsor";

const sponsorsData = {
  gold: [
    {
      name: "Hack Club",
      image: "https://assets.hackclub.com/flag-orpheus-top.png",
    },
    {
      name: "Hack Club Bank",
      image: "https://assets.hackclub.com/hack-club-bank-light.png",
    },
    {
      name: "LeanGap",
      image: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/c5hwz078diwyssyuqzeh",
    }
  ],
  silver: [
    {
      name: "C2 Education",
      image:
        "https://theretailconnection.net/wp-content/uploads/ClientLogos/C2-Education-4c.png",
    },
  ],
  nonmonetary: [
    {
      name: "XYZ Domains",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/800px-.xyz_logo.svg.png",
    },
    {
      name: "Postman",
      image:
        "https://cdn.discordapp.com/attachments/1107512267651686470/1130900718568624138/postman-orange-logo_1.png",
    },
    {
      name: "Custom Ink",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Custom_Ink_logo.png",
    },
    {
      name: "Taskade",
      image: "https://www.taskade.com/static_images/taskade-circle-logo-full-black.png",
    },
    {
      name: "1Password",
      image: "https://images.prismic.io/brandfetch/91d5013a-134f-4041-9910-fa0a27dd3ec3_2.png?auto=compress,format",
    }
  ],
};
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
  {
    name: "Arnav Pandey",
    image: "https://splitxorpio.github.io/portfolio/picture.png",
  },
  {
    name: "Rohan Ramakrishnan",
    image:
      "https://static.wixstatic.com/media/8a7384_4f4eb4ece187481980253a014e735023~mv2.png/v1/crop/x_28,y_16,w_475,h_474/fill/w_253,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rohan%201.png",
  },
  {
    name: "Aditya Sahasranam",
    image:
      "https://cdn.discordapp.com/attachments/997774498973626418/1122391117296570449/IMG_4747.jpg",
  },
  {
    name: "Swayam Shah",
    image:
      "https://static.wixstatic.com/media/8a7384_b4cbb075bfbc4be99c44f656834059d5~mv2.jpg/v1/crop/x_0,y_6,w_233,h_233/fill/w_253,h_253,al_c,lg_1,q_80,enc_auto/IMG_B460E9285B46-1.jpg",
  },
  {
    name: "Srinikesh Kanneluru",
    image:
      "https://cdn.discordapp.com/attachments/1050157259134611476/1122609138292228156/Professinoal_Profile_Pic.png",
  },
  { name: "Tiffany Zhang", image: "https://roborally.calcommit.org/tiff.jpg" },
  {
    name: "Caitelyn Huang ",
    image:
      "https://cdn.discordapp.com/attachments/997774498973626418/1123118877983899690/IMG_3724.png",
  },
  {
    name: "Vivaan Vora",
    image:
      "https://cdn.discordapp.com/attachments/1065021922447999036/1079588343773413486/vivaan-vora.04d0429.png",
  },
];
const faqData = [
  {
    question: "Who can participate at OasisHacks?",
    answer:
      "Oasis Hacks is open to all students, under the age of 18, who are interested in technology, engineering, and innovation, but we aim to be a high school student driven hackathon.",
  },
  {
    question: "What resources will be provided to participants at OasisHacks?",
    answer:
      "Participants will have access to a range of resources, including expert mentorship, cutting-edge technologies and platforms, and networking opportunities with peers and industry partners.",
  },
  {
    question:
      "Can I participate as an individual, or do I need to form a team?",
    answer:
      "You can participate as an individual or as part of a team. We encourage participants to form teams of up to 4 members to promote collaboration and diversity of skills.",
  },
  {
    question: "What are the prizes for the OasisHacks?",
    answer:
      "The prize details will be announced closer to the event date. However, previous years have offered cash prizes, sponsor prizes, and other valuable rewards.",
  },
  {
    question: "When and where is OasisHacks taking place?  ",
    answer:
      "The date has been decided to be on August 6th, 2023. This hackathon is an in-person, 12 hour long hackathon at Circuit Launch in Oakland, CA. Stay tuned on our Discord for more updates (https://discord.gg/Mtt9mGNu3Z).",
  },
];
const prizesData = [
  {
    category: "First Place",
    totalValue: "$400",
    prizes: [
      "1x $250 Visa Gift Card",
      "1x Portable Speaker",
      "1x Portable LED Mini Projector",
    ],
  },
  {
    category: "Second Place",
    totalValue: "$190",
    prizes: [
      "2x Bluetooth Wireless Headphones",
      "Drone (Small sized)",
      "4k Action Camera",
    ],
  },
  {
    category: "Third Place",
    totalValue: "$140",
    prizes: [
      "Wireless Mini Pocket Printer",
      "Bluetooth Earbuds",
      "T&G Bluetooth Speakers",
      "VR Headset",
    ],
  },
  {
    category: "Most Popular Project",
    totalValue: "$50",
    prizes: ["$50 CustomInk Voucher"],
  },
  {
    category: "All Participants",
    totalValue: "TBA",
    prizes: ["XYZ Domain",
    "1Password | 1 year free",
    "Taskade | 1 year free ",
    "Postman | Swag for Posts",
    "Echo3D | 1 month free"]
  }
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
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/oasislogo.png" alt="Logo" boxSize="100px" mb="4" />
        </motion.div>
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
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            target="blank"
            href="https://forms.gle/bWCxHtRd2sK7g13S7"
            isExternal
          >
            <Button mt="4" colorScheme="green">
              Register Now
            </Button>
          </Link>
        </motion.div>
      </Flex>
{/* About Oasis */}
<Flex
        p="6"
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        id="about"
      >
        <Box flex="1" mr={{ base: 0, lg: "6" }} mb={{ base: "6", lg: 0 }}>
          <Heading as="h3" size="lg" textAlign="center">
            About Oasis Hacks
          </Heading>
          <Text fontSize="md" px="4" mt="4">
            Oasis Hacks, hosted by Cal Commit, is an exciting hackathon event
            that brings together creative minds and tech enthusiasts to
            collaborate and build innovative solutions. This year, the hackathon
            will take place on August 6th from 9am to 9pm PST at Circuit Launch
            in Oakland, California.
          </Text>
          <Text fontSize="md" px="4" mt="4">
            Oasis Hacks aims to provide a stimulating environment for
            participants to showcase their skills, explore new technologies, and
            tackle real-world challenges. Whether you're an experienced
            developer, designer, or simply have a passion for problem-solving,
            this event offers a unique opportunity to network, learn, and
            create.
          </Text>
          <Text fontSize="md" px="4" mt="4">
            During the 12-hour hackathon, participants will form teams and work
            diligently to develop projects that address a specific theme.
            Mentors and industry experts will be available throughout the event
            to guide and support teams in their endeavors.
          </Text>

          <Text fontSize="md" px="4" mt="4">
            At the end of the hackathon, teams will present their projects.
            Outstanding projects will have the chance to win prizes, gain
            recognition, and potentially attract the attention of investors and
            sponsors.
          </Text>

          <Text fontSize="md" px="4" mt="4">
            Oasis Hacks is not only about competition but also fostering a
            vibrant community of innovators. Participants will have ample
            opportunities to network with like-minded individuals, forge
            valuable connections, and gain insights from successful
            entrepreneurs and thought leaders.
          </Text>

          <Text fontSize="md" px="4" mt="4">
            Whether you're a seasoned hacker or a newcomer to the world of
            technology, Oasis Hacks promises an immersive and rewarding
            experience. So mark your calendars and get ready to embark on a day
            of creativity, collaboration, and innovation on August 6th at
            Circuit Launch in Oakland.
          </Text>
        </Box>

        <Box flex="1" ml={{ base: 0, lg: "6" }}>
          <Heading as="h3" size="lg" textAlign="center">
            Schedule
          </Heading>
          <Table
            borderRadius="10px"
            sx={{ opacity: 0.75 }}
            bgColor="white"
            variant="simple"
            mt="4"
          >
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
                <Td>9:00 - 10:00</Td>
                <Td>Welcome / Opening Ceremony</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Td>10:00 - 11:00</Td>
                <Td>Networking Session</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Td>11:00 - 11:30</Td>
                <Td>Activity 1: Icebreaker Challenges</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Td>11:30 - 1:00</Td>
                <Td>Workshop 1: Postman Workshop</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Td>1:00 - 2:00</Td>
                <Td>Lunch Break</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Td>2:00 - 3:00</Td>
                <Td>Workshop 2: Margin vs Padding (Web Development Workshop)</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Td>3:00 - 4:00</Td>
                <Td>Activity 2: Team Brainstorming Session</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Td>4:00 - 5:00</Td>
                <Td>Workshop 3: Advanced JavaScript Techniques</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Td>5:00 - 6:00</Td>
                <Td>Activity 3: Code Challenge</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Td>6:00 - 7:00</Td>
                <Td>Project Presentations</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Td>7:00 - 8:30</Td>
                <Td>Judging Period / Dinner</Td>
              </MotionTr>
              <MotionTr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Td>8:30 - 9:00</Td>
                <Td>Closing Ceremony & Award Announcement</Td>
              </MotionTr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
      {/* Event Info */}

      <Box p="6">
        <Center>
          <Box
            maxWidth="1500px"
            bgColor="white"
            padding="20px"
            borderRadius="10px"
            sx={{ opacity: 0.9 }}
            textAlign={{ base: "center" }}
          >
            <Heading mb="6" textAlign="center">
              Event Info
            </Heading>
            <Text
              width={{ base: "100%", md: "100%" }}
              textAlign="center"
              mb="4"
              padding={"25px"}
            >
              <b>Circuit Launch</b>, a prominent tech hub in Oakland, serves as
              the ideal venue for Oasis Hacks. With its state-of-the-art
              facilities, collaborative spaces, makes it a magnificent
              environment for hackers to immerse themselves into.
            </Text>

            <Flex
              direction={{ base: "column", md: "row" }}
              mb="4"
              justifyContent="space-between"
            >
              <Box flex="1" mb={{ base: "6", md: "0" }}>
                <Flex mb="4" align="center">
                  <Text fontSize="1.5em" color="gray.700">
                    <b>Date:</b>
                  </Text>
                  <Text textAlign="left" fontSize="1.5em" color="gray.700">
                    &nbsp; August 6, 2023
                  </Text>
                </Flex>
                <Flex mb="4" align="center">
                  <Text fontSize="1.5em" color="gray.700">
                    <b>Time:</b>
                  </Text>
                  <Text fontSize="1.5em" color="gray.700">
                    &nbsp; 9 A.M. - 9 P.M.
                  </Text>
                </Flex>
                <Flex mb="4" align="center">
                  <Text fontSize="1.5em" color="gray.700">
                    <b>Address: </b>
                  </Text>
                  <Text paddingLeft="15px" fontSize="1.5em" color="gray.700">
                    8000 Edgewater Dr Suite 200
                  </Text>
                </Flex>
              </Box>
              <Box flex="1" mt={{ base: "6", md: "0" }} sx={{ opacity: 1.5 }}>
                {/* Google Maps Embed Here */}
                <Box
                  borderWidth="5px"
                  marginLeft={{ base: 0, md: 6 }}
                  width={{ base: "100%", md: 900 }}
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <iframe
                    width="100%"
                    height={{ base: "300", md: "450" }}
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB6pgL9PH40S7F5v7lQrpXAE0MxqGIPPtE&q=Circuit+Launch,Oakland"
                    allowFullScreen
                  ></iframe>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
     {/* Sponsors and Prizes */}
     <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap={9}>
        {/* Sponsors Section */}
        <Box ml={{ base: "0", md: "40" }} p={6}>
          <Heading as="h3" size="lg" textAlign="center">
            Our Sponsors
          </Heading>
          <Text mb="6" textAlign="center" mt="4" fontSize="md">
            Want to sponsor us?{" "}
            <a href="/prospectus.pdf">
              <u>View our Sponsor Prospectus</u>
            </a>
          </Text>
          {Object.entries(sponsorsData).map(([tier, sponsors]) => (
            <Box key={tier} mb="6">
              <Heading as="h4" size="s" mb="4">
                {tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors
              </Heading>
              <SimpleGrid
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                gap="6"
              >
                {sponsors.map((sponsor, i) => (
                  <Sponsor key={i} name={sponsor.name} image={sponsor.image} />
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Box>

        {/* Prizes Section */}
        <Box p={6}>
          <Heading as="h3" size="lg" textAlign="center">
            Prizes
          </Heading>
          <VStack
            divider={<Divider borderColor="gray.200" />}
            spacing={4}
            align="start"
            mt={6}
          >
            {prizesData.map(({ category, totalValue, prizes }, i) => (
              <Box key={i}>
                <Heading size="md">{category}</Heading>
                <Text color="gray.600">Total Value: {totalValue}</Text>
                {prizes.map((prize, j) => (
                  <Text key={j}>{prize}</Text>
                ))}
              </Box>
            ))}
          </VStack>
        </Box>
      </Grid>

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
              width="230px"
            >
              <MotionAvatar size="2xl" name={member.name} src={member.image} />
              <Flex width="100%" justifyContent="center">
                {" "}
                <MotionText mt="2" isTruncated>
                  {member.name}
                </MotionText>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </Box>

      {/* FAQ Section */}
      <Box p="6">
        <Heading as="h3" size="lg" textAlign="center">
          FAQ
        </Heading>
        <Accordion
          allowMultiple
          mt="4"
          bgColor="white"
          sx={{ borderRadius: 10, opacity: 0.7 }}
        >
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
    <script
      src="https://kit.fontawesome.com/6de65e3da1.js"
      crossorigin="anonymous"
    ></script>
  </ChakraProvider>
);

export default App;
