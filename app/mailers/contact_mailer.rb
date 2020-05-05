class ContactMailer < ApplicationMailer

  def contact_mail(contact)
    @contact = contact
    mail(
      to:       ENV['RECEIVER_ADDRESS'],
      subject:  "Message from #{@contact.name} email: #{@contact.email}",
      body:     @contact.content
    )
  end
end
