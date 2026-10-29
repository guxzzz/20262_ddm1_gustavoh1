import { Image } from "expo-image";
import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function TheLastOfUsScreen() {
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

        <ThemedText type="subtitle" style={styles.profileName}>
          {`The Last of Us`}
        </ThemedText>

        <ThemedView style={styles.quoteCard}>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            “No matter what, you keep finding something to fight for.”
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.quoteCard}>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            Personagem: Ellie Williams
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            Universo: Sobrevivência & Resiliência
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            Status: Imune & Determinado
          </ThemedText>
        </ThemedView>

        <View style={styles.bannerContainer}>
          <Image
            source={require("@/assets/images/ellie.webp")} 
            style={styles.bannerImage}
            contentFit="cover"
          />
        </View>
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
    gap: 4,
  },
  quoteText: {
    color: "#E4E4E7",
  },
  bannerContainer: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#27272A",
    backgroundColor: "#18181B",
    width: 500,
    height: 250,
    alignSelf: "center",
  },
  bannerImage: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    alignSelf: "center",
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