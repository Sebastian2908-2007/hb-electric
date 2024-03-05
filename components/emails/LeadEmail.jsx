import { Section } from "@react-email/section";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Heading } from '@react-email/heading';
import { Container } from '@react-email/container';
import { Text } from '@react-email/text';
import { Html } from "@react-email/html";




import * as React from "react";


export default function LeadEmail({email, name,phone,description}) {
    console.log(email, name,phone,description,'EMAIL DATA in email+');
  return (
    <Html lang="en" dir="ltr">
      <Container
        style={{background: "#FFFFFF", color: "#fde1e2"}}
      >
       <Heading as="h1" style={{background: "#164775", color: "#FFFFFF",padding:'1%', borderRadius:'10px',textAlign:'center'}}>
       New Lead&nbsp;{name}
       </Heading>
       <Heading as="h2" style={{ color: "#b46f40", padding:'3%',textAlign:'center',fontWeight:'bolder'}}>{name}'s email address:&nbsp;{email}</Heading>
       <Section style={{padding:"10%"}}>
      <Row>
        <Column><Heading as="h3" style={{ color: "#b46f40", padding:'3%',textAlign:'center',fontWeight:'bolder'}}>{name}'s phone number:&nbsp;{phone}</Heading></Column>
      </Row>
      <Row>
        <Column><Text style={{ color: "#b46f40", padding:'3%',textAlign:'center',fontWeight:'bolder'}}>:{name}'s project description:&nbsp;{description}</Text></Column>
      </Row>
    </Section>
      </Container>
    </Html>
  );
};