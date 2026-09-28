import React from "react"
import { View, Text, Image, ScrollView } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={[Estilo.Container, { backgroundColor: "#2A1405" }]}> 
            <ScrollView contentContainerStyle={Estilo.CenterContainer} showsVerticalScrollIndicator={false}>
                <Image 
                    source={require('../../assets/radiancia.png')} 
                    style={[Estilo.ImagemCena, { borderColor: "#F2A900" }]} 
                />
                <Text style={[Estilo.Title, { color: "#FFD700", textShadowColor: '#F2A900', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10 }]}>A Radiância</Text>
                <View style={[Estilo.Divider, { backgroundColor: "#5E2905" }]} />
                <Text style={[Estilo.BodyText, { color: "#F0B67F" }]}>
                    No coração sombrio do Cavaleiro Vazio, a verdadeira praga desperta. A deusa da luz primordial tenta consumir a sua mente com um brilho ofuscante e dourado.
                </Text>
                <Text style={[Estilo.BodyText, { color: "#F0B67F" }]}>
                    Para que a infecção acabe, a luz doente deve ser engolida pela escuridão absoluta do Vazio. Uma batalha épica nos limites da mente.
                </Text>
                <Text style={[Estilo.Quote, { color: "#C45B1A" }]}>"Luz, antiga e perigosa..."</Text>
            </ScrollView>
        </View>
    )
}
