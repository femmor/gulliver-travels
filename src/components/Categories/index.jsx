import React, { memo, useState } from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {

  return (
    <FlatList 
        data={categories}
        renderItem={({ item }) => {
            const selected = selectedCategory === item

            return (
                <TouchableOpacity style={[styles.categoryContainer, selected ? styles.selectedItemContainer : {}]} onPress={() => onCategoryPress(item)}>
                    <Text style={[styles.category, selected ? styles.selected : {}]}>{item}</Text>
                </TouchableOpacity>
            )
        }}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
            marginRight: -32,
        }}
    />
  )
}

export default memo(Categories)