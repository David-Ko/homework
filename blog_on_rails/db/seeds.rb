# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Comment.destroy_all
User.destroy_all

PASSWORD = "supersecret"

super_user = User.create(
    name: "Codecore",
    email: "codecore@gmail.com",
    password: PASSWORD,
    admin: true
)

10.times do
    name = Faker::Name.name
    email = "#{name.downcase}@example.com"
    User.create(
        name: name,
        email: email,
        password: PASSWORD
    )
end
users = User.all

50.times do
    title = Faker::Lorem.sentence
    body = Faker::Lorem.paragraph_by_chars
    created_at = Faker::Date.backward(365 * 5)

    p = Post.create(
        title: title,
        body: body,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )

    if p.valid?
        rand(0..10).times do
            p.comments << Comment.new(
                body: Faker::Hacker.say_something_smart,
                user: users.sample
            )
        end
    end
end

posts = Post.all
comments = Comment.all
puts "I've seeded #{posts.count} posts"
puts "I've seeded #{comments.count} comments"
puts "I've seeded #{users.count} users"