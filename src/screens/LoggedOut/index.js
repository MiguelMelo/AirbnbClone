import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import RoundedButton from '../../components/buttons/RoundedButton';
import colors from '../../styles/colors';

export default class LoggedOut extends Component {
  onFacebookPress() {
    alert('Facebook button pressed!');
  };

  onCreateAccountPress() {
    alert('Create Account button pressed!');
  };

  onMoreOptionsPress() {
    alert('More Options button pressed!');
  };

  onLoginPress() {
    alert('Login button pressed!');
  };

  onCloseButtonPress() {
    alert('Close button pressed!');
  };

  render() {
    return (
      <LinearGradient style={{flex: 1}} colors={['#008489', '#008388']}>
        <View style={styles.wrapper}>
          <StatusBar backgroundColor={colors.green02} />
          <View style={styles.welcomeWrapper}>
            <IoniconsIcons name="md-close" size={28} style={styles.icons} onPress={this.onCloseButtonPress} />
            <TouchableHighlight 
              style={styles.loginOption}
              onPress={this.onLoginPress}
            >
              <Text style={styles.loginOptionButtonText}>Entrar</Text>
            </TouchableHighlight>
            <Image
              source={require('../../img/airbnb-logo.png')}
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>Bem-vindo(a) ao Airbnb.</Text>
            <RoundedButton 
              text="Continuar com Facebook"
              textColor={colors.green01}
              background={colors.white}
              icon={<FontAwesomeIcons name="facebook" size={18} style={styles.facebookButtonIcon} />}
              handleOnPress={this.onFacebookPress}
            />
            <RoundedButton 
              text="Criar uma Conta"
              textColor={colors.white}
              handleOnPress={this.onCreateAccountPress}
            />
            <TouchableHighlight 
              style={styles.moreOptions}
              onPress={this.onMoreOptionsPress}
            >
              <Text style={styles.moreOptionsButtonText}>Mais opções</Text>
            </TouchableHighlight>
            <View style={styles.termsAndConditions}>
              <Text style={styles.termsText}>Ao clicar em Continuar, Criar uma Conta ou Mais opções,</Text>
              <Text style={styles.termsText}>eu aceitos os </Text>
              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}>Termos de Serviço</Text>
              </TouchableHighlight>
              <Text style={styles.termsText}>, os </Text>
              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}>Termos de Serviço de Pagamentos</Text>
              </TouchableHighlight>
              <Text style={styles.termsText}>, a </Text>
              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}>Política de Privacidade</Text>
              </TouchableHighlight>
              <Text style={styles.termsText}> e a </Text>
              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}>Política de Não Discriminação</Text>
              </TouchableHighlight>
              <Text style={styles.termsText}> do Airbnb.</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
