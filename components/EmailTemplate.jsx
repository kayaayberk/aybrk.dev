function EmailTemplate({ name, email, message }) {
  return (
    <div>
      <h1>
        New message from <b> {name}</b>
      </h1>
      <hr />
      <h4>From the address: {email}</h4>
      <hr />
      <p>Message: {message}</p>
      <p>
        <br />
        <br />
        <br />
        Sent via <b>aybrk.dev</b> contact form.
      </p>
    </div>
  );
}

export default EmailTemplate;
