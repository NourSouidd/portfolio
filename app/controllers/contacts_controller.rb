class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.valid?
      @contact.save
      ContactMailer.contact(@contact).deliver_now
      flash[:notice] = "Your message has been sent. Thank you!"
    else
      flash[:notice] = "Something went wrong"
    end
    redirect_to root_path
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :content)
  end
end
