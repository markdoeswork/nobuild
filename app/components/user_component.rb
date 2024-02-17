# frozen_string_literal: true

class UserComponent < ViewComponent::Base
  def initialize(name:, age:)
    @name = name
    @age = age
  end

end
