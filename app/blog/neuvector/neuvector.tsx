import React from 'react'

const Neuvector = () => {
  return (
    <div className="p-12">
    <h1 className="text-6xl font-black mb-10">Neuvector</h1>
    <p className="text-2xl  my-6">
    End-to-end solution for container network security
    NeuVector is the only 100% open source, Zero Trust container security platform. Continuously scan throughout the container lifecycle,  remove security roadblocks, & bake in security policies at the start to maximize developer agility.
    NeuVector is the only Kubernetes-native container security platform that delivers complete container security.
    </p>





    <div className="grid grid-cols-3 gap-10">

        <div>
            <h2 className="text-2xl font-black">CI/CD Automated Scanning</h2>
            NeuVector supports two types of build-phase scanning: registry and local.
        </div>

        <div>
            <h2 className="text-2xl font-black">NeuVector CRD for Policy As Code</h2>
            NeuVector custom resource definitions (CRDs) can be used by various teams to automatically define security policies in the NeuVector container security platform. Developers, DevOps, DevSecOps, and Security teams can collaborate to automate security policies for new or updated applications deployed to production. CRDs can also be used to enforce global security policies across multiple Kubernetes clusters.
 
        </div>


        <div>
            <h2 className="text-2xl font-black">NeuVector Modes</h2>
            The NeuVector Violation Detection module has three modes: Discover, Monitor, and Protect.
        </div>

        <div>
            <h2 className="text-2xl font-black">Scanning & Compliance</h2>
            NeuVector enables full lifecycle scanning & compliance through vulnerability scanning and running of the CIS benchmarks for security, as well as custom compliance checks. 
        </div>

        <div>
            <h2 className="text-2xl font-black">Network Segmentation and Threats</h2>
            Using the container firewall network rules, egress controls, and threat detection
       </div>

       <div>
            <h2 className="text-2xl font-black">Enterprise Authentication & SSO</h2>
            LDAP, Active Directory, SAML, OpenID, Okta integration


       </div>

       <div>
            <h2 className="text-2xl font-black">Zero Trust </h2>
            Integrate zero trust security across all your containerized workflows to ensure your applications are protected from evolving threats.
            NeuVector’s runtime security ensures that only authorized processes and network connections are permitted within the containerized environment, further enhancing the security of your Kubernetes deployments.
       </div>


       <div>
            <h2 className="text-2xl font-black">Container Segmentation</h2>
            Essential for PCI compliance and many financial organizations, NeuVector’s container segmentation capability creates a virtual wall to keep personal and private information securely isolated on your network.
       </div>

       <div>
            <h2 className="text-2xl font-black"> Deliver real-time protection with the industry’s only Container Firewall</h2>
            NeuVector delivers highly integrated, automated security and is the only next generation container firewall with packet-level interrogation and enforcement. 
            NeuVector’s container firewall provides inspection, segmentation, and protection of all traffic into and out of a container. This includes container to container traffic as well as ingress from external sources to containers, and egress from containers to external applications and the internet. Our Layer 7 container firewall protects your applications from internal application level attacks such as DDoS and DNS. 
            detects threats such as SQL injection, DDoS, DNS attacks and other application layer attacks by inspecting the payload even for trusted connections.
       </div>



       <div>
            <h2 className="text-2xl font-black">Automated network segmentation:</h2>
            behavioral learning to discover the connections and
             application protocols used between services and automatically creates whitelist rules to isolate them.
       </div>

       <div>
            <h2 className="text-2xl font-black">Deep Packet Inspection </h2>
            NeuVector applies DPI to identify attacks, detect sensitive data, or verify application access to further reduce the attack surface. Only network layer analysis enables security to detect and verify the allowed protocols, helping security teams enforce business policy. 

            DPI examines the contents of data packets using specific rules preprogrammed by the user, an administrator, or an internet service provider (ISP). Then, it decides how to handle the threats it discovers. Not only can DPI identify the existence of threats but, using the contents of the packet and its header, it can also figure out where it came from.
             In this way, DPI can pinpoint the application or service that launched the threat. 
       </div>
       <div>
            <h2 className="text-2xl font-black">Monitor ‘East-west’ and ‘North-south’ container traffic</h2>
            icroservices and containers dramatically increase internal East-West traffic in a data center. Without application-aware container network security, an attacker can exploit containers once inside a data center. NeuVector detects and displays real-time connection info for all container traffic, internal, ingress and egress. 
       
       </div>
       <div>
            <h2 className="text-2xl font-black">Auto Capture Packets for Debugging and Threat Investigation</h2>
            NeuVector makes it easy to view summary connection data and drill down into actual packet details for each container, even as they scale up and down. When a threat is detected, NeuVector will automatically
             capture and display the packet info, making it easy to investigate. 

       </div>
       <div>
            <h2 className="text-2xl font-black">FULL SDLC vulnerability Management</h2>
       </div>
       <div>
            <h2 className="text-2xl font-black">Data Loss Prevention (DLP)</h2>
       </div>
       <div>
            <h2 className="text-2xl font-black">WAF Sensors</h2>
            Built in waf sensors like Cross site request forgery (CSRF),Malicious file upload,Reflected cross-site scripting,
            Sensitive data exposure amongst many. 
       </div>
       <div>
            <h2 className="text-2xl font-black">Zero Day Attack Prevention</h2>
       </div>
       <div>
            <h2 className="text-2xl font-black"> Security as Code</h2>
       </div>
       <div>
            <h2 className="text-2xl font-black">Forensic Analysis</h2>
            NeuVector&apos;s forensic analysis feature provides detailed information about container events, including who accessed the container, what was accessed, and when. 
            This information can be used to investigate security incidents and take corrective action.
       </div>
       <div>
            <h2 className="text-2xl font-black">Violation Protection</h2>
            Discovers behavior and creates a whitelist based policy to detect violations of normal behavior.
       </div>
       <div>
            <h2 className="text-2xl font-black">Endpoint/Host Security</h2>
            Detects privilege escalations, monitors processes and file activity on hosts and within containers, and monitors container file systems for suspicious activity.
       </div>
       <div>
            <h2 className="text-2xl font-black">Alerting and Notifications</h2>
            The platform offers real-time alerting and notifications for security incidents and policy violations, enabling timely responses.
       </div>
       <div>
            <h2 className="text-2xl font-black">API Security:</h2>
            NeuVector helps protect container APIs from vulnerabilities and unauthorized access.
       </div>
       <div>
            <h2 className="text-2xl font-black">Container Forensics</h2>
            NeuVector provides forensic analysis capabilities to investigate security incidents, identify root causes, and trace container activities.
       </div>
       <div>
            <h2 className="text-2xl font-black">Microservices Security</h2>
            Organizations can secure individual microservices within their containerized applications, implementing fine-grained access controls and network policies.
       </div>
       <div>
            <h2 className="text-2xl font-black">Incident Response</h2>
            In the event of a security incident, NeuVector provides incident response capabilities, 
            allowing organizations to investigate, contain, and remediate threats.
       </div>
       <div>
            <h2 className="text-2xl font-black"> Anomaly Detection</h2>
            It detects suspicious activities and anomalies within containerized environments, helping organizations identify potential security threats.
       </div>


       <div>
            <h2 className="text-2xl font-black">Runtime Security</h2>
            NeuVector’s runtime security employs behavior-based zero-trust security policies. These policies provide an additional layer of security that remains effective even when vulnerabilities are unidentified or lack patches. Notably, NeuVector holds nine United States Patents for its innovative network-centric network inspection and its ability to enforce network policies in Kubernetes without relying on side-cars, agents, or IPTables manipulation.
       </div>
   
    </div>
  </div>
  )
}

export default Neuvector