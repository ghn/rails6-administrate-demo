Rails.application.routes.draw do
  resources :authors
  namespace :admin do
    root 'authors#index'

    resources :authors
    resources :posts
  end
end
