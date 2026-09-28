import React from "react"
import { View, Text, Image, ScrollView } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={[Estilo.Container, { backgroundColor: "#050505" }]}>
            <ScrollView contentContainerStyle={Estilo.CenterContainer} showsVerticalScrollIndicator={false}>
                <Image 
                    source={require('../../assets/nascimento.png')} 
                    style={Estilo.ImagemCena} 
                />
                <Text style={[Estilo.Title, { color: "#E0E2E4" }]}>O Abismo</Text>
                <View style={[Estilo.Divider, { backgroundColor: "#222" }]} />
                <Text style={[Estilo.BodyText, { color: "#A3A3A3" }]}>
                    Nascido das profundezas, você é um Receptáculo. Forjado a partir da união pálida entre o Rei e a Dama Branca, e preenchido com o Vazio absoluto.
                </Text>
                <Text style={[Estilo.BodyText, { color: "#A3A3A3" }]}>
                    Sem voz para chorar o sofrimento. Sem mente para pensar.
                </Text>
                <Text style={[Estilo.Quote, { color: "#555" }]}>"Nenhum custo é grande demais."</Text>
            </ScrollView>
        </View>
    )
}
