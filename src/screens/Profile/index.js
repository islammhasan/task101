import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {images} from '../../assets/images';
import {Container, ScreenTitle, SingleInsight} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';

export const Profile = ({route}) => {
  const {loginUser, regUser, name, imageURL} = route.params;
  const renderItem = ({item}) => {
    const {image} = item;
    return (
      <Image resizeMode="cover" source={image} style={styles.modelStyle} />
    );
  };
  const spearatorComponent = () => {
    return <View style={styles.separatorStyle}></View>;
  };
  return (
    <Container style={styles.containerStyle}>
      <View style={styles.infoContainer}>
        <ScreenTitle style={styles.titleStyle} title="My Profile" />
        <Image
          resizeMode="cover"
          style={styles.profilePicStyle}
          source={imageURL ? {uri: `${imageURL}`} : images.profile}
        />
        <Text numberOfLines={1} style={styles.userNameText}>
          {loginUser || regUser || name || strings.defaultName}
        </Text>
        <Text numberOfLines={1} style={styles.infoText}>
          {strings.defaultBio}
        </Text>
        <Text numberOfLines={1} style={styles.infoText}>
          {strings.defaultLocation}
        </Text>
        <View style={styles.detailsContainer}>
          <SingleInsight title={strings.photosTitle} />
          <SingleInsight title={strings.followersTitle} />
          <SingleInsight title={strings.followsTitle} />
        </View>
      </View>
      <FlatList
        data={DEMO_MODELS}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={spearatorComponent}
        keyExtractor={item => item.id?.toString()}
        contentContainerStyle={styles.listStyle}
        renderItem={renderItem}
        numColumns={2}
      />
    </Container>
  );
};

const DEMO_MODELS = [
  {
    id: 'm1',
    image: images.model1,
  },
  {
    id: 'm2',
    image: images.model2,
  },
  {
    id: 'm3',
    image: images.model3,
  },
  {
    id: 'm4',
    image: images.model1,
  },
];
