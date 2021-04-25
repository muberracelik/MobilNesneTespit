MOBİL_NESNE_TESPİT 	Version 1.0	03/01/2021

			MOBİL UYGULAMA İLE NESNE TESPİTİ PROJESİ

PROJE TANIMI:
--------------------------------------------------------------------------------------
	Amacımız mobil uygulamadan alınan görüntüyü API aracılığı ile cloud ortamındaki
sunucumuza gönderip, sunucuda çalışan nesne tespit scripti aracılığı ile işledikten sonra
response olarak tekrar mobil uygulamada kullanıcıya sunmaktır.
--------------------------------------------------------------------------------------

GELİŞTİRME ORTAMI:
--------------------------------------------------------------------------------------
	Proje Windows platformunda JavaScript temelli React-Native teknolojisi kullanılarak
yazılmıştır.
--------------------------------------------------------------------------------------

KULLANIM NOTLARI:
--------------------------------------------------------------------------------------
					--GEREKSİNİMER--
*	NodeJS
*	NPM
*	Java ( Android geliştirme için )
*	XCode ( iOS geliştirme için, windows üzerinde gerekli değil )
*	Python ( windows üzerinde gerekiyor )
*	React Native Cli ( NPM üzerinden kuruluyor )
*	Android Studio
*	Android SDK ( Android Studio yardımı ile kuruluyor )
ref: https://medium.com/@mehmetyilmaz0/react-native-kurulumu-windows-d2547300a8e3

					 --HAZIRLIK--
0-	Proje zip dosyası herhangi bir dizine çıkartılır.
1-	Dizinde konsol üzerinden npm install komutu kullanılır
2-	Arka planda metro sunucusu çalıştırılır => npm start
3-	Daha sonra bilgisayara bağlı herhangi bir adb cihazı veyahut
sanal cihaz üzerinden react-native run-<platform> komutu çalıştırılır ve uygulama
mobil yada sanal cihaza yüklenir.									
									
					--KULLANIM--
4-	Mobil cihazda çalışan uygulama üzerinde seçenek ekranı karşımıza çıkar.
5.1-	Kameradan görüntü alıp nesne tespiti.
5.2-	Galeriden görüntü alıp nesne tespiti.
6-	Kullanıcı seçimini yaptıktan sonra fotoğrafı çeker veya seçer.
7-	Kullanıcının karşısına nesnelerin tespit edildiği fotoğraf çıkar.
---------------------------------------------------------------------------------------


Müberra ÇELİK - muberraceliik@gmail.com
Taha Batuhan TÜRK - tbturkk@gmail.com