import { TextBase } from "react-native"
import React from "react"
import { FlatList, Text, View } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { Item } from "../components"
import { Container } from "../Home/Style"

const HistoryScreen = () => {
  const data = [
    {
      id: "1",
      medida: 1,
      date: "05/06/2023"
    },
    {
      id: "2",
      medida: 10,
      date: "06/06/2023"
    },
    {
      id: "3",
      medida: 20,
      date: "07/06/2023"
    },
  ]
  
  return (
  <>
    <Container>
      <SafeAreaView >
        <FlatList
          data={data}
          renderItem={({item}) => <Item medida={item.medida} date={item.date}/>}
          keyExtractor={item => item.id}
        />
        
      </SafeAreaView>
    </Container>
  </>
  );

  // return(
  //   <>
  //   <Text>Eaeee</Text>
  //     {data.map((data) => {
  //       <>
  //         <Text>123</Text>
  //         <Item data={data}/>
  //       </>
  //     })}
  //   </>
  // )
  
}

export {
  HistoryScreen,
}