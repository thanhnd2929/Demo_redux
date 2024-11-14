import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action/AuthAction';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigation = useNavigation()

    const auth = useSelector(state => state.auth);
    const loading = useSelector(state => state.auth.status);
    const user  = useSelector(state => state.auth.userData);

    console.log("user: ", user);



    const handleLogin = async () => {
        await dispatch(login({ username: userName, password: password }));

    };

    useEffect(() => {
        // Chuyển hướng khi đăng nhập thành công
        if (auth.statusCode === 200) {
            navigation.navigate('Home');
        }
    }, [auth.statusCode, navigation]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/signin-image.jpg')}
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>Đăng Nhập</Text>
                <Text style={styles.appName}>LDMS</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Tài khoản"
                placeholderTextColor="#828282"
                value={userName}
                onChangeText={value => setUserName(value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Mật Khẩu"
                placeholderTextColor="#828282"
                value={password}
                onChangeText={value => setPassword(value)}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.loginButton}
                onPress={
                    handleLogin
                }
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.loginButtonText}>Login</Text>
                )}
            </TouchableOpacity>


            {auth.statusCode && auth.statusCode !== 200 && (
                <Text style={styles.errorText}>{auth.message}</Text>
            )}

            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>


        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        marginTop: 80,
        resizeMode: 'contain',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginLeft: 14,
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    appName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#1D50C9',
        borderRadius: 10,
        marginLeft: 10,
    },
    input: {
        height: 48,
        width: 340,
        marginVertical: 12,
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 8,
        borderColor: '#d3d3d3',
        elevation: 3,
        alignSelf: 'center',
    },
    loginButton: {
        alignSelf: 'flex-start',
        width: 150,
        height: 46,
        backgroundColor: '#1D50C9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        marginHorizontal: 30,
        marginVertical: 20,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#fff',
    },
    forgotPassword: {
        color: '#000',
        marginTop: 10,
        marginHorizontal: 30,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    errorText: {
        color: '#dc3545',
        marginTop: 10,
        marginHorizontal: 30,
        fontSize: 16,
    },
    succesText: {
        color: '#28a745',
        marginTop: 10,
        marginHorizontal: 30,
        fontSize: 16,
    }
});
