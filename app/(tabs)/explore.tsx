import { StyleSheet, ScrollView, View } from "react-native";

import { Collapsible } from "@/components/ui/collapsible";
import { ExternalLink } from "@/components/external-link";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Fonts } from "@/constants/theme";

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerContainer}>
        <ThemedText type="title" style={styles.headerTitle}>
          gux'
        </ThemedText>
      </View>

      <ThemedView style={styles.bodyContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts?.rounded || "System",
            }}
          >
            Perfil & Interesses
          </ThemedText>
        </ThemedView>

        <ThemedText style={styles.introText}>
          Espaço dedicado a notas, referências de jogos, citações e projetos em
          desenvolvimento.
        </ThemedText>

        <Collapsible title="Jogos & Universos">
          <ThemedText type="defaultSemiBold">The Last of Us</ThemedText>
          <ThemedText>
            Foco em narrativas profundas, universos pós-apocalípticos e
            histórias de sobrevivência.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Filosofia & Citações">
          <ThemedText type="defaultSemiBold">
            “O medo é uma ferramenta”
          </ThemedText>
          <ThemedText>
            Uso do foco, da superação e da disciplina para enfrentar desafios e
            evoluir.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Projetos & Tecnologia">
          <ThemedText>
            Desenvolvimento de aplicações mobile modernas utilizando React
            Native e Expo.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev">
            <ThemedText type="link">Documentação Expo</ThemedText>
          </ExternalLink>
        </Collapsible>
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
    height: 160,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 32,
    letterSpacing: 2,
  },
  bodyContainer: {
    padding: 20,
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
  },
  introText: {
    fontSize: 15,
    opacity: 0.8,
  },
});
