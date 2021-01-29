import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
require("firebase/firestore");

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let posts = [];
    if (props.usersLoaded == props.following.length) {
      for (let i = 0; i < props.following.length; i++) {
        const user = props.users.find((el) => el.uid === props.following[i]);
        if (user != undefined) {
          posts = [...posts, ...user.posts];
        }
      }

      posts.sort(function (x, y) {
        return x.creation - y.creation;
      });

      setPosts(posts);
    }
  }, [props.usersLoaded]);

  return (
    <View style={styles.container}>
      <View style={styles.containerGallery}>
        <FlatList
          horizontal={false}
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerImage}>
                <Text style={styles.container}>{item.user.name}</Text>
                <Image
                  style={styles.image}
                  source={{ uri: item.downloadURL }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  containerInfo: {
    margin: 20,
  },
  containerGallery: {
    flex: 1,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
  containerImage: {
    flex: 1 / 3,
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  following: store.userState.following,
  users: store.usersState.users,
  usersLoaded: store.usersState.usersLoaded,
});

export default connect(mapStateToProps, null)(Feed);
