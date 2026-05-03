import { useState } from "react";

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSuccess(false);
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = onValidate(form); //Creamos una nueva constante
        setErrors(err);

        console.log('El formulario tiene: ' + Object.keys(err).length + ' errores');
        //Va a recibir lo que el form retorne
        // Si la respuesta es null, no contiene errores, se envía el formularío
        if (Object.keys(err).length === 0) {
            setSuccess(false);
            setLoading(true);
            fetch("https://formsubmit.co/ajax/pizarrofranco25@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    data.success === "true" && setForm(initialData);
                    setSuccess(data.success === "true");
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setSuccess(false);
                    setLoading(false);
                });
        }
    };

    return { form, errors, loading, success, handleChange, handleSubmit };
};

export default useForm;
