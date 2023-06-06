import { View, Text, Image } from "native-base"
import { styles } from "./styled";

const GlucosaScreen = () => {
  return(
    <View>
      <Text style={styles.title}>O que é Glicemia?</Text>
      <Text style={styles.descricao}>A glicemia é o termo que se refere ao valor de glicose no sangue, 
        que pode ser alterado após a ingestão de doces e carboidratos.</Text>
      <Text style={styles.descricao}> A concentração de glicose no sangue é controlada por dois hormônios,
         a insulina que é responsável pela diminuição do açúcar na corrente sanguínea e o 
         glucagon que tem função de aumentar os níveis de glicose.</Text>

        <Text style={styles.descricao}>Normalmente, pessoas que fazem uso de insulina para o tratamento de diabetes 
          (normalmente tipo 1, mas também em alguns casos de tipo 2),
           precisam estar atentas ao seu nível de glicemia ao longo do dia,
           até para ajustarem as quantidades de hormônio que irão injetar antes das refeições.</Text>
        <Image style={styles.imagem} source={{uri: "https://etcetaljornal.pt/j/wp-content/uploads/2020/03/5.-Glicemia.jpg"}}></Image>
           
    </View>
  )
}

export default GlucosaScreen;