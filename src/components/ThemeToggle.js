import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, View, PanResponder, Animated, Dimensions } from 'react-native';
import { useTheme } from '../components/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const tapThreshold = 5; // Adjust the threshold as needed

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    // Set the initial position to left side center
    pan.setValue({ x: 0, y: screenHeight / 2 - 12 });
    pan.x.setValue(0); // Ensure the toggle stays within the screen bounds
    pan.y.setValue(Math.min(Math.max(0, screenHeight / 2 - 12), screenHeight - 24));
  }, [screenHeight, pan]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // Check if the movement is more than the tap threshold
      return Math.abs(gestureState.dx) > tapThreshold || Math.abs(gestureState.dy) > tapThreshold;
    },
    onPanResponderMove: (_, gestureState) => {
      const { moveX, moveY } = gestureState;

      // Update the position of the component to the touch coordinates
      pan.setValue({ x: moveX - 12, y: moveY - 12 }); // 12 is half of the toggle's width/height

      // Ensure the toggle stays within the screen bounds
      pan.x.setValue(Math.min(Math.max(0, moveX - 12), screenWidth - 24));
      pan.y.setValue(Math.min(Math.max(0, moveY - 12), screenHeight - 24));
    },
    onPanResponderRelease: (_, gestureState) => {
      // Check if the movement is less than the tap threshold
      if (Math.abs(gestureState.dx) <= tapThreshold && Math.abs(gestureState.dy) <= tapThreshold) {
        // It's a tap, trigger onPress behavior
        toggleTheme();
      } else {
        // It's a drag, do nothing on release
      }
    },
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity onPress={toggleTheme} style={{ padding: 10 }}>
        <MaterialCommunityIcons
          name={isDarkMode ? 'weather-night' : 'white-balance-sunny'}
          size={35}
          color={isDarkMode ? 'red' : '#000000'}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ThemeToggle;
