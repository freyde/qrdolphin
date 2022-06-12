import React from 'react';
import Layout from '../components/Layout';
import {
  Box,
  HStack,
  // Hidden,
  Text,
  // IconButton,
  // Icon,
  // StatusBar,
  Stack,
  // VStack,
  // View,
  Heading, AspectRatio, Image, Center
} from 'native-base';
// import Ionicons from 'react-native-vector-icons/Ionicons';


function SampleItem() {
  return (
    <Box m="2" my="4" alignItems="center">
      <Box maxW="270" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={require("../components/qr-code.png")} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Dynamic
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              QR Code
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Test QR code
            </Text>
          </Stack>
          <Text fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontSize="xs">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

export default function Gallery({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <SampleItem />
      <SampleItem />
      <SampleItem />
    </Layout>
  );
}

// const Gallery = (props) => {
//   return (
//     <>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="light-content"
//       />
//       <Box
//         safeAreaTop
//         _light={{
//           bg: "primary.900",
//         }}
//         _dark={{
//           bg: "coolGray.900",
//         }}
//       />
//       <HStack
//         py="5"
//         space="2" px="4"
//         justifyContent="space-between"
//         alignItems="center"
//         _dark={{
//           bg: "darkBlue.900",
//         }}
//         _light={{
//           bg: "primary.800",
//         }}
//       >
//         <HStack alignItems="center">
//           <IconButton icon={<Icon as={Ionicons} name="menu" color="white" />} />
//           <HStack alignItems="center" pl="2" pb="1">
//             <Text color="coolGray.50" fontSize="lg" bold>
//               qr
//             </Text>
//             <Text color="coolGray.50" fontSize="lg">
//               dolphin
//             </Text>
//           </HStack>
//         </HStack>
//         <HStack>
//           <IconButton icon={<Icon as={Ionicons} name="search" color="white" />} />
//           <IconButton icon={<Icon as={Ionicons} name="ellipsis-vertical" color="white" />} />
//         </HStack>
//       </HStack>
//       <View
//         flex="1"
//         _dark={{
//           bg: "blueGray.900",
//         }}
//         _light={{
//           bg: "white",
//         }}
//       >
//         {/* side bar */}
//         <Stack
//           w="100%"
//           h="100%"
//           flexDirection={{
//             base: "column",
//             md: "row",
//           }}
//           maxW={{
//             md: "300px",
//           }}
//           flex={{
//             base: "1",
//             md: "none",
//           }}
//         >
//           <Hidden till="md">
//             <Box
//               flex="1" p="4" mr="2"
//               _light={{
//                 bg: "gray.100"
//               }}
//               _dark={{
//                 bg: "coolGray.800"
//               }}
//             >
//               <VStack color="white">
//                 <Text>Hello World</Text>
//               </VStack>
//             </Box>
//           </Hidden>

//           {/* Test gallery item */}
//           <TestItem />
//           <TestItem />
//           {/* End test gallery item */}

//         </Stack>
//       </View>
//     </>
//   );
// }
