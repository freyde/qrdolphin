import React from 'react';
import {
  VStack,
  Box,
  HStack,
  Text,
  Image,
  Hidden,
  IconButton,
  Icon,
  Center,
  FormControl,
  StatusBar,
  Stack,
  Input,
  Radio,
  Checkbox,
  Switch,
  Button
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const QRForm = () => {
  return (
    <>
      <Box>
        <VStack space="5" my="6">
          <Text fontSize="lg">ENTER CONTENT</Text>
          <FormControl>
            <Input
              isRequired
              size="lg"
              variant="outline"
              label="Content"
              placeholder="Content"
              borderRadius="4"
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
              }}
              _dark={{
                borderColor: "coolGray.700",
              }}
              _light={{
                borderColor: "coolGray.300",
              }}
            />
          </FormControl>
          <HStack space="2" alignItems="center">
            <Switch size="lg" />
            <Text>Statistics and Editability</Text>
          </HStack>
        </VStack>
        <VStack
          space={{
            base: "4",
            md: "5",
          }}
        >
          <Text fontSize="lg">SET COLOR</Text>
          <Text
            bold
            fontSize="m"
            _dark={{
              color: "coolGray.50",
            }}
            _light={{
              color: "coolGray.800",
            }}
          >
            Foreground Color
          </Text>
          <HStack space="2" alignItems="center">
            <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
              <HStack space="2" alignItems="center">
                <Radio value="1" size="sm" my={1}>
                  <Text fontSize="xs">Single Color</Text>
                </Radio>
                <Radio value="2" size="sm" my={1}>
                  <Text fontSize="xs">Color Gradient</Text>
                </Radio>
              </HStack>
            </Radio.Group>
            <Checkbox
              alignItems="flex-start"
              isChecked
              value="demo"
              colorScheme="primary"
              accessibilityLabel="Remember me"
            >
              <Text
                fontSize="xs"
                fontWeight="normal"
                _light={{
                  color: "coolGray.800",
                }}
                _dark={{
                  color: "coolGray.400",
                }}
              >
                Custom Eye Color
              </Text>
            </Checkbox>
          </HStack>
          <Text
            bold
            fontSize="m"
            _dark={{
              color: "coolGray.50",
            }}
            _light={{
              color: "coolGray.800",
            }}
          >
            Background Color
          </Text>
          <Text fontSize="lg">ADD LOGO IMAGE</Text>
          <Text fontSize="lg">CUSTOMIZE DESIGN</Text>
        </VStack>
      </Box>
      <HStack
        mt="28"
        mb="4"
        space="1"
        safeAreaBottom
        alignItems="center"
        justifyContent="center"
      >
        {/* Footer */}
      </HStack>
    </>
  );
}

const Home = (props) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{
          bg: "primary.900",
        }}
        _dark={{
          bg: "coolGray.900",
        }}
      />
      <Center
        my="auto"
        _dark={{
          bg: "blueGray.900",
        }}
        _light={{
          bg: "primary.800",
        }}
        flex="1"
      >
        <Stack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          w="100%"
          maxW={{
            md: "1132px",
          }}
          flex={{
            base: "1",
            md: "none",
          }}
        >
          <Hidden from="md">
            <HStack space="2" px="4" mt="4" mb="5" justifyContent="space-between" alignItems="center">
              <HStack alignItems="center">
                <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                <IconButton variant="unstyled" pl="0" icon={ <Icon size="6" as={MaterialCommunityIcons} name="dolphin" color="coolGray.50" />
                  }
                />
                <HStack alignItems="center">
                  <Text color="coolGray.50" fontSize="lg" bold>
                    qr
                  </Text>
                  <Text color="coolGray.50" fontSize="lg">
                    dolphin
                  </Text>
                </HStack>
              </HStack>
              <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
              </HStack>
            </HStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              _light={{
                bg: "gray.100"
              }}
              _dark={{
                bg: "blueGray.700"
              }}
              px={{
                base: "4",
                md: "8",
              }}
              borderTopLeftRadius={{
                md: "xl",
              }}
              borderBottomLeftRadius={{
                md: "xl",
              }}
            >
              <QRForm />
            </Center>
          </Hidden>
          <Center
            py={{
              base: "6",
              md: "12",
            }}
            px={{
              base: "4",
              md: "10",
            }}
            _light={{
              bg: "white",
            }}
            _dark={{
              bg: "coolGray.800",
            }}
            flex="1"
            borderTopRightRadius={{
              md: "xl",
            }}
            borderBottomRightRadius={{
              md: "xl",
            }}
          >
            <Image
              h="24"
              size="80"
              alt="NativeBase Startup+ "
              resizeMode={"contain"}
              source={require("../components/qr-code.png")}
            />
            <HStack justifyContent="space-between" alignItems="center">
              <Button.Group isAttached colorScheme="blue" mx={{
                  base: "auto",
                  md: 0
                }} size="lg">
                <Button>Generate</Button>
                <Button variant="outline">Download</Button>
              </Button.Group>
            </HStack>
          </Center>
        </Stack>
      </Center>
    </>
  );
}

export default Home;
