import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, View } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
// O ParallaxScrollView foi removido!
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Cabeçalho estático */}
      <View style={styles.headerContainer}>
        <IconSymbol
          size={120}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
        />
      </View>

      <ThemedView style={styles.bodyContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts?.rounded || 'System', // Fallback caso a fonte não exista
            }}>
            Explore
          </ThemedText>
        </ThemedView>
        <ThemedText>This app includes example code to help you get started.</ThemedText>

        {/* --- ESPAÇO PARA IMAGEM 1: Exemplo de código/app --- */}
        <View style={styles.imagePlaceholder}>
          <ThemedText style={styles.placeholderText}>Imagem do Projeto Funcionando</ThemedText>
        </View>

        <Collapsible title="File-based routing">
          <ThemedText>
            This app has two screens:{' '}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
            <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
          </ThemedText>
          <ThemedText>
            The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
            sets up the tab navigator.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Android, iOS, and web support">
          <ThemedText>
            You can open this project on Android, iOS, and the web. To open the web version, press{' '}
            <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Images">
          <ThemedText>
            For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
            <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
            different screen densities
          </ThemedText>
          
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={{ width: 100, height: 100, alignSelf: 'center', marginVertical: 10 }}
          />

          {/* --- ESPAÇO PARA IMAGEM 2: Outra imagem de exemplo --- */}
          <View style={styles.imagePlaceholderSmall}>
            <ThemedText style={styles.placeholderText}>Outro Exemplo de Imagem</ThemedText>
          </View>

          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Light and dark mode components">
          <ThemedText>
            This template has light and dark mode support. The{' '}
            <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
            what the user&apos;s current color scheme is.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Animations">
          <ThemedText>
            This template includes an example of an animated component. The{' '}
            <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
            the powerful{' '}
            <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts?.mono || 'System' }}>
              react-native-reanimated
            </ThemedText>{' '}
            library.
          </ThemedText>
          {Platform.select({
            ios: (
              <ThemedText>
                The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
                component provides a parallax effect for the header image.
              </ThemedText>
            ),
          })}
        </Collapsible>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 200,
    backgroundColor: '#D0D0D0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    padding: 20,
    gap: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  // Mesmos estilos de placeholder para manter o padrão visual
  imagePlaceholder: {
    height: 180,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#C0C0C0',
    borderStyle: 'dashed',
  },
  imagePlaceholderSmall: {
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#C0C0C0',
    borderStyle: 'dashed',
  },
  placeholderText: {
    color: '#666',
    fontWeight: 'bold',
  },
});