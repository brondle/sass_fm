Rails.application.routes.draw do
  resources :users
  resources :albums do
    resources :reviews
  end
end
