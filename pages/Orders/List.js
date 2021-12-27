import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {SafeAreaView, SectionList} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Orders = ({navigation}) => {
  const [orders, setOrders] = useState([
    {
      title: 'Ventas',
      data: [],
    },
    {
      title: 'Compras',
      data: [],
    },
  ]);

  useEffect(() => {
    const getOrders = async () => {
      axios
        .get('http://10.0.2.2:3000/api/v1/orders')
        .then(function (response) {
          setOrders([
            {
              title: 'Ventas',
              data: response.data[0]['buy'],
            },
            {
              title: 'Compras',
              data: response.data[1]['sold'],
            },
          ]);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getOrders();
  }, []);

  return (
    <SafeAreaView>
      <IconButton
        icon="wallet-plus"
        style={{
          backgroundColor: '#5102c1',
          position: 'absolute',
          bottom: 10,
          right: 15,
          zIndex: 1,
        }}
        size={35}
        color="white"
        onPress={() => console.log('Pressed')}
      />
      <SectionList
        sections={orders}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('details', {
                orderId: item.id,
              });
            }}>
            <Card>
              <Card.Content>
                <Title>
                  <Avatar.Image
                    size={24}
                    source={{uri: 'https://source.unsplash.com/200x200/?dogs'}}
                  />{' '}
                  {item.price} $
                </Title>
                <Paragraph>
                  {item.average} ⭐ | {item.operations} Operaciones
                </Paragraph>
              </Card.Content>
            </Card>
          </Pressable>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Card.Title
            title={title}
            left={props => <Avatar.Icon {...props} icon="cash" />}
            right={props => (
              <IconButton {...props} icon="chevron-down" onPress={() => {}} />
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Orders;
