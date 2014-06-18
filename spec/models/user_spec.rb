# require 'rails_helper'

describe User do
  it "has a valid factory" do
    expect(FactoryGirl.create(:user, email: "myemail@email.com", password: "hashedM3")).to be_valid
  end
end