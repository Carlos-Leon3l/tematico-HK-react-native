import React from "react"
import { View, Text, Image, ScrollView } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={[Estilo.Container, { backgroundColor: "#0A1321" }]}> 
            <ScrollView contentContainerStyle={Estilo.CenterContainer} showsVerticalScrollIndicator={false}>
                <Image 
                    source={require('../../assets/aventura.png')} 
                    style={[Estilo.ImagemCena, { borderColor: "#1A2A42" }]} 
                />
                <Text style={[Estilo.Title, { color: "#B0C4DE" }]}>O Coração Azul</Text>
                <View style={[Estilo.Divider, { backgroundColor: "#142133" }]} />
                <Text style={[Estilo.BodyText, { color: "#778DA9" }]}>
                    No centro do reino repousa a melancólica Cidade das Lágrimas. A chuva constante cai de fendas nos lagos cristalinos muito acima, banhando a arquitetura grandiosa e a estátua do próprio Cavaleiro Vazio.
                </Text>
                <Text style={[Estilo.BodyText, { color: "#778DA9" }]}>
                    Nestas pontes de pedra azul e arcos de vitral, a aristocracia infectada ainda caminha, ignorante da ruína absoluta que consumiu a glória de Hallownest.
                </Text>
                <Text style={[Estilo.Quote, { color: "#4B6282" }]}>E a chuva continua a cair...</Text>
            </ScrollView>
        </View>
    )
}
