"use server"

import React from 'react'
import { Resend } from "resend"
import { validateData, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)
export const sendEmail = async (formData: FormData) => {

    const emailFrom = formData.get('emailFrom')
    const message = formData.get('message')

    if (!validateData(emailFrom, 320)) {
        return{
            error: 'Invalid e-mail'
        }
    }

    if (!validateData(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }

try {
    await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: "lukeeplr@gmail.com",
        subject: "Contato via formulário",
        reply_to: emailFrom as string,
        react: React.createElement(ContactFormEmail, {
            message: message as string,
            emailFrom: emailFrom as string
        })
    })
} catch (error: unknown) {
    return {
        error: getErrorMessage(error)
    }
}
    return
  }