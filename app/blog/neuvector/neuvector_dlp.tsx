import React from 'react'

const NeuvectorDlp = () => {
  return (
    <div className='p-12'>

        <h1 className='text-6xl font-black my-8'>First and Only Data Loss Prevention (DLP) Solution for Containers</h1>
  
  <p className='text-4xl font-bold my-4'>
  Container DLP capabilities protect sensitive PII and PCI data in container networks across multi-cloud and hybrid cloud environments
  </p>

  <div className='my-6 text-3xl'>
  NeuVector 3.0 now offers the first true data loss/leak prevention solution that can detect personally identifiable information (PII) and other sensitive data within container network flows and prevent potential data breaches. Increasingly stringent industry regulations are forcing businesses to delineate and adhere to more comprehensive procedures for how sensitive data is handled and stored. From enterprises that process and retain payment card data (subject to PCI-DSS compliance) to those doing business with EU citizens (subject to GDPR) and beyond, the stakes – and potential fines – for protecting sensitive data have grown considerably. Container adoption has also swelled, but the highly dynamic nature of container environments has thus far made it challenging for businesses to verify precisely how sensitive data is transmitted from containers.
  </div>



  <div className='my-6 text-3xl'>
  NeuVector’s new container DLP capability leverages deep packet inspection (DPI) and Layer-7 visibility to examine the network payloads for all connections within container and Kubernetes-orchestrated environments. It also detects the flow of sensitive and private data – such as PII and payment card information – within container traffic. The detection works even with service mesh encryption of pod to pod connections by Istio and linkerd2 through an integration announced last month. With this critical addition, NeuVector is the only container network security solution that features packet-level interrogation and enforcement for today’s deployments as well as future service mesh deployments. This container DLP capability is also extensible, offering enterprises the ability to detect any type of network payload for their own applications by using custom application signatures.
  </div>
    </div>
  )
}

export default NeuvectorDlp