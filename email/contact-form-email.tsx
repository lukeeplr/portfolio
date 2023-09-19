import React from 'react'
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'


type ContactFormProps = {
    message: string
    emailFrom: string
}
export default function ContactFormEmail({message, emailFrom}: ContactFormProps) {
  return (
    <Html>
        <Head />
        <Preview>Novo e-mail recebido no portfolio</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border-black/10 my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>Nova mensagem recebida no formulário de contato</Heading>
                        <Text>Remetente: {emailFrom}</Text>
                        <Hr/>
                        <Text>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
