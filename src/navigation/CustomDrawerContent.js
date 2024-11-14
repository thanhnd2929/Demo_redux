import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            {/* Phần header với ảnh và tên */}
            <View style={styles.headerContainer}>
                <Image
                    source={require('../images/logo01.png')}
                    style={styles.avatar}
                />
                <Text style={styles.appName}>LDMS</Text>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 120}}>
                    <Icon name="close" size={24} color="#1D50C9" />
                </TouchableOpacity>

            </View>


            <DrawerItem
                label="FPT IS"
                icon={() => (
                    <Image
                        source={require('../images/file-folder.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('Folder')}
            />

            <DrawerItem
                label="Trang Chủ"
                icon={() => (
                    <Image
                        source={require('../images/home-icon.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('Home')}
            />

            <DrawerItem
                label="Xem xét tài liệu"
                icon={() => (
                    <Image
                        source={require('../images/review-doc-icon.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('SeeDocs')}
            />

            <DrawerItem
                label="Phê duyệt tài liệu"
                icon={() => (
                    <Image
                        source={require('../images/approved-icon.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('Review')}
            />

            <DrawerItem
                label="Ban hành tài liệu"
                icon={() => (
                    <Image
                        source={require('../images/release-icon.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('Release')}
            />

            <DrawerItem
                label="Xử lý tài liệu Econtract"
                icon={() => (
                    <Image
                        source={require('../images/econtract.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('Econtract')}
            />

            <Text style={{ fontSize: 12, fontWeight: '500', marginVertical: 10, marginLeft: 16 }}>CÁ NHÂN</Text>

            <DrawerItem
                label="Tài liệu của tôi"
                icon={() => (
                    <Image
                        source={require('../images/my-document-icon.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('MyDoc')}
            />

            <DrawerItem
                label="Đổi mật khẩu"
                icon={() => (
                    <Image
                        source={require('../images/reset-password.png')}
                        style={styles.itemIcon}
                    />
                )}
                onPress={() => navigation.navigate('Pass')}
            />

        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 40,
        resizeMode: 'contain',

    },
    appName: {
        color: '#1D50C9',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomDrawerContent;
