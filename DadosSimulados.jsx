import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

const DadosSimulados = () => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    const listaDados = [
        { id: 1, nome: 'Item A', descricao: 'Descricao do Item A' },
        { id: 2, nome: 'Item B', descricao: 'Descricao do Item B' },
        { id: 3, nome: 'Item C', descricao: 'Descricao do Item C' }
    ];

    const carregarDados = () => {
        setCarregando(true);
        setErro(null);

        // Simulando demora no carregamento dos dados
        setTimeout(() => {
            // Simulando possibilidade de erro
            const ocorreuErro = Math.random() < 0.3; 
            if (ocorreuErro) {
                setErro('Falha ao carregar dados');
                setCarregando(false);
                return;
            }

            // Selecionando item aleatorio da lista
            const indiceAleatorio = Math.floor(Math.random() * listaDados.length);
            setDados(listaDados[indiceAleatorio]);
            setCarregando(false);
        }, 2000);
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {carregando && <ActivityIndicator size="large" color="#0000ff" />}
            {erro && <Text style={{ color: 'red', marginBottom: 20 }}>{erro}</Text>}
            {dados && !erro && !carregando && (
                <View style={{ marginBottom: 20 }}>
                    <Text>Nome: {dados.nome}</Text>
                    <Text>Descrição: {dados.descricao}</Text>
                </View>
            )}
            <Button title="Carregar Novamente" onPress={carregarDados} />
        </View>
    );
};

export default DadosSimulados;
