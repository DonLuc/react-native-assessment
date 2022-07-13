import {SafeAreaView, View, Text} from 'react-native';
import React, {Component} from 'react';
import SwipeButton from 'rn-swipe-button';

import diamondIcon from '../assets/icons/icon-diamond.png';
class SwipableButton extends Component {
  completed() {
    alert('Thanks for going through the assessment!');
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <SwipeButton
            thumbIconImageSource={diamondIcon}
            disabled={false}
            height={45}
            width="100%"
            containerStyles={{borderRadius: 10}}
            title="Slide me to continue"
            titleFontSize={15}
            titleColor="#70b1f4"
            railFillBackgroundColor="#70b1f4"
            railFillBorderColor="#70b1f4"
            onSwipeSuccess={this.completed}
            railStyles={{borderRadius: 10}}
            thumbIconStyles={{
              borderRadius: 10,
              borderColor: '#FFF',
            }}
            thumbIconBackgroundColor="#70b1f4"
            railBackgroundColor="black"
            railBorderColor="#FFF"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SwipableButton;
