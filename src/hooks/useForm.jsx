import { useState } from 'react'

const useForm = (initialData, onValidate) => {
    const [form, setForm ] = useState(initialData);
    const [loading, setLoading ] = useState(false)
    const [errors, setErrors] = useState()

    const handleChange = (event) => {
        const {name, value } = event.target
        setForm({ ...form, [name]: value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = onValidate(form) //Creamos una nueva constante 
        //Va a recibir lo que el form retorne
        // Si la respuesta es null, no contiene errores, se envía el formularío
        if (err === null){
            console.log('El formulario esta siendo envíado')
        } else { //Si es diferente de null, existen errores y seteamos nuestra variable de estado con esos errores
            setErrors(err)
        }
    }

    return {form, errors, loading, handleChange, handleSubmit}
}

export default useForm

