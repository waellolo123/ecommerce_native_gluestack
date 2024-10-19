import { Text, View } from "react-native";


export default function ProductListItem({product}: any){
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  )
}
