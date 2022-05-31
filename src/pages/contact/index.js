import PageTitle from "../../components/pageTitle";

export default function ContactPage() {
  
    return (
      <div className="w-full h-full">
          <PageTitle text="CONTACT ME"/>
          <input type="email" name="email" value="Please enter your email"/>
          <input type="textbox" name="textarea" value="Please enter your message here" />
      </div>
    );
  }