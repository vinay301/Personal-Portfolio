import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"


const Contacts = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email:'', message:''});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleFocus = () => {
   
  }

  const handleBlur = () => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name : form.name,
        to_name: "Vinay",
        from_email: form.email,
        to_email: 'vinaysharma.vs743@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false)
      setForm({ name:'', email:'', message:''});
    }).catch((err)=>{
      setIsLoading(false);
      console.log(err);
    })
  }
  return (
   <section className="relative flex lg:flex-row flex-col max-container">
    <div className="flex-1 min-w-[50%] flex flex-col">
      <h1 className="head-text">Get In Touch</h1>

      <form action="" className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
        <label className="text-black-500 font-semibold">Name
        <input type="text" name="name" className="input" placeholder="John doe" required  value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>
        <label className="text-black-500 font-semibold">Email
        <input type="email" name="email" className="input" placeholder="Johndoe@mail.com" required  value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>
        <label className="text-black-500 font-semibold">Your Message
        <textarea name="message" rows={4} className="input" placeholder="Let me know how I can help you!" required  value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        </label>

        <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur}>
        {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
   </section>
  )
}

export default Contacts