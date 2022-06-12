import React from "react";
import { Box, HStack, ScrollView, Hidden } from "native-base";
import LeftPanel from "./LeftPanel";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Layout({ navigation, children }) {
  return (
    <>
      <Hidden till="md">
        <DesktopHeader title="qrdolphin" navigation={navigation} />
      </Hidden>
      <HStack flex={1}>
        <LeftPanel navigation={navigation} />
        <ScrollView>
          <Box>
            <Box flex={1} mx="auto" w="100%" _dark={{ bg: "blueGray.900" }} _light={{ bg: "white" }}>
              <Hidden from="md">
                <MobileHeader title="qrdolphin" />
              </Hidden>
              <Box px={{ base: 4, md: 8 }}>{children}</Box>
            </Box>
          </Box>
        </ScrollView>
      </HStack>
    </>
  );
}
