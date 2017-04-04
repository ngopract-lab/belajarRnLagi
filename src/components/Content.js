import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './Content.styles.js';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [
        {
          id: 1,
          title: "Ketika Sri Mulyani Sulit Bedakan",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
        {
          id: 2,
          title: "Jualan Pisang Goreng jadi Kaya",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
        {
          id: 3,
          title: "Hati - Hati ada Hoax",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
        {
          id: 4,
          title: "Pilih Gubernur Anda Sekarang",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
        {
          id: 5,
          title: "Ketika Sri Mulyani Sulit Bedakan",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
        {
          id: 6,
          title: "Makan Bakpao",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
        {
          id: 7,
          title: "Halo Adam",
          category: "detikFinance",
          date: "Selasa, 04 Apr 2017",
          photo: "https://ichef.bbci.co.uk/news/ws/560/amz/worldservice/live/assets/images/2016/07/27/160727135718_sri_mulyani_640x360_bbcindonesia.jpg",
        },
      ]
    }
  }

  render() {
    console.log(this.props.searchKey);
    return (
      <ScrollView style={styles.content}>
        { this.state.news.filter(news => {
            const pattern = new RegExp(this.props.searchKey,'gi');
            return news.title.search(pattern) !== -1;
          }).map(newsItem => (
          <View key={newsItem.id} style={styles.newsCard}>
            <Image source={{uri: 'https://unsplash.it/300/300/?random' }} style={styles.newsPhoto} />
            <View style={styles.newsInfo}>
              <Text style={styles.newsHeading}>{newsItem.title}</Text>
              <Text style={styles.newsMeta}>
                {newsItem.category} {newsItem.date}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigator.push({ title: 'detail', newsObj: newsItem })}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  Baca Lebih Lanjut...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Content;
