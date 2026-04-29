import useForm from "../hooks/useForm"
import Aurora from "../components/Aurora"

export function Contact(  ) {
    
    const initialData = {
        name : '',
        email : '',
        subject : '',
        message : '',
    }
    
    const onValidate = (form) => {
        let isError = false
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;

        
        if(!form.nombre.trim()){
            errors.nombre = 'El campo "Nombre" no debe ser vacío.'
            isError = true
        } else if (!regexName.test(form.nombre)){
            errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.'
            isError = true
        }

        if(!form.email.trim()){
            errors.email = 'El campo "Email" no debe ser vacío.'
            isError = true
        } else if (!regexEmail.test(form.email)){
            errors.email = 'El campo "Email" solo acepta letras y espacios.'
            isError = true
        }

        if(!form.subject.trim()){
            errors.subject = 'El campo "Asunto" no debe ser vacío.'
            isError = true
        } else if (!regexName.test(form.subject)){
            errors.subject = 'El campo "Asunto" solo acepta letras y espacios.'
            isError = true
        }

        if(!form.message.trim()){
            errors.message = 'El campo "Mensaje" no debe ser vacío.'
            isError = true
        } else if (!regexComments.test(form.message)){
            errors.message = 'El campo "Mensaje" solo acepta 255 caracteres.'
            isError = true
        }

        return isError ? errors : null
    }

    const {form, errors, loading, handleSubmit, handleChange } = useForm(initialData, onValidate)
    
    return (
        <>
            {/* <!-- Main Content Area --> */}
            <main className="relative grow bg-[#120F17] flex flex-col items-center justify-center px-6 pt-24 pb-16">
                {/* Aurora Background */}
                <div className="absolute inset-0 z-0">
                    <Aurora colorStops={['#135bec', '#6174b4', '#135bec']} amplitude={1} blend={0.3} />
                </div>
                {/* Content */}
                <div className="relative z-10 w-full max-w-xl bg-content-light rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-12 border border-border-light">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-text-light-primary mb-3">Get in Touch</h1>
                        <p className="text-secondary leading-relaxed max-w-md mx-auto">
                            Have questions about our job board or need technical support? Drop us a message below.
                        </p>
                    </div>

                    {/* form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* <!-- Name & Email Row --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wide text-text-light-primary block" htmlFor='name'>Name</label>
                                <input required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-secondary-fixed-dim" id={form.name} name='name' placeholder="Alex Rivera" type="text" />
                                {errors.nombre && <div className="py-1 px-1 bg-alert border-l border-l-alert-second">
                                    <p className="text-alert-second text-xs font-bold tracking-tight">{errors.nombre}</p>
                                </div>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-wide text-text-light-primary block" htmlFor='email'>Email</label>
                                <input value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-secondary-fixed-dim" id={form.email} name='email' placeholder="alex@devjobs.io" type="email" />
                                {errors.email && <div className="py-1 px-1 bg-alert border-l border-l-alert-second">
                                    <p className="text-alert-second text-xs font-bold tracking-tight">{errors.email}</p>
                                </div>}
                            </div>
                        </div>
                        {/* <!-- Subject --> */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-wide text-text-light-primary block" htmlFor='subject'>Subject</label>
                            <input value={form.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-secondary-fixed-dim" id={form.subject} name='subject' placeholder="How can we help?" type="text" />
                            {errors.subject && <div className="py-1 px-1 bg-alert border-l border-l-alert-second">
                                    <p className="text-alert-second text-xs font-bold tracking-tight">{errors.subject}</p>
                            </div> }
                        </div>
                        {/* <!-- Message --> */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold tracking-wide text-text-light-primary block" htmlFor='message'>Message</label>
                            <textarea value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-secondary-fixed-dim resize-none" id={form.message} name='message' placeholder="Tell us more about your inquiry..." rows="5"></textarea>
                            {errors.message && <div className="py-1 px-1 bg-alert border-l border-l-alert-second">
                                <p className="text-alert-second text-xs font-bold tracking-tight">{errors.message}</p>
                            </div>}
                        </div>
                        {/* <!-- Submit Button --> */}
                        <button className="w-full bg-primary text-content-light py-4 rounded-lg font-bold tracking-wide hover:bg-primary/95 transition-all scale-95 active:opacity-80 flex items-center justify-center gap-2" type="submit">
                            Send Message
                            <span className="material-symbols-outlined text-lg" data-icon="send">send</span>
                        </button>
                    </form>

                    {/* <!-- Support Info --> */}
                    <div className="mt-10 pt-8 border-t border-outline flex flex-col md:flex-row items-center justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2 text-secondary">
                            <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                            <span>support@devjobs.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondary">
                            <span className="material-symbols-outlined text-primary" data-icon="chat_bubble">chat_bubble</span>
                            <span>Live Chat (9am - 5pm EST)</span>
                        </div>
                    </div>
                </div>
                {/* <!-- Subtle Branding Element --> */}
                <div className="relative z-10 mt-12 opacity-50 select-none pointer-events-none">
                    <span className="text-6xl font-black tracking-tighter text-white">DevJobs.</span>
                </div>
            </main>
        </>
    )
}