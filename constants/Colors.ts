import { Appearance } from 'react-native';

let Colors = {
  primaryColor : "#FF7612",
    backgroundColor : "#FFF4F4",
    tintColorDark : "#E5881B",
    tintColorLight : "#FFCAA4",
    gray : "#9D9D9D",
    secondary : "#4CA1F0",
    text: "#333333",
    pastEventComponent : {
      backgroundColor : "#AB998C",
      TextColor : "#655B54"
    }
}


const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  Colors =  {
    primaryColor : "#FF7612",
    backgroundColor : "#1E1B17",
    tintColorDark : "#E5881B",
    tintColorLight : "#FFCAA4",
    gray : "#525252",
    secondary : "#4CA1F0",
    text: "#CCCCCC",
    pastEventComponent : {
      backgroundColor : "#AB998C",
      TextColor : "#655B54"
    }
  }
}

export default Colors