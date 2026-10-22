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
          contentFit="cover"
        />
        <View style={styles.headerOverlay} />
      </View>

      <ThemedView style={styles.bodyContainer}>
        <ThemedView style={styles.titleContainer}>
          <Image
            source={require("@/assets/images/cruz-removebg-preview.png")}
            style={styles.waveImage}
            contentFit="contain"
          />
        </ThemedView>

          <ThemedText type="subtitle" style={styles.profileName}>{`gux'`}</ThemedText>
          <ThemedView style={styles.quoteCard}>
            <ThemedText type="defaultSemiBold" style={styles.quoteText}> “O medo é uma ferramenta” </ThemedText>            
          </ThemedView>

         <ThemedView style={styles.quoteCard}>
            <ThemedText type="defaultSemiBold" style={styles.quoteText}> Gustavo Henrique  </ThemedText>            
          </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <View style={styles.linkWrapper}>
            <Link href="/modal">
              <Link.Trigger>
                <ThemedText type="subtitle" style={styles.linkText}>zzz</ThemedText>
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
          </View>
          <ThemedText style={styles.hintText}>Clique acima.</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    backgroundColor: "#0A0A0C",
  },
  headerContainer: {
    height: 240,
    backgroundColor: "#000000",
   justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  headerImage: {
    height: 300,
    width: 300,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  bodyContainer: {
    padding: 20,
    gap: 20,
    backgroundColor: "#0A0A0C",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  stepContainer: {
    gap: 8,
    backgroundColor: "transparent",
  },
  profileName: {
    letterSpacing: 0.5,
  },
  quoteCard: {
    backgroundColor: "#18181B",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#52525B",
    borderWidth: 1,
    borderColor: "#27272A",
  },
  quoteText: {
    color: "#E4E4E7",
  },
  linkWrapper: {
    backgroundColor: "#18181B",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#27272A",
    alignItems: "center",
  },
  linkText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  hintText: {
    fontSize: 13,
    color: "#A1A1AA",
    textAlign: "center",
    marginTop: 2,
  },
  waveImage: {
    width: 44,
    height: 44,
  },
});