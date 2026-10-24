import { Image } from "expo-image";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import { WebView } from "react-native-webview";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function MusicScreen() {
  const spotifyUrl1 =
    "https://open.spotify.com/embed/playlist/0MT0CfzmCSaOTcwkNPLOmo?utm_source=generator&theme=0";
  const spotifyUrl2 =
    "https://open.spotify.com/embed/playlist/5UAjqvjCGyizeoDVhOR2yI?utm_source=generator&theme=0";

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
          {`Playlists & Seleções'`}
        </ThemedText>

        <ThemedView style={styles.quoteCard}>
          <ThemedText type="defaultSemiBold" style={styles.quoteText}>
            “O que eu escuto?”
          </ThemedText>
        </ThemedView>

        <View style={styles.playlistsRow}>
          <View style={styles.playlistColumn}>
            <ThemedView style={styles.infoCard}>
              <ThemedText type="subtitle" style={styles.cardTitle}>
                Playlist: gux'
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.quoteText}>
                525 músicas
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.quoteText}>
                Foco: Músicas que eu gosto de ouvir no dia a dia
              </ThemedText>
            </ThemedView>

            <View style={styles.spotifyContainer}>
              {Platform.OS === "web" ? (
                <iframe
                  src={spotifyUrl2}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: 12, border: "none" }}
                />
              ) : (
                <WebView
                  originWhitelist={["*"]}
                  source={{ uri: spotifyUrl2 }}
                  style={styles.spotifyWebView}
                  scrollEnabled={false}
                />
              )}
            </View>
          </View>

          <View style={styles.playlistColumn}>
            <ThemedView style={styles.infoCard}>
              <ThemedText type="subtitle" style={styles.cardTitle}>
                Playlist: phl
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.quoteText}>
                92 músicas
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.quoteText}>
                Foco: Meu artista favorito
              </ThemedText>
            </ThemedView>

            <View style={styles.spotifyContainer}>
              {Platform.OS === "web" ? (
                <iframe
                  src={spotifyUrl1}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: 12, border: "none" }}
                />
              ) : (
                <WebView
                  originWhitelist={["*"]}
                  source={{ uri: spotifyUrl1 }}
                  style={styles.spotifyWebView}
                  scrollEnabled={false}
                />
              )}
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
  },
  quoteText: {
    color: "#E4E4E7",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 4,
  },
  playlistsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "space-between",
  },
  playlistColumn: {
    flex: 1,
    minWidth: 320,
    gap: 12,
  },
  infoCard: {
    backgroundColor: "#18181B",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#52525B",
    borderWidth: 1,
    borderColor: "#27272A",
    gap: 4,
  },
  spotifyContainer: {
    height: 400,
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#27272A",
    backgroundColor: "#18181B",
  },
  spotifyWebView: {
    backgroundColor: "transparent",
  },
  waveImage: {
    width: 44,
    height: 44,
  },
});
