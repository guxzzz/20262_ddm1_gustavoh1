import { Image } from "expo-image";
import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} bounces={true}>
      <View style={styles.headerContainer}>
        <Image
          source={require("@/assets/images/ch.jpg")}
          style={styles.headerImage}
          contentFit="contain"
        />
      </View>

      <ThemedView style={styles.bodyContainer}>
        <ThemedView style={styles.titleContainer}>
          <Image
            source={require("@/assets/images/cruz-removebg-preview.png")}
            style={styles.waveImage}
          />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle"> {`gux'`}</ThemedText>
          <ThemedText type="defaultSemiBold">
            “O medo é uma ferramenta”
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Link href="/modal">
            <Link.Trigger>
              <ThemedText type="subtitle">zzz</ThemedText>
            </Link.Trigger>
            <Link.Preview />
            <Link.Menu>
              <Link.MenuAction
                title="Action"
                icon="cube"
                onPress={() => alert("Action pressed")}
              />
              <Link.MenuAction
                title="Share"
                icon="square.and.arrow.up"
                onPress={() => alert("Share pressed")}
              />
              <Link.Menu title="More" icon="ellipsis">
                <Link.MenuAction
                  title="Delete"
                  icon="trash"
                  destructive
                  onPress={() => alert("Delete pressed")}
                />
              </Link.Menu>
            </Link.Menu>
          </Link>
          <ThemedText>Clique acima.</ThemedText>
        </ThemedView>
        <Image
          source={require("@/assets/images/ellie.webp")}
          style={styles.bannerImage}
          contentFit="contain"
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    backgroundColor: "#000000",
  },
  headerContainer: {
    height: 250,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  headerImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  bodyContainer: {
    padding: 20,
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  waveImage: {
    width: 40,
    height: 40,
  },
  bannerImage: {
    width: 300,
    aspectRatio: 16 / 9,
    alignSelf: "center",
    borderRadius: 12,
    marginVertical: 10,
  },
});
