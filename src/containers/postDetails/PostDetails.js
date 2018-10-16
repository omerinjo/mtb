import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, Dimensions, StyleSheet, WebView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTML from 'react-native-render-html'
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
import HTMLView from 'react-native-htmlview'

import { fetchPostDetails } from './Action';



class PostDetails extends Component {
  state = {
    indicator: true,
    post: null
  }

  componentDidMount() {
     this.props.fetchPostDetails(this.props.navigation.state.params.slug)
  }

  async componentWillReceiveProps(nextPorps) {
    console.log("propovi posta ", nextPorps.Details.post.postContent)

  /*  await this.setState({
       post: nextPorps.Details.post.postContent
    })*/
    await this.setState({ 
       post: nextPorps.Details.post.postContent.replace(/width|height/g, 
         `width = ${Math.floor(Dimensions.get('window').width -10)} height =300; margin=10px`)
     })
     console.log("state ", this.state.post)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          // injectedJavaScript={"document.querySelector('.single-post-close').style.display=\"none\""}
          source={{ html: this.state.post }}
        />
      </View>
    );
  }
  /* render() {
     return (
       <View style={{ flex: 1, padding: 10, alignItems: 'center', }}>
         <ScrollView style={{ flex: 1 }}>
           <WebView
              source={{uri: 'https://github.com/facebook/react-native'}}
            // html={ this.state.post}
            // ignoredTags={[ ...IGNORED_TAGS, 'href']}
             // value={this.state.post}
           // renderNode={renderNode}
              stylesheet={{flex:1}}
           // imagesMaxWidth={Dimensions.get('window').width} 
           />
 
         </ScrollView>
       </View>
     );
   }*/
}

const mapStateToProps = (state) => {
  return {
    Details: state.PostDetailsReducer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPostDetails: fetchPostDetails
  }, dispatch)
}
const styles = StyleSheet.create({
  a: {
    borderColor: 'black',
    borderWidth: 1
  },
  p: {
    fontWeight: 'bold',
    fontSize: 25
  },
  img: {
    position: 'absolute'
  }

});
export default connect(mapStateToProps, matchDispatchToProps)(PostDetails)
