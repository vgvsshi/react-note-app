import React, { useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Loader } from '../components/Loader'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { AlertContext } from '../context/alert/alertContext'

export const Home = () => {

	const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
	const alert = useContext(AlertContext)

	useEffect(() => {
		fetchNotes()
		// eslint-disable-next-line
	}, [])

	const omRemove = (id) => {
		removeNote(id).then(() => {
			alert.show('Заметка была удалена', 'secondary')
		})
	}

	return (
		<>
			<Form />
			<hr />
			{
				loading
					? <Loader />
					: <Notes notes={notes} onRemove={omRemove} />
			}
		</>
	)
}