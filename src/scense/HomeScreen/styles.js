import {StyleSheet} from 'react-native';
import {defaultColor} from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  imageHeader: {
    width: 50,
    height: 50,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 50,
    height: 50,
    backgroundColor: defaultColor.addButton,
    elevation: 20,
  },
  iconAdd: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  bodyDetail: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  textProgress: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  taskNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultColor.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelTask: {
    alignSelf: 'center',
    marginHorizontal: 10,
    color: 'gray',
  },
  label: {
    marginHorizontal: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },

  //list style
  labelTaskNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  labelText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  containerList: {
    flex: 1,
  },

  //style item
  containerItem: {
    justifyContent:'flex-start',
    width: 340,
    // marginHorizontal:10,
    borderWidth: 1,
    marginBottom: 20,
    // padding:10,
    borderRadius: 20,
  },
  labelItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  decsItem: {
    fontSize: 14,
  },

  button: {
    flex: 1,

  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flex:1
  },

  //add task
  labelAdd:{
    alignSelf:"center",
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    // borderBottomWidth:1,
    // borderBottomColor: 'white'
  },
  containerBodyAdd:{
    marginTop:20,
  },
  buttonAddTask:{
    width: 200,
    height:50,
    margin: 40,
    alignSelf:'center',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
  }
});
