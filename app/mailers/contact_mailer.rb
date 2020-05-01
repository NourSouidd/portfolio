class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    mail(
      from:     contact.email,
      to:       RECIPIENT_EMAIL,
      subject:  "Message from #{contact.name}",
      body:     contact.message
    )
  end
end
