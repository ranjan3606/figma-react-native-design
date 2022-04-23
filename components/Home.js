import React from 'react'
import {View,Image,StyleSheet,ScrollView,Text,ImageBackground} from 'react-native'
import colors from '../assets/color/color'
import Feathre from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import activitiesData from '../assets/data/activitiesData'
import discoverCategory from '../assets/data/discoverCategory'
import learnMoreData from '../assets/data/learnMoreData'
import discoverData from '../assets/data/discoverData'
import { SafeAreaView } from 'react-native-safe-area-context'
import pimage from '../assets/images/person.png'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

Feathre.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return(
      <TouchableOpacity 
        onPress={() => navigation.navigate('Details', {
          item: item
        })}
      >
        <ImageBackground 
          source={item.image}
          style={[styles.discoverItem, {marginLeft: item.id === 'discover-1' ? 20:0}]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocation}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderActivityItem = ({item}) => {
    return(
      <View style={[styles.activityItemsWrapper, {
        marginLeft: item.id === 'activities-1' ? 20:0,
      }]}>
        <Image source={item.image} style={styles.activityItemsImage} />
        <Text style={styles.activityTitle}>{item.title}</Text>
      </View>
    )
  }

  const renderLearnMoreItem = ({item}) => {
    return(
      <View style={[styles.learnMoresWrapper, {
        marginLeft: item.id === 'learnMore-1' ? 20 : 0
      }]}>
        <Image source={item.image} style={styles.learnMoresImage} />
        <Text style={styles.learnMoresTitle}>{item.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
        <ScrollView>
          <SafeAreaView>
            <View style={styles.menuWrapper}>
              <Feathre name="menu" size={32} color={colors.black} style={styles.menuIcon} />
              <Image source={pimage} style={styles.profileImg} />
            </View>
          </SafeAreaView>
          <View style={styles.discoverWrapper}>
            <Text style={styles.discoverTitle}>Discover</Text>
            <View style={styles.discoverCategoriesWrapper}>
              <Text style={styles.discoverCategorieText}>All</Text>
              <Text style={styles.discoverCategorieText}>Destinations</Text>
              <Text style={styles.discoverCategorieText}>Cities</Text>
              <Text style={styles.discoverCategorieText}>Enterprises</Text>
            </View>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Activities */}
          <View style={styles.activitiesWrapper}>
            <Text style={styles.activitiesTitle}>Activities</Text>
            <View style={styles.activitiesItemsWrapper}>
              <FlatList
                data={activitiesData}
                renderItem={renderActivityItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* learnMoreData */}
          <View style={styles.learnMoreWrapper}>
            <Text style={styles.learnMoreTitle}>Learn More</Text>
            <View style={styles.activitiesItemsWrapper}>
              <FlatList
                data={learnMoreData}
                renderItem={renderLearnMoreItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white
  },
  menuWrapper:{
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },

  profileImg:{
    width:52,
    height:52 
 },
 discoverWrapper:{
   marginHorizontal: 20,
   marginTop:20
 },
 discoverTitle:{
   fontFamily:'Lato-bold',
   fontSize:32
 },
 discoverCategoriesWrapper:{
   flexDirection: 'row',
   marginTop: 20,
   color:colors.orange
 },
 discoverCategorieText:{
   marginRight: 30,
   fontFamily: 'Lato-Regular',
   fontSize: 16,
   color: colors.gray
 },
 discoverItemsWrapper:{
  paddingVertical:20
 },
 discoverItem:{
   width:170,
   height:250,
   justifyContent:'flex-end',
   paddingHorizontal:10,
   paddingVertical:15,
   marginRight:20
 },
 discoverItemImage:{
  borderRadius: 20
 },
 discoverItemTitle:{
   fontFamily: 'Lato-Bold',
   fontSize:18,
   color: colors.white
 },
 discoverItemLocationWrapper:{
  flexDirection:'row',
  alignItems:'center',
  marginTop: 5
 },
 discoverItemLocation:{
  marginLeft: 5,
  fontFamily: 'Lato-Bold',
  fontSize:14,
  color: colors.white
 },
 activitiesWrapper: {
   marginTop: 10
 },
activitiesTitle: {
  marginHorizontal: 20,
  fontFamily: 'Lato-Bold',
  fontSize: 24,
  color: colors.black
},
activitiesItemsWrapper: {
  paddingVertical:20
},
activityItemsWrapper:{
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight:20
},
activityItemsImage:{
  width: 30,
  height:40
},
activityTitle:{
  marginTop: 5,
  fontFamily: 'Lato-Bold',
  fontSize:14,
  color: colors.gray
},
learnMoreWrapper:{
  marginTop:10
},
learnMoreTitle:{
  marginHorizontal:20,
  fontFamily: 'Lato-Bold',
  fontSize: 24,
  color: colors.black
},
learnMoresWrapper:{
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight:20
},
learnMoresImage:{
  width: 170,
  height:180,
  justifyContent: 'center',
  borderRadius: 20
},
learnMoresTitle:{
  marginTop: 5,
  fontFamily: 'Lato-Bold',
  fontSize:14,
  color: colors.gray
},
})

export default Home;