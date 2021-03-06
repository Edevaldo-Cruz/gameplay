import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";

import { Fontisto } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Edevaldo Cruz",
      avatar_url: "https://github.com/Edevaldo-Cruz.png",
      status: "online",
    },
    {
      id: "2",
      username: "Helder Dias",
      avatar_url: "https://github.com/heldersdias1.png",
      status: "online",
    },
    {
      id: "3",
      username: "Adriano",
      avatar_url: "https://github.com/didisouzacosta.png",
      status: "off-line",
    },
    {
      id: "4",
      username: "Lucas Silva",
      avatar_url: "https://github.com/lucassilva-dev.png",
      status: "off-line",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendário</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da
            md10.
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.text}>
        <ListHeader title="Jogadores" subtitle="Total 4" />
      </View>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
