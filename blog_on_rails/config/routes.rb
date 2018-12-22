Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

########################
# POSTS-related routes #
########################
get("/", to: "posts#index", as: :root)
get("/posts/new", to: "posts#new", as: :new_post)
post("/posts", to: "posts#create", as: :posts)
get("/posts/:id", to: "posts#show", as: :post)
get("/posts/:id/edit", to: "posts#edit", as: :edit_post)
patch("/posts/:id", to: "posts#update")
delete("/posts/:id", to: "posts#destroy", as: :destroy_post)

###########################
# COMMENTS-related routes #
###########################
delete("/comments/:id", to: "comments#destroy", as: :destroy_comment)
post("/comments/:id", to: "comments#create", as: :post_comments)

########################
# USERS-related routes #
########################
get("/users/new", to: "users#new", as: :new_user)
post("/users", to: "users#create", as: :users)
get("/users/:id/edit", to: "users#edit", as: :user)
patch("/users/:id/edit", to: "users#update")
get("/users/:id/edit/password", to: "users#edit_password", as: :edit_password)
post("/users/:id/edit/password", to: "users#update_password")

##########################
# SESSION-related routes #
##########################
get("/session/new", to: "sessions#new", as: :new_session)
post("/session/new", to: "sessions#create")
delete("/session", to: "sessions#destroy")

end
