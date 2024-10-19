import { FlatList, Text, View } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";


// import { NativeWindStyleSheet } from "nativewind";

// NativeWindStyleSheet.setOutput({
//   default: "native",
// });





export default function HomeScreen(){
  return (
      // <FlatList data={products} renderItem={({item})=>(
      //   <ProductListItem product={item} />
      // )} />
      <View>
      <Button>
        <ButtonText >press me</ButtonText>
      </Button>
      </View>
  )
}
