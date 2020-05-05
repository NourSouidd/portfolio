class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    @contact = contact
    mail(
      from:     @contact.email,
      to:       'noursouidd@gmail.com',
      subject:  "Message from #{@contact.name}",
      body:     @contact.content
    )
  end
end
