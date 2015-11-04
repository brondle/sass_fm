Rails.application.routes.draw do
  get 'sessions/new'

  root 'users#new'
  resources :users do
    resources :reviews
    resources :albums
  end
  resources :sessions

  resources :albums do
    resources :reviews
  end
end
