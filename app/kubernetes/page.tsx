import KubBanner from "./KubBanner";
import Image from "next/image";
export default function Kubernetes() {
    return (
<div>

 

    <KubBanner></KubBanner>

 
<div className="p-12">


<h1 className="text-4xl font-black mb-8 ">Start your kubernetes journey with us</h1>
    <p>
            Kubernetes operations is more than just running containerized apps; 
            the magic lies in successfully managing all the nuances in your production 
            environment. Our team of CNCF and cloud provider-certified experts bring
             years of hands-on experience and cutting edge know-how to help you smooth
              out service gaps and streamline complexity.


     </p>

     </div>    


 
   <div className="grid grid-cols-2 gap-8 p-12">
    <div className="">
        <h1 className="2xl font-bold ">Expert-level advice on the CNCF landscape

</h1>
        <p >360 Cloud Platform CNCF-certified experts help you simplify the complex landscape of CNCF and navigate between open-source and 
            proprietary software choices to find the best solution based on your goals.</p>
    </div>
    <div className="">
        <h1 className="2xl font-bold ">Technology selection</h1>
        <p >
        Choosing the right technology stack is crucial to your Kubernetes adoption journey. We assist in evaluating and comparing different technologies, engaging with vendors if necessary, and making the right choices
         based on your unique needs and the maturity state of your current platform.
        </p>
    </div>
    <div className="">
        <h1 className="2xl font-bold ">Service Mesh


</h1>
        <p >
            
        Our team at 360 Cloud Platforms can help you select, implement and configure a service mesh solution like Istio, Linkerd, or Consul. We help you efficiently utilize service meshes to manage traffic,
         implement robust security policies, and facilitate observability.
            
            </p>
    </div>
    <div className="">
        <h1 className="2xl font-bold ">Security

</h1>
        <p >
        Security planning starts at the beginning. From the start, we apply best practices in Kubernetes security to protect your workloads. From secret management 
        to network policies, we implement measures to safeguard your environment.

        </p>
    </div>
    <div className="">
        <h1 className="2xl font-bold ">DevSecOps

</h1>
        <p >
        Because security is a continuous concern - not an afterthought - we create secure-by-design infrastructure up front, to minimize vulnerabilities. Our approach includes automating security checks in the deployment process, reinforcing code reviews with security analysis, and ensuring an efficient response to security threats. This proactive, integrated approach minimizes the risk of breaches while maintaining system integrity. The result? Balanced speed, flexibility and risk
         management that safeguards your operations without hindering innovation and growth.

   </p>
    </div>
    <div className="">
        <h1 className="2xl font-bold ">Storage Solutions


</h1>
        <p >
        Managing your data efficiently within Kubernetes means using appropriate storage solutions. From persistent volumes 
        to stateful applications, we ensure your data management is optimal and accessible.</p>
    </div>
   </div>
 
 


</div> //main div 
    );
  }