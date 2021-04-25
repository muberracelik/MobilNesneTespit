import React, {
    useState
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob'
import RNFS from 'react-native-fs';

export default function App() {

    const [imageURL, setImageURL] = useState('');

    // Kamera fonksiyonu
    cameraLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (res) => {
            if (res.didCancel) {
                console.log('Kullanıcı resim çekmeyi iptal etti');
            } else if (res.error) {
                console.log('ImagePicker Hatası ', res.error);
            } else if (res.customButton) {
                console.log('Kullanıcı resmi gönderdi', res.customButton);
            } else {
                const source = {
                    uri: res.uri
                };
                console.log(res.uri);
                var formData = new FormData();
                formData.append('images', {
                    uri: res.uri,
                    name: 'photo.jpg',
                    type: 'image/jpg'
                });
                fetch("http://35.207.134.106:80/image", {
                    method: 'POST',
                    body: formData,
                }).then(response => {
                    response.blob().then(blob => {
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = function() {
                            var base64data = reader.result;
                            const base64Code = base64data.split("data:application/octet-stream;base64,")[1];
                            const dirs = RNFetchBlob.fs.dirs;
                            var path = dirs.DCIMDir + "/cikti.jpg";
                            setImageURL(base64Code);
                            RNFetchBlob.fs.writeFile(path, base64Code, 'base64')
                                .then((res) => {
                                    console.log("File : ", res)
                                });
                        }
                    })
                });
            }
        });
    }

    // Galeri fonksiyonu
    imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (res) => {
            if (res.didCancel) {
                console.log('Kullanıcı image pickerdan çıktı');
            } else if (res.error) {
                console.log('ImagePicker Hatası: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped resmi seçti: ', res.customButton);
            } else {
                const source = {
                    uri: res.uri
                };
                console.log(res.uri);
                var formData = new FormData();
                formData.append('images', {
                    uri: res.uri,
                    name: 'photo.jpg',
                    type: 'image/jpg'
                });

                fetch("http://35.207.134.106:80/image", {
                    method: 'POST',
                    body: formData,
                }).then(response => {
                    response.blob().then(blob => {
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = function() {
                            var base64data = reader.result;
                            const base64Code = base64data.split("data:application/octet-stream;base64,")[1];
                            const dirs = RNFetchBlob.fs.dirs;
                            setImageURL(base64Code);
                            var path = dirs.DCIMDir + "/cikti.jpg";
                            RNFetchBlob.fs.writeFile(path, base64Code, 'base64')
                                .then((res) => {
                                    console.log("File : ", res)
                                });

                        }
                    })
                });
            }
        });
    }


    return (
        <View style={styles.container}>
                <View style={styles.container}>
                    {imageURL === '' ?
                        (
                            <Text style={styles.welcomeText}>OBJE TESPİT</Text>
                        ):
                        (
                            <Image source = {{uri: `data:image/jpg;base64,${imageURL}`}}
                            style = {{ width: '100%',
                                           height: '70%',
                                           aspectRatio: 1,resizeMode: 'contain', marginBottom:20}}/>
                        )
                    }


                  <TouchableOpacity onPress={cameraLaunch} style={styles.button}  >
                      <Text style={styles.buttonText}>Kamera</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}  >
                      <Text style={styles.buttonText}>Galeri</Text>
                  </TouchableOpacity>
                </View>
              </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  welcomeText: {
      textAlign: 'center',
      fontSize: 40,
      color: '#79e',
      marginBottom:50
    }
});