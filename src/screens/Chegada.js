import React from "react"
import { View, Text, Image, ScrollView } from "react-native"
import Estilo from "../styles/Estilo"

export default () => {
    return (
        <View style={[Estilo.Container, { backgroundColor: "#151324" }]}> 
            <ScrollView contentContainerStyle={Estilo.CenterContainer} showsVerticalScrollIndicator={false}>
                <Image 
                    source={require('../../assets/chegada.png')} 
                    style={[Estilo.ImagemCena, { borderColor: "#3D385C" }]} 
                />
                <Text style={[Estilo.Title, { color: "#E5DEDD" }]}>O Retorno</Text>
                <View style={[Estilo.Divider, { backgroundColor: "#2B253D" }]} />
                <Text style={[Estilo.BodyText, { color: "#A6A0B8" }]}>
                    Convocado por um chamado silencioso, o Cavaleiro retorna. Parado no penhasco, ele observa a névoa cobrir a pequena Dirtmouth lá embaixo.
                </Text>
                <Text style={[Estilo.BodyText, { color: "#A6A0B8" }]}>
                    O brilho distante dos postes da cidade desvanece na escuridão azulada, guardando os segredos que o chamaram de volta.
                </Text>
                <Text style={[Estilo.Quote, { color: "#6A6385" }]}>Um antigo reino aguarda nas profundezas.</Text>
            </ScrollView>
        </View>
    )
}
