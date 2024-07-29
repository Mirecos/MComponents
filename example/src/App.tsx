import { ScrollView, StyleSheet } from 'react-native';
import {
  Theme,
  LightTheme,
  type CustomTheme,
  MButton,
  MFieldSet,
  MCard,
  MText,
} from 'mr-design';

let CustomLightTheme: CustomTheme = {
  dark: false,
  colors: {
    primary: 'rgb(2, 141, 91)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(235, 235, 235)',
    variant: 'rgb(200, 200, 200)',
    inversed: 'rgb(0, 0, 0)',

    text: 'rgb(40, 40, 40)',
    textOnPrimary: 'rgb(255, 255, 255)',
    border: '',
    notification: '',
  },
  text: {
    lg: 24,
    med: 18,
    sm: 14,
  },
};

export default function App() {
  LightTheme.setLightTheme(CustomLightTheme);
  return (
    <Theme.ThemeManager lightTheme={CustomLightTheme}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.container}
      >
        <MCard style={styles.card}>
          <MText text="Connexion :" size="lg" center={true} />
          <MFieldSet
            baseContent=""
            onChangeText={() => {}}
            size="med"
            fieldName="Username"
          />
          <MFieldSet
            baseContent=""
            onChangeText={() => {}}
            size="med"
            fieldName="Password"
          />
          <MButton size="med" text="Se connecter" />
        </MCard>
      </ScrollView>
    </Theme.ThemeManager>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  MVert: {
    width: '30%',
  },
  MHori: {
    marginVertical: 20,
  },
  card: {
    gap: 16,
  },
});
