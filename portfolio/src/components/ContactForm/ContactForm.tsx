import emailjs from '@emailjs/browser';
import './ContactForm.scss';
import { useRef, useState } from 'react';

function ContactForm() {
  const [isSent, setIsSent] = useState('hidden');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'default_service',
          'template_ju2m37b',
          form.current,
          '407a877HTMapUa2tu'
        )
        .then(
          () => {
            setIsSent('success');
            if (form.current) form.current.reset();
          },
          () => {
            setIsSent('error');
          }
        );
    }
  };
  return (
    <div className="contact">
      <div className={`message message--${isSent}`}>
        <i className="bx bx-info-circle" />
        <p>
          {isSent === 'success'
            ? 'votre message à bien été envoyé !'
            : "une erreur est survenue lors de l'envoie du formulaire"}
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSent('hidden');
          }}
        >
          <i className="bx bx-x" />
        </button>
      </div>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="firstname">Indiquez votre prénom</label>
          <input
            type="text"
            placeholder="prénom"
            name="firstname"
            id="firstname"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Indiquez votre nom de famille</label>
          <input
            type="text"
            placeholder="nom"
            name="lastname"
            id="lastname"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Indiquez votre adresse e-mail</label>
          <input
            type="email"
            placeholder="prénom@mail.com"
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="content">Que souhaitez vous dire ?</label>
          <textarea
            name="content"
            placeholder="mon message"
            id="content"
            cols={30}
            rows={10}
            required
          />
        </div>
        <button type="submit">Envoyer mon message</button>
      </form>
    </div>
  );
}

export default ContactForm;
