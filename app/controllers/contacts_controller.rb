class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      @contact.save
      ContactMailer.contact_mail(@contact).deliver_now
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :content)
  end
end
