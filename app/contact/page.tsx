import ContactForm from "../components/contact_form";
import ContactBanner from "./ContactBanner";
import Image from "next/image";
export default function Kubernetes() {
    return (
 
        <div>
            <ContactBanner></ContactBanner>
            <ContactForm></ContactForm>
        </div>
    );
  }