import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Card,
  Title,
  Paragraph,
  Headline,
  Avatar,
  IconButton,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-paper';

const Details = ({route}) => {
  const {orderId} = route.params;
  const [price, setPrice] = useState();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetailOrder = async () => {
      axios
        .get(`http://10.0.2.2:3000/api/v1/orders/${orderId}`)
        .then(function (response) {
          setDetails(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getDetailOrder();
  }, []);

  return (
    <SafeAreaView>
      <Card>
        <Card.Content>
          <Title>Cantidad disponible: ${orderId}</Title>
          <Paragraph>Deseo vender entre: 30$ hasta ${details.price}</Paragraph>
        </Card.Content>
      </Card>
      <TextInput
        type="flat"
        label="Cantidad a comprar"
        onChangeText={text => setPrice(text)}
      />

      <Headline
        style={{
          backgroundColor: '#313232',
          color: 'white',
          padding: 10,
          marginTop: 40,
        }}>
        Detalles de la compra
      </Headline>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolor
        quaerat odit quia animi fugit porro voluptatibus nam dicta facere
        perferendis ratione soluta voluptate aperiam quae veritatis quasi
        dolorem? Totam!
      </Paragraph>
      <Card.Title
        title="Fulanito Martinez"
        subtitle="4.9 | 122 Operaciones | 87% de certeza"
        left={props => (
          <Avatar.Image
            {...props}
            size={24}
            source={{uri: 'https://source.unsplash.com/200x200/?dogs'}}
          />
        )}
        right={props => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
