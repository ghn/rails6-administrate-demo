class Post < ApplicationRecord
    has_rich_text :content

    belongs_to :author, optional: true
end
