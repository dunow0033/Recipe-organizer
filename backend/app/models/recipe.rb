class Recipe < ApplicationRecord
    has_many :ingredients
    has_many :instructions
    validates :name, presence: true
end
