require "test_helper"

class WhatControllerTest < ActionDispatch::IntegrationTest
  test "should get if_o" do
    get what_if_o_url
    assert_response :success
  end
end
