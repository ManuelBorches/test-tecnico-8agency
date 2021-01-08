import React, { useState } from 'react'
import AttendeeForm from './AttendeeForm'
import succesModal from './utils/successModal'

  
export default () => {

  const [attendeeData, setAttendeeData] = useState({ name: '', lastName: '', email: '', country: '', phone: '', jobTitle: ''})
  
  const handleChange = (event) => {
    let obj = {}
    obj[event.target.id] = event.target.value
    setAttendeeData({...attendeeData, ...obj})
  }

  const handleSubmit = () => {
	succesModal()
	// FETCHING DATA FROM LOCALSTORAGE ↓
	let attendees = JSON.parse(localStorage.getItem('attendees'))
	attendees ? attendees = [...attendees, attendeeData] : attendees = [attendeeData]

    // SAVING THE DATA IN LOCALSTORAGE ↓
    localStorage.setItem('attendees' , JSON.stringify(attendees))

	// CLEARING THE DATA ↓
    setAttendeeData({ name: '', lastName: '', email: '', country: '', phone: '', jobTitle: ''})
  }

	return (
        <AttendeeForm attendeeData={attendeeData} setAttendeeData={setAttendeeData} handleChange={handleChange} handleSubmit={handleSubmit} />
	)
}
