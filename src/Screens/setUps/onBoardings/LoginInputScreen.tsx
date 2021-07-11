import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../color'
import FacebookIcon from '../../../components/icons/FaceBookIcon'
import GoogleIcon from '../../../components/icons/GoogleIcon'

const LoginInputScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.stepArea}></View>
      <View style={styles.titleArea}>
        <Text style={styles.tilte}>メールアドレスとパスワードを{'\n'}入力して下さい</Text>
      </View>
      <View style={styles.InputArea}>
        <View style={[styles.inputItemArea, styles.inputAreaMargin]}>
          <Text style={styles.inputTitleText}>メールアドレス</Text>
          <TextInput style={styles.inputItemText} placeholder={'example@mail.com'} />
        </View>
        <View style={styles.inputItemArea}>
          <Text style={styles.inputTitleText}>パスワード(半角英数字で8文字以上)</Text>
          <TextInput style={styles.inputItemText} placeholder={'パスワードを入力'} />
        </View>
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>パスワードを忘れた方はこちら</Text>
        </View>
        <View style={styles.loginButtonArea}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>ログインする</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={{ marginHorizontal: 5 }}>または</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.otherMethodArea}>
        <View>
          <TouchableOpacity style={styles.otherMethodButton}>
            <View style={styles.otherMethodButtonItems}>
              <GoogleIcon />
              <Text style={styles.otherMethodText}>Googleでログイン</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.otherMethodButton, { marginTop: 8 }]}>
            <View style={styles.otherMethodButtonItems}>
              <FacebookIcon />
              <Text style={styles.otherMethodText}>Facebookでログイン</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginInputScreen

const styles = StyleSheet.create({
  otherMethodButtonItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    borderBottomColor: Colors.Gray5,
    borderBottomWidth: 1,
    height: 3,
    width: 76
  },
  or: {
    width: 200,
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepArea: {},
  tilte: {
    color: Colors.Gray8,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center'
  },
  titleArea: {
    marginBottom: 35
  },
  InputArea: {
    width: 320
  },
  inputAreaMargin: {
    marginBottom: 32
  },
  inputItemArea: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 48,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  inputTitleText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.Gray7,
    textAlign: 'left',
    width: '100%'
  },
  inputItemText: {
    color: Colors.Gray6,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    marginVertical: 8,
    width: '100%'
  },
  forgotPassword: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: Colors.Secondary,
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 12,
    letterSpacing: 0.12
  },
  loginButtonArea: {
    alignItems: 'center',
    marginTop: 35
  },
  loginButton: {
    width: 230,
    height: 40,
    backgroundColor: Colors.Main,
    justifyContent: 'center',
    borderRadius: 40
  },
  loginButtonText: {
    color: Colors.Gray1,
    fontWeight: '600',
    lineHeight: 24,
    fontSize: 15,
    textAlign: 'center'
  },
  otherMethodArea: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  otherMethodButton: {
    borderColor: Colors.Main,
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: Colors.white,
    width: 230,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  otherMethodText: {
    marginLeft: 16,
    fontWeight: '600',
    lineHeight: 16,
    fontSize: 14,
    color: Colors.Main
  }
})
