import React from "react";
import Home from "../app/screens/Home"
import AddPatientScreen from "../app/screens/patients/addPatient"
import EditPatientScreen from "../app/screens/patients/editPatient"
import PatientLists from "../app/screens/patients/patientLists"
import PatientDetails from "../app/screens/patients/patientDetails"
import AddPatientsRecord from "../app/screens/patients-records/AddPatientsRecord"
import EditPatientsRecord from "../app/screens/patients-records/EditPatientsRecord"
import {render, fireEvent} from "@testing-library/react-native"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/*
* Home and patients Screen
*/
describe(Home, ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home></Home>);
    });
    it('should render home components in home screen', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})

describe(Home, ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home></Home>);
    });
    it('should render home components in home screen', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})

describe(PatientLists, ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PatientLists></PatientLists>);
    });
    it('should render PatientLists components in add patient list screen', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})

describe(PatientDetails, ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<PatientLists></PatientLists>);
    });
    it('should render PatientDetails components in add patient details screen', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})

describe(AddPatientScreen, ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AddPatientScreen></AddPatientScreen>);
    });
    it('should render AddPatientScreen components in add patient screen', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})

describe(EditPatientScreen, ()=>{
    let wrapper;
    beforeEach(() => {
        const mockedParams = {
            route: { params: { 
                first_name: 'Niraj',
                last_name: 'Nepal',
                address: '38 Balaclava Drive',
                date_of_birth: '1996-05-08',
                department: 'icu',
                doctor: 'Hugh Laurie'
            } },
          };
        wrapper = shallow(<EditPatientScreen {...mockedParams}></EditPatientScreen>);
    });
    it('should render EditPatientScreen components in Edit patient screen to have props', function(){
        expect(wrapper.exists()).toBeTruthy;        
    }) 
})


/*
* Patient Records Screen
*/
describe(AddPatientsRecord, ()=>{
    let wrapper;
    beforeEach(() => {
        const mockedParams = {
            route: { params: { 
                user_id: "648673646cnd55f"
            } },
          };
        wrapper = shallow(<AddPatientsRecord {...mockedParams}></AddPatientsRecord>);
    });
    it('should render AddPatientRecordScreen components in add patient record screen with user_id props', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})

/*
* Patient Records Screen
*/
describe(EditPatientsRecord, ()=>{
    let wrapper;
    beforeEach(() => {
        const mockedParams = {
            route: { params: { 
                date: "2020-05-10"
            } },
            navigation: ''
          };
        wrapper = shallow(<EditPatientsRecord {...mockedParams}></EditPatientsRecord>);
    });
    it('should render AddPatientRecordScreen components in add patient record screen with user_id props', function(){
        expect(wrapper.exists()).toBeTruthy();        
    }) 
})