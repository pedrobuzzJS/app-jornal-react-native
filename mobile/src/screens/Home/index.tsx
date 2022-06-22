import React, { ReactElement, useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    FlatList,
    Image
} from 'react-native';

import Button from '../../components/Button';
import NoticiaCard from '../../components/NoticiaCard';
import { NoticiaData } from '../../types/noticia';
import api from '../../services/api';

export default function Home(): ReactElement {
    const [id, setId] = useState('');
    const [noticia, setNoticia] = useState('');
    const [autor, setAutor] = useState('');
    const [noticias, setNoticias] = useState<NoticiaData[]>([]);

    const loadNoticias = async () => {
        const response = await api.get("noticia");
        setNoticias(response.data)
    }
    
    useEffect(() => {
        loadNoticias()
    }, [loadNoticias])

    const handleSave = async () => {
        if(id) {
            await api.patch(`noticia/${id}`, { noticia, autor });
        } else {
            await api.post("noticia", { noticia, autor });
        }

        loadNoticias();
        setId('');
        setNoticia('');
        setAutor('');
    }

    const handleDelete = async (id: string) => {
        await api.delete(`noticia/${id}`);
        loadNoticias();
    }

    const handleEdit = (noticia: NoticiaData) => {
        setId(noticia.id);
        setNoticia(noticia.noticia);
        setAutor(noticia.autor);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.gretting}>Registro de Noticias</Text>

            <View style={styles.areaInput}>

                
                <TextInput
                    value={noticia}
                    style={{
                        backgroundColor: '#f1f1f1',
                        marginTop: 10,
                        padding: 10,
                        color: '#333',
                        fontSize: 16,
                    }}
                    placeholder="Notícia"
                    onChangeText={setNoticia}
                />

                <TextInput
                    value={autor}
                    placeholder="Autor"
                    style={{
                        backgroundColor: '#f1f1f1',
                        marginTop: 10,
                        padding: 10,
                        color: '#333',
                        fontSize: 16,
                    }} 
                    onChangeText={setAutor}    
                />
                
                <Button onPress={handleSave} title="Save" />
                
            </View>
            <Text style={[styles.title, { marginVertical: 10 }]}>Noticias Cadastrados</Text>

            {
            noticias && (
                <FlatList 
                    data={noticias}
                    keyboardShouldPersistTaps="never"
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <NoticiaCard 
                            item={item} 
                            onDelete={handleDelete} 
                            onEdit={handleEdit} 
                        />
                    )}
                />
            )
            }


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 60,
      paddingHorizontal: 14,
      backgroundColor: '#e0e0e0'
    },
    title: {
      color: '#212121',
      fontSize: 18,
      fontWeight: 'bold'
    },
    gretting:{
      color: '#424242',
    },
    areaInput: {
      width: '100%',
      flexDirection: 'column',
    }
  });
