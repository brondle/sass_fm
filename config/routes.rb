Rails.application.routes.draw do
  devise_for :users
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  root to: 'application#angular'
  resources :sessions
  resources :users do
      resources :reviews, defaults: {format: 'json'}
      resources :saved_objects, defaults: {format: 'json'}
  end
  resources :saved_objects, defaults: {format: 'json'}, only: [:create, :index, :show] do
    resources :reviews, defaults: {format: 'json'}, only: [:show, :create] do
      member do
        # put '/upvote' => 'reviews#upvote'
      end
    end
    member do
      # put '/upvote' => 'albums#upvote'
    end
  end
end
