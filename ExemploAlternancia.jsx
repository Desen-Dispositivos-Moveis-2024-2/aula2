import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExemploAlternancia = () => {
    const mensagens = [
        'Bem-vindo ao aplicativo!',
        'Aprenda React Native de forma prática.',
        'Use Hooks para gerenciar estado e ciclo de vida.',
        'Boas práticas tornam o código mais limpo.'
    ];

    const [indice, setIndice] = useState(0);
    const [intervaloAtivo, setIntervaloAtivo] = useState(true);

    useEffect(() => {
        if (!intervaloAtivo) return;

        const intervalo = setInterval(() => {
            setIndice((indiceAnterior) => {
                const proximo = indiceAnterior + 1;
                return proximo >= mensagens.length ? 0 : proximo;
            });
        }, 3000);

        return () => clearInterval(intervalo);
    }, [intervaloAtivo]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>{mensagens[indice]}</Text>
            <Button title={intervaloAtivo ? "Pausar" : "Retomar"} onPress={() => setIntervaloAtivo(!intervaloAtivo)} />
        </View>
    );
};

const estilos = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    texto: { fontSize: 18, marginBottom: 20 }
});

export default ExemploAlternancia;
