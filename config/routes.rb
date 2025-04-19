Rails.application.routes.draw do
  devise_for :users
  get 'main/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "main#index"
  resources :abouts
  # Defines the root path route ("/")
  # root "articles#index"
end
