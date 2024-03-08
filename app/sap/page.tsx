import ContactForm from "../components/contact_form";
import SapBanner from "./SapBanner";
import WhyAws from "./WhyAws";
import WhySapUS from "./WhySapUS";
import Migrate from "./migrate";

 

export default function Sap() {
    return (
<div >

<SapBanner></SapBanner>

<div className="p-12">
<WhySapUS></WhySapUS>
<WhyAws></WhyAws>
<Migrate></Migrate>
<ContactForm></ContactForm>
</div>

 
</div> //parent div 
    );
  }