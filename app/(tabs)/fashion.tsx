import { Image } from "expo-image";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function FashionScreen() {
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
          {`Moda & Style'`}
        </ThemedText>

        <ThemedView style={styles.quoteCard}>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            “A moda é a expressão visual da sua essência.”
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.quoteCard}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Estilo & Conceito
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            Estilo Principal: Streetwear
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            Paleta de Cores: Preto, Cinza, Branco
          </ThemedText>
        </ThemedView>
        
        <ThemedText type="subtitle" style={styles.sectionHeader}>
          Galeria & Exemplos
        </ThemedText>

        <View style={styles.galleryGrid}>
          {/* Item 1 */}
          <View style={styles.galleryCard}>
            <View style={styles.imageWrapper}>
              <Image
                source={require("@/assets/images/ch warrior.jpg")}
                style={styles.galleryImage}
                contentFit="cover"
              />
            </View>
          </View>

          {/* Item 2 */}
          <View style={styles.galleryCard}>
            <View style={styles.imageWrapper}>
              <Image
                source={require("@/assets/images/download.jpg")}
                style={styles.galleryImage}
                contentFit="cover"
              />
            </View>
          </View>

          {/* Item 3 */}
          <View style={styles.galleryCard}>
            <View style={styles.imageWrapper}>
              <Image
                source={require("@/assets/images/dnieccio.jpg")}
                style={styles.galleryImage}
                contentFit="cover"
              />
            </View>
          </View>
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
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 4,
  },
  sectionHeader: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 8,
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  galleryCard: {
    left: 100,
    flex: 1,
  },
  imageWrapper: {
    borderRadius: 12,
    width: 300,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#27272A",
    backgroundColor: "#18181B",
  },
  galleryImage: {
    width: 300,
    height: 470,
  },
  waveImage: {
    width: 44,
    height: 44,
  },
});