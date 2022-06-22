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

export default function List(): ReactElement {
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

  return (
      <View style={styles.container}>
          <Text style={[styles.title]}>{}</Text>
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
    // paddingVertical: 1,
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
