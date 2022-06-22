import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { NoticiaData } from '../types/noticia';

interface NoticiaCardProps {
  item: NoticiaData;
  onDelete?: (id: string) => Promise<void>
  onEdit?: (noticia: NoticiaData) => void
}

export default function NoticiaCard({ item, onDelete, onEdit }: NoticiaCardProps) {
  return (
    <View style={styles.list}>
      <Text style={styles.nameNoticia}>
        {item.noticia}
      </Text>
      <View style={styles.actionsArea}>
        {onEdit && (
          <TouchableOpacity style={{ marginRight: 15 }} onPress={() => onEdit(item)}>
            <Feather name="edit" size={18} color="white" />
          </TouchableOpacity>
        )}
        {onDelete && (
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Feather name="trash" size={18} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#0288d1',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameNoticia: {
    color: '#fff',
    fontSize: 18,
  },
  actionsArea: {
    flexDirection: 'row',
  }
});