const emailHtml = (name, id) => {
  return `
  <div  style="width: 80%;margin:auto;box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;" >

  <h1 style="margin: 0.25rem;padding:0.5rem" > Hello, ${name}</h1>

  <div  style="margin: 0.25rem;padding:0.5rem" >
      This is the confirmation link to confirm your email address with the Vaibhav's App 
      if you don't visited the Vaibhav's site than ignore this mail and do not share this link.
  </div>
  <div style="margin: 0.25rem;padding:0.5rem" >
      For the confirm the mail please  click on the confirm button below if its not work than 
      use the link below.
  </div>

  <button style="margin: 1rem auto;padding:1rem;border: 2px solid #820000; background-color:#fff;border-radius:0.5rem;" > <a style="text-decoration:none;color:#820000; " href="http://localhost:5060/portfolio/api/confirm/${id}">Confirm</a> </button>
  
</div>
`;
};

export default emailHtml;
