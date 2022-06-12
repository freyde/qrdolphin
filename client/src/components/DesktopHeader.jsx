import React from "react";
import {
  HStack,
  Heading,
  SearchIcon,
  Input,
  useDisclose,
} from "native-base";
// import { NotificationButton } from "../components/NotificationButton";
// import { SearchModal } from "../../../components/Search";

export default function DesktopHeader(props) {
  const { /*isOpen,*/ onOpen, /*onClose*/ } = useDisclose();
  return (
    <>
      <HStack
        alignItems="center"
        space={4}
        py="5"
        px="8"
        bg="white"
        borderBottomWidth="1px"
        _dark={{
          bg: "darkBlue.900",
          borderBottomColor: "coolGray.800"
        }}
        _light={{
          bg: "primary.800",
          borderBottomColor: "coolGray.200"
        }}
      >
        <Heading
          fontSize="xl"
          flex={1}
          fontWeight="semibold"
          color="white"
        >
          {props.title}
        </Heading>

        <HStack space={6}>
          <Input
            pl="5"
            // borderRadius="full"
            maxW="96"
            size="lg"
            w={{ lg: 80, xl: 96 }}
            placeholder="Search"
            //@ts-ignore
            onClick={onOpen}
            onKeyPress={onOpen}
            InputRightElement={<SearchIcon size={5} mr="4" color="muted.400" />}
          />
          {/* <Box alignSelf="center">
            <NotificationButton />
          </Box> */}
        </HStack>
      </HStack>
      {/* <SearchModal isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
}
