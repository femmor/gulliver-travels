import React, { memo, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import styles from './styles'

const Categories = ({ categories, selectedCategory }) => {

  return (
    <FlatList 
        data={categories}
        renderItem={({ item }) => {
            const selected = selectedCategory === item

            return (
                <View style={[styles.categoryContainer, selected ? styles.selectedItemContainer : {}]}>
                    <Text style={[styles.category, selected ? styles.selected : {}]}>{item}</Text>
                </View>
            )
        }}
        keyExtractor={item => item}
        horizontal
    />
  )
}

export default memo(Categories)