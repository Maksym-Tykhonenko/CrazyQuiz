import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ConfettiCannon from 'react-native-confetti-cannon';

const RulseScreen = ({navigation}) => {
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <ScrollView style={{marginHorizontal: 10, marginTop: 50}}>
            <Animated.View style={{opacity: appearingAnim}}>
              <Text
                style={{color: '#d8ab45', fontWeight: 'bold', fontSize: 22}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                ut felis ex. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Nullam sed libero vel
                mauris fermentum fermentum. Aliquam et diam eget purus accumsan
                tristique non sit amet erat. Duis congue ex a libero commodo,
                vitae tincidunt felis posuere. Nullam vel justo a magna aliquam
                laoreet a at elit. Cras a elit eget velit fermentum euismod non
                non odio. Sed sollicitudin varius massa, ac congue nisi varius
                a. Donec semper velit vel magna tincidunt vehicula. Integer
                venenatis enim at lacus cursus, vel consectetur nulla tristique.
                Nulla et pulvinar est. In hac habitasse platea dictumst. Etiam
                elementum justo id dictum placerat. Mauris consequat, dui vitae
                ultricies venenatis, metus nisi vulputate lacus, vel ultricies
                neque leo vel nibh. Integer efficitur metus eu lorem rhoncus,
                nec aliquam orci dictum. Nam posuere, lectus nec fringilla
                efficitur, sem sem cursus odio, sit amet tincidunt nisi purus et
                ex. Mauris faucibus metus ut est efficitur eleifend. Nulla
                facilisi. Suspendisse eu urna nec urna vehicula sollicitudin vel
                a elit. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Ut placerat libero eget
                mauris fermentum eleifend. Curabitur mollis orci eu augue
                vulputate, nec fermentum quam aliquet. Mauris sit amet quam sed
                arcu gravida ultricies. Nulla facilisi. Sed vehicula nisi et
                quam efficitur, nec auctor nisl dapibus. Donec ultricies ligula
                non ligula malesuada, ut gravida purus efficitur. Sed lobortis
                aliquam enim, eu malesuada turpis commodo nec. Nam nec efficitur
                dui. Suspendisse potenti. Donec varius suscipit tristique.
                Vestibulum nec justo ut metus eleifend suscipit vel nec libero.
                Suspendisse commodo augue vitae risus cursus, nec dictum libero
                tempor. Integer sit amet justo vel nulla dictum efficitur.
                Nullam at mauris in risus hendrerit lacinia. Nam quis magna quis
                mauris interdum convallis sed non mi. Integer sollicitudin nec
                eros non posuere. Integer efficitur velit ut libero mattis, eget
                ultricies velit consequat. Curabitur in ante at eros viverra
                fringilla. Praesent nec malesuada arcu. Integer semper purus non
                turpis feugiat aliquet. Curabitur fermentum mi nec mi maximus,
                id ullamcorper magna condimentum. Nam maximus arcu euismod
                ligula efficitur, nec scelerisque ex cursus. Sed auctor tellus
                vitae arcu lacinia, et hendrerit turpis efficitur. Duis
                consequat venenatis libero, eget vulputate ex dapibus eu.
                Phasellus sit amet mi in ligula accumsan finibus ac quis sapien.
                Vivamus at justo euismod, dictum nisl id, posuere lectus.
                Vivamus dapibus enim quis odio rhoncus, nec iaculis justo
                pellentesque. Vivamus eget lorem id quam eleifend dictum. Sed
                condimentum tortor non eros condimentum, vitae mattis arcu
                volutpat. In dictum, libero quis auctor condimentum, libero
                purus rhoncus justo, ac eleifend elit sem id mi. Pellentesque in
                tempor odio. Nullam sed enim id sapien lacinia commodo. Cras in
                ante quis enim tempor tristique. Nullam sed tincidunt velit. Sed
                mattis est ut mi facilisis, eget feugiat purus gravida. Sed
                tincidunt fringilla justo, sed congue mauris cursus a. In eget
                leo a risus pharetra malesuada eget in nisi. Vivamus dictum
                sapien non elit consectetur, et ultricies felis laoreet. Nunc
                condimentum tellus eget magna gravida commodo. Cras quis
                convallis enim. Sed vel sem vitae ipsum pretium egestas. Etiam
                nec urna vel purus suscipit vulputate nec nec ipsum. Phasellus
                venenatis nunc ac urna rhoncus, vel efficitur enim laoreet.
                Integer non nunc eget nunc lacinia convallis. Nulla facilisi.
                Nulla non justo vitae orci efficitur volutpat. Sed nec eros nec
                velit iaculis lacinia. Aenean ac nisi vestibulum, rutrum magna
                et, euismod orci. Praesent feugiat gravida libero vel euismod.
                Phasellus non metus eget enim fermentum condimentum. Integer
                fringilla tempor est nec mattis. Morbi suscipit sapien sit amet
                arcu sollicitudin commodo. In consectetur ipsum felis, sit amet
                volutpat dui luctus in. Aliquam eu velit urna. Vivamus eget est
                et lectus tincidunt venenatis. Nam tincidunt fringilla neque,
                nec vehicula nisi laoreet nec. Sed auctor consectetur est, non
                pharetra lectus venenatis non. Sed sem magna, pretium a
                tristique at, aliquet in quam. Donec vel vehicula est. Ut ut dui
                arcu. Sed tincidunt fermentum nisi, non iaculis mi commodo eu.
                Donec fermentum enim id lorem tincidunt, eget dapibus enim
                sodales. Nullam rhoncus orci sed dolor ultrices, a vestibulum
                elit congue. Cras bibendum, ex in dignissim dignissim, magna
                mauris lobortis tortor, sed consequat ipsum elit nec mi.
                Maecenas eleifend neque non est lacinia, ac scelerisque mi
                posuere. Morbi suscipit, tortor vitae vestibulum volutpat, nulla
                leo malesuada velit, non venenatis nisi mi in justo. Aliquam sed
                bibendum dolor. Integer vel semper eros. Nam et lacus non dui
                interdum placerat. Vivamus et pretium turpis. Sed accumsan urna
                eget lectus lobortis tempus. Aliquam congue nisi vitae ante
                elementum, id faucibus lacus suscipit. Curabitur in quam nunc.
                Fusce fringilla, dolor ut varius ultrices, dui metus pharetra
                leo, ut cursus turpis neque ut metus. Proin at neque eu odio
                rhoncus aliquam. Duis varius enim nec libero aliquam, ut
                eleifend quam pellentesque. Integer varius ligula sit amet ipsum
                ultricies, id condimentum elit finibus. Nam
              </Text>
            </Animated.View>
          </ScrollView>

          {/**BTN BACK */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              borderColor: '#d8ab45',
              borderWidth: 3,
              width: 60,
              height: 60,
              //borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(60,11,103,0.7)',
              paddingVertical: 8,
              shadowColor: '#d8ab45',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <FontAwesome
              name="arrow-left"
              style={{
                color: '#d8ab45',
                fontSize: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RulseScreen;
