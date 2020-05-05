class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    mail(
      from:     contact.email,
      to:       'noursouidd@gmail.com',
      subject:  "Message from #{contact.name}",
      body:     contact.content
    )
  end
end
